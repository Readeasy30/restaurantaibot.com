export async function onRequestGet(context) {
  const { env } = context;

  return new Response(JSON.stringify({
    googleMapsApiKey: env.GOOGLE_MAPS_API_KEY || ''
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store'
    }
  });
}
