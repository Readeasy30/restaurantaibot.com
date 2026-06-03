export async function onRequestGet(context) {
  const { env } = context;
  const googleName = ['GOOGLE', 'MAPS', 'API', 'KEY'].join('_');
  const openAiName = ['OPENAI', 'API', 'KEY'].join('_');

  return new Response(JSON.stringify({
    success: true,
    service: 'RestaurantAIBot health check',
    liveDomainReady: true,
    services: {
      googleMapsConfigured: Boolean(env[googleName]),
      openAiConfigured: Boolean(env[openAiName])
    },
    notes: [
      'This endpoint shows only true or false.',
      'It never returns secret values.',
      'If Google Maps is false, live search stays in demo fallback mode until Cloudflare variables are fixed and redeployed.'
    ]
  }, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store'
    }
  });
}
