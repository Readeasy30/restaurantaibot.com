export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    if (!isJsonRequest(request)) {
      return jsonResponse({
        success: false,
        error: 'Please send restaurant search requests as JSON.'
      }, 415);
    }

    const body = await safeReadJson(request);

    if (!body) {
      return jsonResponse({
        success: false,
        error: 'Invalid JSON request body.'
      }, 400);
    }

    const message = sanitizeText(body.message, 180);
    const lat = Number(body.lat);
    const lng = Number(body.lng);
    const hasCoordinates = isValidLatLng(lat, lng);

    if (!message) {
      return jsonResponse({
        success: false,
        error: 'Search message is required.'
      }, 400);
    }

    let parsedSearch = parseSearchLocally(message);
    let usedAiParsing = false;

    if (env.OPENAI_API_KEY) {
      const aiParsed = await parseSearchWithAi(message, env.OPENAI_API_KEY);
      if (aiParsed) {
        parsedSearch = aiParsed;
        usedAiParsing = true;
      }
    }

    const location = sanitizeText(parsedSearch.location, 80) || 'near me';
    const cuisine = sanitizeText(parsedSearch.cuisine, 80) || 'restaurant';
    const wantsNearby = isNearMeSearch(message, location);

    if (wantsNearby && !hasCoordinates) {
      return jsonResponse({
        success: false,
        error: 'For “near me” searches, click Use My Location first or type a city, like “pizza in Chicago.”'
      }, 400);
    }

    if (!env.GOOGLE_MAPS_API_KEY) {
      return jsonResponse(buildDemoSearchResponse({
        message,
        cuisine,
        location,
        wantsNearby,
        lat,
        lng,
        usedAiParsing,
        reason: 'Google Maps is not configured yet, so this is a safe demo result.'
      }));
    }

    const googleUrl = new URL('https://maps.googleapis.com/maps/api/place/textsearch/json');

    if (wantsNearby) {
      googleUrl.searchParams.set('query', cuisine);
      googleUrl.searchParams.set('location', `${lat},${lng}`);
      googleUrl.searchParams.set('radius', '8000');
    } else {
      googleUrl.searchParams.set('query', `${cuisine} in ${location}`);
    }

    googleUrl.searchParams.set('key', env.GOOGLE_MAPS_API_KEY);

    const googleResponse = await fetch(googleUrl.toString());

    if (!googleResponse.ok) {
      const errorText = await googleResponse.text();
      console.error('Google Places error:', errorText);
      return jsonResponse(buildDemoSearchResponse({
        message,
        cuisine,
        location,
        wantsNearby,
        lat,
        lng,
        usedAiParsing,
        reason: 'Live restaurant search had a temporary problem, so this is a safe demo result.'
      }), 200);
    }

    const googleData = await googleResponse.json();

    if (googleData.status && !['OK', 'ZERO_RESULTS'].includes(googleData.status)) {
      console.error('Google Places status:', googleData.status, googleData.error_message || '');
      return jsonResponse(buildDemoSearchResponse({
        message,
        cuisine,
        location,
        wantsNearby,
        lat,
        lng,
        usedAiParsing,
        reason: 'Live restaurant search returned a service error, so this is a safe demo result.'
      }), 200);
    }

    const restaurants = (googleData.results || [])
      .slice(0, 10)
      .map(place => ({
        name: place.name || 'Restaurant',
        address: place.formatted_address || 'Address unavailable',
        rating: place.rating || 'N/A',
        openNow: place.opening_hours?.open_now,
        priceLevel: place.price_level,
        lat: place.geometry?.location?.lat,
        lng: place.geometry?.location?.lng,
        placeId: place.place_id,
        source: 'Google Places'
      }))
      .filter(place => Number.isFinite(place.lat) && Number.isFinite(place.lng));

    const areaText = wantsNearby ? 'near you' : `in ${location}`;

    if (!restaurants.length) {
      return jsonResponse(buildDemoSearchResponse({
        message,
        cuisine,
        location,
        wantsNearby,
        lat,
        lng,
        usedAiParsing,
        reason: 'No live matches came back, so these demo examples show how results will appear.'
      }), 200);
    }

    return jsonResponse({
      success: true,
      demoMode: false,
      aiExplanation: `I found these ${cuisine} matches ${areaText}.`,
      restaurants
    });
  } catch (error) {
    console.error(error);

    return jsonResponse({
      success: false,
      error: 'Failed to process restaurant search.'
    }, 500);
  }
}

