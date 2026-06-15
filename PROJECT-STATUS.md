# RestaurantAIBot Project Status

Last updated: 2026-06-14

## Repository

`Readeasy30/restaurantaibot.com`

## Locked checkpoint — 2026-06-14

Current active build direction is locked around:

> AI restaurant finder for locals and travelers, with restaurant-owner promo and website services.

Major June 14 completed commits include:

- `7cb12a2df53fa7e40033ccecbfc0d120a6744f27` — added AI Restaurant Finder SEO page.
- `5a041b2143a299409e6dacfb0260d9774c079bc9` — improved homepage SEO and structured data.
- `40b63b3fe283ace275aae608956681793e0054b6` — added Local / Traveler mode.
- `c14473c8152f46157c2297785ed801af211741d0` — added Tacos in Dallas SEO page.
- `9fcccb3052977a242dbf3a2ea247405b711f4888` — added Seafood in Miami SEO page.
- `f94011bcc290868ca44860c72b4642d826023e4a` — added Breakfast in New York SEO page.
- `b303fb7a0e471522df55e51a34e6d73277f088f3` — added Pizza in Chicago SEO page.
- `6397caa195896c06a430a90574c8a33145e18892` — added Sushi in Tokyo SEO page.
- `5f9e2bcd1ab5f7906860d2431a5fe5b7dc7dc0d2` — added Romantic Dinner in Paris SEO page.
- `428b8a9ae316b985819fdd030f341b551a5a04c4` — added Coffee in London SEO page.
- `c0ee7389f5782aea7e3e3df5fd5f57fb34399e07` — added Cheap Eats in Las Vegas SEO page.
- `85071f26ba5974a66db214c682d8b7c9a65b1f6d` — added Food Near Hotel SEO page.
- `d655f3a06fb717ff4afd2f29d1b6b83f735b626d` — added Restaurants Near Airport SEO page.
- `08173925e4b305937e1cbcb6c7437c7ffa3ba600` — added Restaurants Near Convention Center SEO page.
- `a19b3160f473935a76e08642094150fa0e51ba56` — added site-wide Disclaimer page naming Webmasters LLC.
- `bc22b81080b3710a8125f87873f29f43e090c349` — wired Founder Cards into owner page.
- `c71ff97d0280d93cad8ab16a44877898876d5cf9` — tightened Founder Cards page with Disclaimer and Webmasters LLC footer.
- `ea053f30a769afcdaee51c14663f8059428cd6b7` — added Restaurant Owner Intake page.
- `1e24c5a20794c9c56f982c48c557a59f3f0ac663` — linked Owner Intake from Founder Cards page.
- `9e2e05e607c4c4afe0d294cb1a440c1485e6f9fa` — linked new SEO pages from Popular Searches.
- `82f23ae2b094109e9c8434f63e55a00bd179d478` — linked new SEO pages from Restaurant Cities.
- `68a35571eadd0789af324b21693cd17c5f641795` — added new city/cuisine SEO pages to sitemap.
- `bf639d94db3d0f4d9f5b8809f634a131fc0c1581` — linked traveler-intent pages from Popular Searches.

## Owner/operator

RestaurantAIBot is owned and operated by **Webmasters LLC**.

Use this language consistently in footers, disclaimer, owner pages, intake pages, and future legal/policy pages.

## Current stable systems

- AI restaurant finder homepage.
- Homepage SEO title, description, canonical, Open Graph, Twitter card, and structured data.
- WebSite/SearchAction structured data on homepage.
- WebApplication structured data on homepage.
- Crawlable homepage explanation card with internal links.
- Local / Traveler mode buttons on homepage.
- Bites responsive text avatar.
- First-layer language choices for Bites helper text.
- Today’s feature demo Smart Promo Card.
- Demo-only restaurant search fallback.
- Clear demo/sponsored/complimentary labels where needed.
- Restaurant owner sales page.
- Founder Complimentary Promo Cards public page.
- Founder Cards wired into owner page navigation, hero, package grid, inquiry area, and footer.
- Static Restaurant Owner Intake page.
- Site-wide disclaimer page.
- Webmasters LLC footer language on owner/founder/intake pages.
- Restaurant Website Starter sales/template page.
- AI Restaurant Finder SEO page.
- Popular Searches hub.
- Restaurant Cities hub.
- City + cuisine SEO pages:
  - `public/tacos-in-dallas.html`
  - `public/seafood-in-miami.html`
  - `public/breakfast-in-new-york.html`
  - `public/pizza-in-chicago.html`
  - `public/sushi-in-tokyo.html`
  - `public/romantic-dinner-in-paris.html`
  - `public/coffee-in-london.html`
  - `public/cheap-eats-in-las-vegas.html`
