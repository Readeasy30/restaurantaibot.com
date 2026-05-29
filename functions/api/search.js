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

    if (!env.OPENAI_API_KEY || !env.GOOGLE_MAPS_API_KEY) {
      return jsonResponse({
        success: false,
        error: 'Restaurant search is not fully configured yet.'
      }, 500);
    }

    const aiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.OPENAI_API_KEY}`,
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
      return jsonResponse({
        success: false,
        error: 'AI search parsing failed. Try a simpler food and city search.'
      }, 500);
    }

    const aiData = await aiResponse.json();
    const parsedSearch = safeParseAiSearch(aiData);
    const location = sanitizeText(parsedSearch.location, 80) || 'near me';
    const cuisine = sanitizeText(parsedSearch.cuisine, 80) || 'restaurant';
    const wantsNearby = isNearMeSearch(message, location);

    if (wantsNearby && !hasCoordinates) {
      return jsonResponse({
        success: false,
        error: 'For “near me” searches, click Use My Location first or type a city, like “pizza in Chicago.”'
      }, 400);
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
      return jsonResponse({
        success: false,
        error: 'Restaurant map search failed. Try again or search a city name.'
      }, 500);
    }

    const googleData = await googleResponse.json();

    if (googleData.status && !['OK', 'ZERO_RESULTS'].includes(googleData.status)) {
      console.error('Google Places status:', googleData.status, googleData.error_message || '');
      return jsonResponse({
        success: false,
        error: 'Restaurant search service returned an error. Try a different search.'
      }, 502);
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
        placeId: place.place_id
      }))
      .filter(place => Number.isFinite(place.lat) && Number.isFinite(place.lng));

    const areaText = wantsNearby ? 'near you' : `in ${location}`;

    return jsonResponse({
      success: true,
      aiExplanation: restaurants.length
        ? `I found these ${cuisine} matches ${areaText}.`
        : `I could not find matching ${cuisine} restaurants ${areaText}. Try another city, neighborhood, or food type.`,
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
  const lowerLocation = location.toLowerCase();
  if (lowerLocation === 'near me') return true;

  const text = message.toLowerCase();
  return text.includes('near me') ||
    text.includes('around me') ||
    text.includes('closest to me') ||
    text.includes('current location') ||
    text.includes('my location') ||
    text.includes('nearby me');
}

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
