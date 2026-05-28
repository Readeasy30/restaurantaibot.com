# RestaurantAIBot

Ask AI. Find Food. Anywhere on Earth.

RestaurantAIBot is an AI-powered worldwide restaurant discovery website. Visitors can search by craving, city, mood, budget, dining style, travel destination, or “near me.” The site uses AI to understand the food intent, then uses live restaurant and map search data from Google Places / Maps to show restaurant matches.

## Product positioning

RestaurantAIBot is not a generic web crawler. It is a restaurant discovery app that combines:

- AI food-intent parsing
- worldwide city and nearby restaurant search
- Google Places / Maps restaurant data
- simple consumer search pages
- city, cuisine, and dining-style landing pages

## Live goal

Build a useful worldwide restaurant search site that can later grow into:

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
- `public/quick-searches.js` — quick search buttons, URL query support, and injected homepage links
- `public/popular-searches.html` — popular restaurant search hub
- `public/about.html` — About page
- `public/contact.html` — Contact page
- `public/privacy.html` — Privacy page
- `public/terms.html` — Terms page
- `public/owner-advertise.html` — restaurant owner / advertiser interest page
- `public/robots.txt` — crawler rules
- `public/sitemap.xml` — sitemap for core pages
- `functions/api/search.js` — AI + Google Places restaurant search endpoint
- `functions/api/config.js` — exposes browser-safe Maps config from Cloudflare env vars
- `AGENTS.md` — AI work rules
- `AGENT-INSTRUCTIONS.md` — production build instructions
- `LOCKED-CHECKPOINT.md` — locked project direction and next queue
- `PROJECT-STATUS.md` — current project status
- `UX-GOALS.md` — product and visitor experience goals
- `MANUAL-TEST-CHECKLIST.md` — manual test checklist

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

1. Add internal links between SEO pages.
2. Add safe local advertising planning document.
3. Add more city landing pages.
4. Update sitemap in smaller chunks if connector permits.
5. Remove `.chatgpt-connector-test.md` once connector testing is no longer needed.
