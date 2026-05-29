# RestaurantAIBot

Ask AI. Find food. Anywhere on Earth.

RestaurantAIBot is an AI-powered worldwide restaurant discovery website. Visitors can search by craving, city, mood, budget, dining style, travel destination, or “near me.” The site uses AI to understand the food intent, then uses restaurant and map search data from Google Places / Maps to show restaurant matches.

## Product positioning

RestaurantAIBot is not a generic web crawler. It is a restaurant discovery app that combines:

- AI food-intent parsing
- worldwide city and nearby restaurant search
- Google Places / Maps restaurant data
- simple consumer search pages
- city, cuisine, and dining-style landing pages
- restaurant owner / advertiser planning pages

## Live goal

Build a useful worldwide restaurant search site that can later grow into:

- city and cuisine landing pages for SEO
- restaurant owner lead capture
- local advertising opportunities
- restaurant promotion packages
- affiliate or partnership pages
- travel and food discovery content

No live payments, live ad scripts, private keys, user accounts, uploads, ordering integrations, or tracking scripts should be added until intentionally approved.

## Current stack

- Cloudflare Pages for hosting
- Cloudflare Pages Functions for API routes
- OpenAI for food-intent parsing when configured
- Google Places / Maps for restaurant results when configured
- Simple HTML, CSS, and JavaScript

## Main files

- `public/index.html` — main search page
- `public/quick-searches.js` — quick search buttons, URL query support, and injected homepage links
- `public/popular-searches.html` — popular restaurant search hub
- `public/restaurant-cities.html` — city restaurant guide hub
- `public/about.html` — About page
- `public/contact.html` — Contact page
- `public/privacy.html` — Privacy page
- `public/terms.html` — Terms page
- `public/owner-advertise.html` — restaurant owner / advertiser interest page
- `public/restaurant-marketing-tools.html` — future restaurant marketing tools page
- `public/advertiser-intake.html` — advertiser interest intake page
- `public/sample-restaurant-profile.html` — sample/demo restaurant profile page
- `public/demo-promotions.json` — demo-only future placement data
- `public/demo-restaurant-profiles.json` — demo-only future restaurant profile data
- `public/robots.txt` — crawler rules
- `public/sitemap.xml` — sitemap for core, support, SEO, and city pages
- `functions/api/search.js` — AI + Google Places restaurant search endpoint
- `functions/api/config.js` — exposes browser-safe Maps config from Cloudflare env vars
- `AGENTS.md` — AI work rules
- `AGENT-INSTRUCTIONS.md` — production build instructions
- `CODEX-WORKFLOW.md` — Codex-first repo editing workflow
- `CURRENT-TASK.md` — current safe queue
- `LOCKED-CHECKPOINT.md` — locked project direction and next queue
- `PROJECT-STATUS.md` — current project status
- `UX-GOALS.md` — product and visitor experience goals
- `MANUAL-TEST-CHECKLIST.md` — manual test checklist

## Food SEO pages

- `public/pizza-near-me.html`
- `public/tacos-near-me.html`
- `public/sushi-near-me.html`
- `public/breakfast-near-me.html`
- `public/vegan-restaurants-near-me.html`
- `public/seafood-near-me.html`
- `public/coffee-near-me.html`
- `public/dinner-near-me.html`
- `public/cheap-eats-near-me.html`
- `public/outdoor-dining-near-me.html`

## City pages

- `public/chicago-restaurants.html`
- `public/new-york-restaurants.html`
- `public/dallas-restaurants.html`
- `public/miami-restaurants.html`
- `public/los-angeles-restaurants.html`
- `public/las-vegas-restaurants.html`
- `public/atlanta-restaurants.html`
- `public/denver-restaurants.html`
- `public/tokyo-restaurants.html`
- `public/london-restaurants.html`
- `public/paris-restaurants.html`
- `public/toronto-restaurants.html`

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
- Add demo-only planning JSON files that do not create live paid placement

Do not do without explicit approval:

- Add private keys or tokens
- Add payment setup
- Add live ads or tracking scripts
- Add user accounts, uploads, or ordering integrations
- Change frameworks
- Add build tools
- Delete major working code
- Replace Cloudflare auto-deploy with GitHub Actions

## Connector false positives

The ChatGPT GitHub connector may block harmless text-only updates. When that happens, treat it as a connector false positive. Retry smaller safe edits, record the blocker in `PROJECT-STATUS.md`, and continue the safe queue. Do not ask Gerry to edit files manually.

Known connector false positives:

- `public/dallas-restaurants.html` city-to-food cross-link update
- `public/tokyo-restaurants.html` city-to-food cross-link update

## Current safe build queue

1. Retry Dallas and Tokyo cross-link updates later through Codex or a connector retry.
2. Consider a simple shared helper script only if it reduces future duplicate edits without changing the stack.
3. Run manual/browser tests using `MANUAL-TEST-CHECKLIST.md`.
4. Keep live ads, payments, tracking, dashboards, and sponsored placements inactive until direct approval.
