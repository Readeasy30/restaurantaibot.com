const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.static('public'));

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/api/config', (req, res) => {
  res.json({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY || ''
  });
});

app.post('/api/search', async (req, res) => {
  const { message } = req.body;

  if (!message || !message.trim()) {
    return res.status(400).json({
      success: false,
      error: 'Search message is required.'
    });
  }

  if (!OPENAI_API_KEY || !GOOGLE_MAPS_API_KEY) {
    return res.status(500).json({
      success: false,
      error: 'Missing OPENAI_API_KEY or GOOGLE_MAPS_API_KEY.'
    });
  }

  try {
    const aiResponse = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4o-mini',
        response_format: { type: 'json_object' },
        messages: [
          {
            role: 'system',
            content:
              "You are a restaurant travel assistant. Extract the search location and restaurant criteria from the user's prompt. Respond ONLY as JSON with keys: location and cuisine. If location is missing, use 'near me'."
          },
          {
            role: 'user',
            content: message
          }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const parsedSearch = JSON.parse(aiResponse.data.choices[0].message.content);
    const location = parsedSearch.location || 'near me';
    const cuisine = parsedSearch.cuisine || 'restaurant';

    const googleUrl = 'https://maps.googleapis.com/maps/api/place/textsearch/json';
    const googleResponse = await axios.get(googleUrl, {
      params: {
        query: `${cuisine} in ${location}`,
        key: GOOGLE_MAPS_API_KEY
      }
    });

    const restaurants = (googleResponse.data.results || []).slice(0, 10).map(place => ({
      name: place.name,
      address: place.formatted_address,
      rating: place.rating || 'N/A',
      lat: place.geometry?.location?.lat,
      lng: place.geometry?.location?.lng,
      placeId: place.place_id
    })).filter(place => place.lat && place.lng);

    res.json({
      success: true,
      aiExplanation: `I found these restaurant matches for ${cuisine} in ${location}.`,
      restaurants
    });
  } catch (error) {
    console.error(error.response?.data || error.message);

    res.status(500).json({
      success: false,
      error: 'Failed to process restaurant search.'
    });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`RestaurantAIBot running on port ${PORT}`);
});
