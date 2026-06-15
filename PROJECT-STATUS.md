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
- `b303fb7a0e471522df55e51a34e6d73277f088f3` — added Pizza in Chicago SEO page.
- `6397caa195896c06a430a90574c8a33145e18892` — added Sushi in Tokyo SEO page.
- `5f9e2bcd1ab5f7906860d2431a5fe5b7dc7dc0d2` — added Romantic Dinner in Paris SEO page.
- `428b8a9ae316b985819fdd030f341b551a5a04c4` — added Coffee in London SEO page.
- `c0ee7389f5782aea7e3e3df5fd5f57fb34399e07` — added Cheap Eats in Las Vegas SEO page.
- `85071f26ba5974a66db214c682d8b7c9a65b1f6d` — added Food Near Hotel SEO page.
- `d655f3a06fb717ff4afd2f29d1b6b83f735b626d` — added Restaurants Near Airport SEO page.
- `08173925e4b305937e1cbcb6c7437c7ffa3ba600` — added Restaurants Near Convention Center SEO page.
- `ea053f30a769afcdaee51c14663f8059428cd6b7` — added Restaurant Owner Intake page.
- `1e24c5a20794c9c56f982c48c557a59f3f0ac663` — linked Owner Intake from Founder Cards page.
- `0c4aad4a79ba8926c13dff481ec502e28070c7f8` — linked traveler-intent pages and Owner Intake from AI Finder.
- `3700390284cf63548c29d05464c3f77f05cf0067` — added Owner Intake, Founder Cards, Website Starter, and Disclaimer paths to Owner Resources.
- `52594cd420ad90bdb3e5f5988244a6ad9bde9fb8` — added homepage ambience layer and local image replacement.
- `bc880e05ccc2da74f73262b616aa5d060019ca22` — polished orange restaurant background.
- `1916cfed62b489c1b5c2bb7f8cfdd99e7673b62b` — wired Chicago pizza ambience image.
- `68a4ee5f5214efccdb070a1166a80e19d1a68ab3` — wired Tokyo sushi ambience image.
- `561cc5688cc3fb7bece35a47c2877e5f10880920` — wired London coffee ambience image.
- `31fe0c0f76d08a0b4530c16ddf849675dffa723a` — wired Paris dinner ambience image.
- `78bd8afd6228a18a1e589e6b45f6a0d0ca2b8fda` — wired Las Vegas cheap eats ambience image.
- `cb810be1dfcd12b8788f22151c8a461dec313809` — wired Owner Website ambience image into Website Starter and added Owner Intake links.

## Owner/operator

RestaurantAIBot is owned and operated by **Webmasters LLC**.

Use this language consistently in footers, disclaimer, owner pages, intake pages, and future legal/policy pages.

## Current stable systems

- AI restaurant finder homepage.
- Homepage SEO title, description, canonical, Open Graph, Twitter card, and structured data.
- Local / Traveler mode buttons on homepage.
- Bites responsive text avatar.
- First-layer language choices for Bites helper text.
- Today’s feature demo Smart Promo Card.
- Demo-only restaurant search fallback.
- Clear demo/sponsored/complimentary labels where needed.
- Restaurant owner sales page.
- Founder Complimentary Promo Cards public page.
- Static Restaurant Owner Intake page.
- Site-wide disclaimer page.
- Webmasters LLC footer language on owner/founder/intake/resources/AI Finder/Website Starter pages.
- Restaurant Website Starter sales/template page with owner ambience image and Owner Intake CTAs.
- AI Restaurant Finder SEO page with traveler-intent links and Owner Intake CTA.
- Popular Searches hub.
- Restaurant Cities hub.
- City + cuisine SEO pages with local ambience images:
  - `public/pizza-in-chicago.html`
  - `public/sushi-in-tokyo.html`
  - `public/romantic-dinner-in-paris.html`
  - `public/coffee-in-london.html`
  - `public/cheap-eats-in-las-vegas.html`
- Traveler-intent SEO pages:
  - `public/food-near-hotel.html`
  - `public/restaurants-near-airport.html`
  - `public/restaurants-near-convention-center.html`
- Owner resource pages with direct Owner Intake / Founder Cards / Website Starter paths.
- Local ambience image assets and `PHOTO-AMBIENCE-RULES.md`.

## Current stable architecture

- Static site using plain HTML, CSS, and JavaScript.
- Preferred Cloudflare Pages output directory remains `public`.
- No React, Vite, Next.js, Node build tooling, Tailwind, TypeScript, or framework migration.
- `public/index.html` is the main website/search page.
- `public/quick-searches.js` injects quick links, Local / Traveler mode, Today’s feature demo promo card, Founder Cards link, Disclaimer link, homepage search helpers, local ambience visuals, and polished homepage background.
- `public/responsive-avatar.js` loads Bites and auto-loads the language helper.
- `public/language-choices.js` controls first-layer guide language choices.
- `functions/api/search.js` handles restaurant search and demo fallback.
- `functions/api/config.js` returns browser-safe Google Maps readiness fields.
- `functions/api/health.js` returns boolean-only readiness values.
- `public/disclaimer.html` contains the site-wide disclaimer.
- `public/founder-complimentary-promo-cards.html` supports founder-card owner inquiries and links to Owner Intake.
- `public/restaurant-owner-intake.html` is a static email/copy-paste intake page only.
- `public/owner-advertise.html` is the main owner sales page.
- `public/restaurant-website-starter.html` links to Owner Intake and uses owner ambience art.
- `public/popular-searches.html` links food pages, city + cuisine pages, and traveler-intent pages.
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
- City + cuisine SEO page system with ambience art.
- Traveler-intent SEO page system with three focused pages.
- AI Finder internal links to traveler pages.
- Owner Resources internal links to intake and service pages.
- Website Starter internal links to intake and service pages.

Live-deployment items to verify after Cloudflare deploys latest GitHub commits:

1. `https://restaurantaibot.com/`
2. `https://restaurantaibot.com/restaurant-website-starter.html`
3. `https://restaurantaibot.com/images/owner-website-ambience.svg`
4. `https://restaurantaibot.com/pizza-in-chicago.html`
5. `https://restaurantaibot.com/sushi-in-tokyo.html`
6. `https://restaurantaibot.com/coffee-in-london.html`
7. `https://restaurantaibot.com/romantic-dinner-in-paris.html`
8. `https://restaurantaibot.com/cheap-eats-in-las-vegas.html`
9. `https://restaurantaibot.com/restaurant-owner-intake.html`
10. `https://restaurantaibot.com/disclaimer.html`

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

1. Remaining internal linking cleanup:
   - Add Owner Intake links to owner sales page when connector allows small safe edits.
   - Add traveler-intent links to Restaurant Cities page if useful.
2. Retry sitemap update for `disclaimer.html`, `founder-complimentary-promo-cards.html`, `restaurant-owner-intake.html`, and traveler-intent pages as a tiny focused commit.
3. Browser-test live pages after Cloudflare deploys latest commit.
4. Keep live paid ads, payments, tracking, dashboards, uploads, and accounts inactive until direct approval.

## Safety lock

No private keys, API keys, live ads, live tracking, payment setup, affiliate links, accounts, upload systems, public owner dashboards, automated ordering integrations, scraping systems, framework rebuilds, or major code deletion should be added without direct approval.

All restaurant data, AI results, language help, promo cards, owner services, photos, ambience images, and outside links require direct confirmation and do not create guarantees.
