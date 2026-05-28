# Locked Checkpoint

Date: 2026-05-27
Repository: `Wholelychit/restaurantaibot.com`

## Stable direction

RestaurantAIBot is a simple Cloudflare Pages website with Cloudflare Pages Functions. Keep the current stack. Do not convert to React, Vite, Next.js, TypeScript, or a new build system unless Gerry clearly requests a rebuild later.

## Current working architecture

- `public/index.html` is the main restaurant search page.
- `public/quick-searches.js` adds quick search buttons.
- `functions/api/search.js` powers AI restaurant search with OpenAI and Google Places.
- `functions/api/config.js` exposes the Google Maps browser key from Cloudflare environment variables.
- `public/robots.txt` points search engines to the sitemap.
- `public/sitemap.xml` lists the core pages.

## Required deployment setup

Cloudflare Pages settings should remain:

- Project: `restaurantaibot`
- Build command: blank
- Build output directory: `public`
- Production branch: `main`

Required Cloudflare environment variables:

- `OPENAI_API_KEY`
- `GOOGLE_MAPS_API_KEY`

Never commit real keys to GitHub.

## Safe completed queue

- Confirmed GitHub connector write access.
- Added tiny connector test file.
- Added Terms page.
- Improved homepage navigation, footer, mobile layout, accessibility, and safer DOM rendering.
- Added sitemap.xml.
- Added AGENT-INSTRUCTIONS.md.

## Next safe queue

1. Improve About, Contact, and Privacy pages from single-line placeholders into better pages.
2. Add restaurant owner / advertising interest page without live payment or live ad code.
3. Add first SEO landing pages for high-value searches such as pizza, tacos, sushi, breakfast, romantic dinner, and vegan restaurants.
4. Improve API error handling and response validation.
5. Add a simple manual test checklist.
6. Consider deleting `.chatgpt-connector-test.md` after enough successful commits.
