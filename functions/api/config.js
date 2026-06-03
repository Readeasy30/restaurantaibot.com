export async function onRequestGet(context) {
  const { env } = context;
  const googleMapsApiKey = env.GOOGLE_MAPS_API_KEY || '';

  return new Response(JSON.stringify({
    googleMapsApiKey,
    googleMapsConfigured: Boolean(googleMapsApiKey),
    mapStatus: googleMapsApiKey ? 'configured' : 'setup_required'
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store'
    }
  });
}
