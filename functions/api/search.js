export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const body = await request.json();
    const message = body.message;
    const lat = Number(body.lat);
    const lng = Number(body.lng);
    const hasCoordinates = Number.isFinite(lat) && Number.isFinite(lng);

    if (!message || !message.trim()) {
      return jsonResponse({
        success: false,
        error: 'Search message is required.'
      }, 400);
    }

    if (!env.OPENAI_API_KEY || !env.GOOGLE_MAPS_API_KEY) {
      return jsonResponse({
        success: false,
        error: 'Missing Cloudflare secrets: OPENAI_API_KEY or GOOGLE_MAPS_API_KEY.'
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
            content: "You are a restaurant search assistant. Extract what kind of restaurant or food the user wants. Respond ONLY as JSON with keys: location and cuisine. If the user asks for near me, nearby, closest, local, or does not mention a city, set location to near me. Keep cuisine short, like pizza, tacos, breakfast, sushi, romantic dinner, vegan food, seafood, coffee, or restaurant."
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
        error: 'OpenAI search parsing failed.'
      }, 500);
    }

    const aiData = await aiResponse.json();
    const parsedSearch = JSON.parse(aiData.choices[0].message.content);
    const location = parsedSearch.location || 'near me';
    const cuisine = parsedSearch.cuisine || 'restaurant';

    const googleUrl = new URL('https://maps.googleapis.com/maps/api/place/textsearch/json');

    if (hasCoordinates && isNearMeSearch(message, location)) {
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
        error: 'Google restaurant search failed.'
      }, 500);
    }

    const googleData = await googleResponse.json();

    const restaurants = (googleData.results || [])
      .slice(0, 10)
      .map(place => ({
        name: place.name,
        address: place.formatted_address,
        rating: place.rating || 'N/A',
        openNow: place.opening_hours?.open_now,
        priceLevel: place.price_level,
        lat: place.geometry?.location?.lat,
        lng: place.geometry?.location?.lng,
        placeId: place.place_id
      }))
      .filter(place => place.lat && place.lng);

    const areaText = hasCoordinates && isNearMeSearch(message, location) ? 'near you' : `in ${location}`;

    return jsonResponse({
      success: true,
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

function isNearMeSearch(message, location) {
  const text = `${message} ${location}`.toLowerCase();
  return text.includes('near me') ||
    text.includes('nearby') ||
    text.includes('closest') ||
    text.includes('around me') ||
    text.includes('local') ||
    location.toLowerCase() === 'near me';
}

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