- Traveler-intent SEO pages:
  - `public/food-near-hotel.html`
  - `public/restaurants-near-airport.html`
  - `public/restaurants-near-convention-center.html`
- Owner resource pages.
- Existing city pages.
- Existing food SEO pages.
- `CHANGELOG.md` records June 14 work.
- `SEO-STANDOUT-GROWTH-PLAN.md` records SEO and feature roadmap.
- `FOUNDER-COMPLIMENTARY-PROMO-CARD-PLAN.md` records temporary founder-card rules.

## Current stable architecture

- Static site using plain HTML, CSS, and JavaScript.
- Preferred Cloudflare Pages output directory remains `public`.
- No React, Vite, Next.js, Node build tooling, Tailwind, TypeScript, or framework migration.
- `public/index.html` is the main website/search page.
- `public/quick-searches.js` injects quick links, Local / Traveler mode, Today’s feature demo promo card, Founder Cards link, Disclaimer link, and homepage search helpers.
- `public/responsive-avatar.js` loads Bites and auto-loads the language helper.
- `public/language-choices.js` controls first-layer guide language choices.
- `functions/api/search.js` handles restaurant search and demo fallback.
- `functions/api/config.js` returns browser-safe Google Maps readiness fields.
- `functions/api/health.js` returns boolean-only readiness values.
- `public/disclaimer.html` contains the site-wide disclaimer.
- `public/founder-complimentary-promo-cards.html` supports founder-card owner inquiries and links to Owner Intake.
- `public/restaurant-owner-intake.html` is a static email/copy-paste intake page only.
- `public/owner-advertise.html` is the main owner sales page.
- `public/popular-searches.html` now links food pages, city + cuisine pages, and traveler-intent pages.
- `public/sitemap.xml` includes core SEO pages, food pages, city pages, and city/cuisine SEO pages through the second SEO batch. Note: traveler-intent sitemap update was blocked once and should be retried later.

## Operational status

Operational in repo:

- Homepage AI restaurant search UI.
- Demo search fallback when live keys are missing.
- Map/API readiness checks.
- SEO landing pages.
- Local / Traveler homepage mode.
- Bites helper avatar.
- First-layer language selection.
- Founder Cards page and owner inquiry path.
- Static owner intake page.
- Disclaimer page.
- Webmasters LLC owner/operator language.
- Owner packages and Website Starter sales pages.
- City + cuisine SEO page system with eight focused pages.
- Traveler-intent SEO page system with three focused pages.

Live-deployment items to verify after Cloudflare deploys latest GitHub commits:

1. `https://restaurantaibot.com/`
2. `https://restaurantaibot.com/food-near-hotel.html`
3. `https://restaurantaibot.com/restaurants-near-airport.html`
4. `https://restaurantaibot.com/restaurants-near-convention-center.html`
5. `https://restaurantaibot.com/popular-searches.html`
6. `https://restaurantaibot.com/owner-advertise.html`
7. `https://restaurantaibot.com/founder-complimentary-promo-cards.html`
8. `https://restaurantaibot.com/restaurant-owner-intake.html`
9. `https://restaurantaibot.com/disclaimer.html`
10. `https://restaurantaibot.com/ai-restaurant-finder.html`

Cloudflare variables still needed for full live map/search:

- Required for live map/search: `GOOGLE_MAPS_API_KEY`.
- Optional for AI parsing: `OPENAI_API_KEY`.
- Keys must be entered directly in Cloudflare Variables and Secrets, not in chat or GitHub.

## Not operational yet

Do not present these as live:

- Paid pop placements.
- Live local ads.
- Stripe checkout or payment links.
- Tracking scripts.
- Advertiser dashboard.
- Owner upload system.
- User accounts.
- Automatic campaign approval.
- Live paid sponsored placements.
- Live campaign reporting.
- Real-time restaurant owner billing.

## Current safe queue after lock

1. Internal linking cleanup:
   - Add Owner Intake links to more owner pages.
   - Add traveler-intent links to AI Finder, homepage helper, and related pages where useful.
2. Retry sitemap update for `disclaimer.html`, `founder-complimentary-promo-cards.html`, `restaurant-owner-intake.html`, and traveler-intent pages as a tiny focused commit.
3. Browser-test live pages after Cloudflare deploys latest commit.
4. Keep live paid ads, payments, tracking, dashboards, uploads, and accounts inactive until direct approval.

## Safety lock

No private keys, API keys, live ads, live tracking, payment setup, affiliate links, accounts, upload systems, public owner dashboards, automated ordering integrations, scraping systems, framework rebuilds, or major code deletion should be added without direct approval.

All restaurant data, AI results, language help, promo cards, owner services, and outside links require direct confirmation and do not create guarantees.
