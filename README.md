# RestaurantAIBot

Ask AI. Find Food. Anywhere on Earth.

RestaurantAIBot is an AI restaurant discovery website. Visitors can search by craving, city, mood, budget, dining style, or “near me.” The site uses AI to understand the search and Google Maps / Places results to show restaurant matches.

## Live goal

Build a useful restaurant search site that can later grow into:

- City and cuisine landing pages for SEO
- Restaurant owner lead capture
- Local advertising opportunities
- Restaurant promotion packages
- Affiliate or partnership pages
- Travel and food discovery content

No live payments, live ad scripts, private keys, or tracking scripts should be added until intentionally approved.

## Current stack

- Cloudflare Pages for hosting
- Cloudflare Pages Functions for API routes
- OpenAI for food-intent parsing
- Google Places / Maps for restaurant results
- Simple HTML, CSS, and JavaScript

## Main files

- `public/index.html` — main search page
- `public/quick-searches.js` — quick search buttons
- `public/about.html` — About page
- `public/contact.html` — Contact page
- `public/privacy.html` — Privacy page
- `public/terms.html` — Terms page
- `public/robots.txt` — crawler rules
- `public/sitemap.xml` — sitemap for core pages
- `functions/api/search.js` — AI + Google Places restaurant search endpoint
- `functions/api/config.js` — exposes browser-safe Maps config from Cloudflare env vars
- `AGENTS.md` — AI work rules
- `AGENT-INSTRUCTIONS.md` — production build instructions
- `LOCKED-CHECKPOINT.md` — locked project direction and next queue
- `PROJECT-STATUS.md` — current project status

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

## Deployment rule

Use the native Cloudflare Pages GitHub integration.

Do not add a GitHub Actions deployment workflow unless Cloudflare auto-deploy is removed later. The current setup already deploys every push to `main`, so a separate workflow would add unnecessary duplicate deployment risk.

## Safe development rules

Allowed:

- Improve HTML, CSS, and JavaScript
- Improve copy, navigation, mobile layout, accessibility, and support pages
- Add SEO landing pages
- Add planning pages for restaurant owners and advertisers
- Add README, checklist, sitemap, and status files

Do not do without explicit approval:

- Add private keys or tokens
- Add payment setup
- Add live ads or tracking scripts
- Change frameworks
- Add build tools
- Delete major working code
- Replace Cloudflare auto-deploy with GitHub Actions

## Current safe build queue

1. Upgrade About, Contact, and Privacy pages.
2. Add restaurant owner / advertiser interest page.
3. Add first SEO landing pages.
4. Improve API validation and error handling.
5. Add more structured content for restaurant discovery.
6. Remove `.chatgpt-connector-test.md` once connector testing is no longer needed.
