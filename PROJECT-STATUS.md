# RestaurantAIBot Project Status

Last updated: 2026-06-21

## Repository

`Readeasy30/restaurantaibot.com`

## Locked checkpoint — 2026-06-21

Current active build direction remains locked around:

> AI restaurant finder for locals and travelers, with restaurant-owner promo and website services.

## Current business split

### RestaurantAIBot
- consumer restaurant finder
- restaurant-owner lead generation
- proof site for the restaurant website system

### Ladyfolks.com
- separate website-building business site
- not part of RestaurantAIBot build right now
- may be promoted later inside RestaurantAIBot as a clearly labeled ad or offer after RestaurantAIBot is locked

## Current public owner-service pricing to preserve

- Visibility Check — **$10 one time**
- Starter Profile — **$20/mo**
- Smart Promo Card — **$50/mo**
- Traveler Visibility — **$100/mo**
- Website Starter — **$309 setup + $40/mo**
- Website Pro — **$619 setup + $82/mo**

## Owner website offer direction to preserve

- Website builds should stay simple and repeatable.
- Owner should be able to self-manage routine content such as menu, specials, and hours whenever possible.
- Monthly service should represent real value such as visibility, promotion support, and meaningful improvements, not random tiny text edits.
- RestaurantAIBot remains static HTML/CSS/JS on GitHub + Cloudflare Pages.

## Current stable systems

- AI restaurant finder homepage.
- Demo search fallback when live keys are missing.
- Clear demo/sponsored/complimentary labels where needed.
- Restaurant owner sales page.
- Founder Complimentary Promo Cards page.
- Static Restaurant Owner Intake page.
- Restaurant Website Starter sales page.
- AI Finder page, Popular Searches hub, Restaurant Cities hub, and supporting SEO pages.
- Webmasters LLC owner/operator language on owner-facing pages.

## Current stable architecture

- Static site using plain HTML, CSS, and JavaScript.
- Preferred Cloudflare Pages output directory remains `public`.
- No React, Vite, Next.js, TypeScript, or framework migration.
- `public/index.html` is the main website/search page.
- `public/quick-searches.js` handles homepage helper content and quick links.
- `functions/api/search.js` handles restaurant search and demo fallback.
- `functions/api/config.js` returns browser-safe Google Maps readiness fields.
- `public/disclaimer.html` contains the site-wide disclaimer.
- `public/restaurant-owner-intake.html` is a static email/copy-paste intake page only.
- `public/owner-advertise.html` is the main owner sales page.
- `public/restaurant-website-starter.html` is the starter website sales page.

## Operational status

Operational in repo:

- Homepage AI restaurant search UI.
- Demo search fallback when live keys are missing.
- Map/API readiness checks.
- SEO landing pages.
- Owner lead pages and intake path.
- Website Starter sales page.
- Founder card inquiry path.
- Restaurant owner resources pages.

## Live-deployment items to verify after Cloudflare deploys latest GitHub commits

1. `https://restaurantaibot.com/`
2. `https://restaurantaibot.com/popular-searches.html`
3. `https://restaurantaibot.com/restaurant-cities.html`
4. `https://restaurantaibot.com/owner-advertise.html`
5. `https://restaurantaibot.com/restaurant-owner-intake.html`
6. `https://restaurantaibot.com/restaurant-website-starter.html`
7. `https://restaurantaibot.com/disclaimer.html`
8. `https://restaurantaibot.com/sitemap.xml`

## Cloudflare variables still needed for full live map/search

- Required for live map/search: `GOOGLE_MAPS_API_KEY`.
- Optional for AI parsing: `OPENAI_API_KEY`.
- Keys must be entered directly in Cloudflare Variables and Secrets, not in chat or GitHub.

## Not operational yet

Do not present these as live:

- Paid placements with live checkout.
- Tracking scripts.
- Advertiser dashboard.
- Owner upload system.
- User accounts.
- Automatic campaign approval.
- Live paid sponsored placements.
- Real-time restaurant owner billing.

## Current safe queue after lock

1. Tighten homepage owner CTA path and internal links.
2. Tighten owner package pages around the locked pricing above.
3. Browser-test live pages after Cloudflare deploys latest GitHub commits.
4. Keep live paid ads, payments, tracking, dashboards, uploads, and accounts inactive until direct approval.
5. After RestaurantAIBot is locked, move to `ladyfolks.com` as the separate website-building business site.

## Safety lock

No private keys, API keys, live ads, live tracking, payment setup, affiliate links, accounts, upload systems, public owner dashboards, automated ordering integrations, scraping systems, framework rebuilds, or major code deletion should be added without direct approval.

All restaurant data, AI results, language help, promo cards, owner services, photos, ambience images, and outside links require direct confirmation and do not create guarantees.