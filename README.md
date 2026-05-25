# restaurantaibot.com

Ask AI. Find Food. Anywhere on Earth.

RestaurantAIBot is a global AI restaurant discovery project using:

- Cloudflare Pages for hosting
- Cloudflare Pages Functions for `/api/search`
- OpenAI for food-intent parsing
- Google Places / Maps for restaurant results

## Cloudflare Pages settings

- Project: `restaurantaibot`
- Build command: leave blank
- Build output directory: `public`
- Production branch: `main`

## Required Cloudflare environment variables

Add these in Cloudflare Pages settings:

- `OPENAI_API_KEY`
- `GOOGLE_MAPS_API_KEY`

Do not commit real API keys to GitHub.