async function parseSearchWithAi(message, apiKey) {
  try {
    const aiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        response_format: { type: 'json_object' },
        messages: [
          {
            role: 'system',
            content: 'You are a restaurant search assistant. Extract what kind of restaurant or food the user wants. Respond ONLY as JSON with keys: location and cuisine. If the user asks for near me, around me, closest to me, current location, my location, nearby without naming a city, local without naming a city, or does not mention a city, set location to near me. If the user names a city or area, use that city or area as location even when the user says local. Keep cuisine short, like pizza, tacos, breakfast, sushi, nice dinner, vegan food, seafood, coffee, or restaurant.'
          },
          {
            role: 'user',
            content: message
          }
        ]
      })
    });

    if (!aiResponse.ok) {
      const errorText = await aiResponse.text();
      console.error('OpenAI error:', errorText);
      return null;
    }

    const aiData = await aiResponse.json();
    const parsed = safeParseAiSearch(aiData);

    if (!parsed.location && !parsed.cuisine) return null;
    return parsed;
  } catch (error) {
    console.error('OpenAI parse fallback:', error);
    return null;
  }
}

function parseSearchLocally(message) {
  const text = sanitizeText(message, 180);
  const lower = text.toLowerCase();
  const city = findKnownCity(lower);
  const cuisine = findCuisine(lower) || 'restaurant';

  if (city) {
    return { cuisine, location: city.name };
  }

  const inMatch = lower.match(/(?:in|near|around)\s+([a-z][a-z\s.-]{2,60})$/i);
  if (inMatch && !isNearMePhrase(inMatch[1])) {
    return {
      cuisine,
      location: titleCase(inMatch[1].replace(/[?.!]+$/, '').trim())
    };
  }

  return {
    cuisine,
    location: 'near me'
  };
}

function buildDemoSearchResponse({ message, cuisine, location, wantsNearby, lat, lng, usedAiParsing, reason }) {
  const center = getDemoCenter({ location, wantsNearby, lat, lng });
  const areaText = wantsNearby ? 'near you' : `in ${location}`;
  const restaurants = buildDemoRestaurants({ cuisine, location, center });

  return {
    success: true,
    demoMode: true,
    aiExplanation: `${reason} Here are sample ${cuisine} matches ${areaText}. Confirm real hours, menus, allergies, prices, and availability before visiting.`,
    parsedBy: usedAiParsing ? 'AI + local fallback' : 'local fallback',
    originalSearch: message,
    restaurants
  };
}

function buildDemoRestaurants({ cuisine, location, center }) {
  const food = titleCase(cuisine || 'restaurant');
  const area = location && location !== 'near me' ? location : 'Your Area';
  const names = [
    `${area} ${food} House`,
    `The Local ${food} Table`,
    `${food} Corner Kitchen`,
    `Fresh Bite ${food} Cafe`,
    `${area} Family Grill`
  ];

  return names.map((name, index) => ({
    name,
    address: index === 0 ? `${area} main dining area` : `${area} restaurant district`,
    rating: (4.6 - index * 0.1).toFixed(1),
    openNow: null,
    priceLevel: index % 3,
    lat: Number((center.lat + index * 0.012).toFixed(6)),
    lng: Number((center.lng - index * 0.012).toFixed(6)),
    placeId: `demo-${slugify(name)}`,
    source: 'Demo result'
  }));
}

function getDemoCenter({ location, wantsNearby, lat, lng }) {
  if (wantsNearby && isValidLatLng(lat, lng)) {
    return { lat, lng };
  }

  const city = findKnownCity(String(location || '').toLowerCase());
  if (city) return { lat: city.lat, lng: city.lng };

  return { lat: 39.8283, lng: -98.5795 };
}

function findKnownCity(lowerText) {
  return KNOWN_CITIES.find(city => lowerText.includes(city.key));
}

function findCuisine(lowerText) {
  const direct = CUISINES.find(item => lowerText.includes(item.key));
  if (direct) return direct.label;

  const cleaned = lowerText
    .replace(/restaurants?/g, '')
    .replace(/food/g, '')
    .replace(/near me|around me|closest to me|current location|my location|nearby/g, '')
    .replace(/\b(in|near|around|best|cheap|good|great|local|find|show|me|for|tonight|today)\b/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  return cleaned ? cleaned.slice(0, 40) : 'restaurant';
}

function isJsonRequest(request) {
  const contentType = request.headers.get('content-type') || '';
  return contentType.includes('application/json');
}

async function safeReadJson(request) {
  try {
    return await request.json();
  } catch {
    return null;
  }
}

function sanitizeText(value, maxLength) {
  if (typeof value !== 'string') return '';
  return value.replace(/\s+/g, ' ').trim().slice(0, maxLength);
}

function isValidLatLng(lat, lng) {
  return Number.isFinite(lat) &&
    Number.isFinite(lng) &&
    lat >= -90 &&
    lat <= 90 &&
    lng >= -180 &&
    lng <= 180;
}

function safeParseAiSearch(aiData) {
  try {
    const content = aiData?.choices?.[0]?.message?.content;
    const parsed = JSON.parse(content || '{}');
    return typeof parsed === 'object' && parsed ? parsed : {};
  } catch {
    return {};
  }
}

function isNearMeSearch(message, location) {
  const lowerLocation = String(location || '').toLowerCase();
  if (lowerLocation === 'near me') return true;

  const text = message.toLowerCase();
  return text.includes('near me') ||
    text.includes('around me') ||
    text.includes('closest to me') ||
    text.includes('current location') ||
    text.includes('my location') ||
    text.includes('nearby me');
}

function isNearMePhrase(value) {
  const text = String(value || '').toLowerCase();
  return text.includes('me') || text.includes('my location') || text.includes('current location');
}

function titleCase(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/\b\w/g, char => char.toUpperCase());
}

function slugify(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

const CUISINES = [
  { key: 'pizza', label: 'pizza' },
  { key: 'taco', label: 'tacos' },
  { key: 'sushi', label: 'sushi' },
  { key: 'breakfast', label: 'breakfast' },
  { key: 'brunch', label: 'brunch' },
  { key: 'vegan', label: 'vegan food' },
  { key: 'vegetarian', label: 'vegetarian food' },
  { key: 'seafood', label: 'seafood' },
  { key: 'coffee', label: 'coffee' },
  { key: 'burger', label: 'burgers' },
  { key: 'bbq', label: 'BBQ' },
  { key: 'barbecue', label: 'BBQ' },
  { key: 'steak', label: 'steakhouse' },
  { key: 'mexican', label: 'Mexican food' },
  { key: 'italian', label: 'Italian food' },
  { key: 'thai', label: 'Thai food' },
  { key: 'chinese', label: 'Chinese food' },
  { key: 'indian', label: 'Indian food' },
  { key: 'cheap', label: 'cheap eats' },
  { key: 'outdoor', label: 'outdoor dining' },
  { key: 'dinner', label: 'dinner' },
  { key: 'lunch', label: 'lunch' }
];

const KNOWN_CITIES = [
  { key: 'chicago', name: 'Chicago', lat: 41.8781, lng: -87.6298 },
  { key: 'new york', name: 'New York', lat: 40.7128, lng: -74.0060 },
  { key: 'nyc', name: 'New York', lat: 40.7128, lng: -74.0060 },
  { key: 'dallas', name: 'Dallas', lat: 32.7767, lng: -96.7970 },
  { key: 'miami', name: 'Miami', lat: 25.7617, lng: -80.1918 },
  { key: 'los angeles', name: 'Los Angeles', lat: 34.0522, lng: -118.2437 },
  { key: 'la ', name: 'Los Angeles', lat: 34.0522, lng: -118.2437 },
  { key: 'las vegas', name: 'Las Vegas', lat: 36.1699, lng: -115.1398 },
  { key: 'atlanta', name: 'Atlanta', lat: 33.7490, lng: -84.3880 },
  { key: 'denver', name: 'Denver', lat: 39.7392, lng: -104.9903 },
  { key: 'tokyo', name: 'Tokyo', lat: 35.6762, lng: 139.6503 },
  { key: 'london', name: 'London', lat: 51.5072, lng: -0.1276 },
  { key: 'paris', name: 'Paris', lat: 48.8566, lng: 2.3522 },
  { key: 'toronto', name: 'Toronto', lat: 43.6532, lng: -79.3832 },
  { key: 'austin', name: 'Austin', lat: 30.2672, lng: -97.7431 },
  { key: 'branson', name: 'Branson', lat: 36.6437, lng: -93.2185 },
  { key: 'springfield', name: 'Springfield', lat: 37.2089, lng: -93.2923 },
  { key: 'orlando', name: 'Orlando', lat: 28.5383, lng: -81.3792 },
  { key: 'seattle', name: 'Seattle', lat: 47.6062, lng: -122.3321 },
  { key: 'san francisco', name: 'San Francisco', lat: 37.7749, lng: -122.4194 }
];
