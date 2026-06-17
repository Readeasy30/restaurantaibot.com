# RestaurantAIBot Project Status

Last updated: 2026-06-17

## Repository

`Readeasy30/restaurantaibot.com`

## Locked checkpoint — 2026-06-17

Current active build direction remains locked around:

> AI restaurant finder for locals and travelers, with restaurant-owner promo and website services.

## Latest continuation commits — 2026-06-17

- `5c1ad8d322803e5e574c357b88babbc063dc7792` — added Date Night Restaurants Near Me SEO page.
- `ecbc45e3c16dfd3959a4effa9047e8f33ab25ccd` — added Late Night Food Near Me SEO page.
- `797cd74b36593343d5a57cb204438a68f7dfa105` — added the two new SEO pages to `public/sitemap.xml`.
- `05d1dba307ff59dbb69e36633a99b22825b0b962` — linked the new pages from `public/popular-searches.html`.

## Prior major June 14 commits

- `7cb12a2df53fa7e40033ccecbfc0d120a6744f27` — added AI Restaurant Finder SEO page.
- `5a041b2143a299409e6dacfb0260d120a6744f27` — note: verify exact hash before reuse if needed.
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
- `e10f7de13c6e000c05b88e0a8218c144f6f35d2a` — strengthened Owner Intake links on Owner Advertise page.
- `c168504c3ef4d1ff826a771ae0ebe7c8724505cb` — added Traveler Place Searches to Restaurant Cities.

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
- Restaurant owner sales page with stronger Owner Intake links.
- Founder Complimentary Promo Cards public page.
- Static Restaurant Owner Intake page.
- Site-wide disclaimer page.
- Webmasters LLC footer language on owner/founder/intake/resources/AI Finder/Website Starter pages.
- Restaurant Website Starter sales/template page with owner ambience image and Owner Intake CTAs.
- AI Restaurant Finder SEO page with traveler-intent links and Owner Intake CTA.
- Popular Searches hub with traveler-intent, family/dinner, date night, and late night links.
- Restaurant Cities hub with city/cuisine links and Traveler Place Searches.
- City + cuisine SEO pages with local ambience images.
- Traveler-intent SEO pages.
- Date Night Restaurants Near Me SEO page.
- Late Night Food Near Me SEO page.
- Owner resource pages with direct Owner Intake / Founder Cards / Website Starter paths.
- Local ambience image assets and `PHOTO-AMBIENCE-RULES.md`.

## Current stable architecture

- Static site using plain HTML, CSS, and JavaScript.
- Preferred Cloudflare Pages output directory remains `public`.
- No React, Vite, Next.js, Node build tooling, Tailwind, TypeScript, or framework migration.
- `public/index.html` is the main website/search page.
- `public/quick-searches.js` injects quick links, Local / Traveler mode, Today’s Feature demo promo card, Founder Cards link, Disclaimer link, homepage search helpers, local ambience visuals, and polished homepage background.
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
- `public/popular-searches.html` links food pages, city + cuisine pages, traveler-intent pages, date night search, and late night food search.
- `public/restaurant-cities.html` links city pages, city + cuisine pages, and traveler place pages.
- `public/sitemap.xml` includes core SEO pages, food pages, city pages, city/cuisine pages, traveler-intent pages, owner/resource pages, Date Night Restaurants Near Me, and Late Night Food Near Me.

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
- Traveler-intent SEO page system.
- Family/dinner SEO page system.
- Date night and late night SEO pages.
- AI Finder internal links to traveler pages.
- Popular Searches internal links to traveler, family/dinner, date night, and late night pages.
- Restaurant Cities internal links to traveler pages.
- Owner Resources internal links to intake and service pages.
- Website Starter internal links to intake and service pages.

## Live-deployment items to verify after Cloudflare deploys latest GitHub commits

1. `https://restaurantaibot.com/`
2. `https://restaurantaibot.com/popular-searches.html`
3. `https://restaurantaibot.com/date-night-restaurants-near-me.html`
4. `https://restaurantaibot.com/late-night-food-near-me.html`
5. `https://restaurantaibot.com/sitemap.xml`
6. `https://restaurantaibot.com/restaurant-cities.html`
7. `https://restaurantaibot.com/food-near-hotel.html`
8. `https://restaurantaibot.com/restaurants-near-airport.html`
9. `https://restaurantaibot.com/restaurants-near-convention-center.html`
10. `https://restaurantaibot.com/owner-advertise.html`
11. `https://restaurantaibot.com/restaurant-owner-intake.html`
12. `https://restaurantaibot.com/restaurant-website-starter.html`
13. `https://restaurantaibot.com/disclaimer.html`

## Cloudflare variables still needed for full live map/search

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

1. Browser-test live pages after Cloudflare deploys latest GitHub commits.
2. Continue next tiny SEO expansion only after checking live pages:
   - breakfast near airport
   - coffee near convention center
   - lunch near museum
   - family restaurants near hotel
   - cheap eats near stadium
3. Keep live paid ads, payments, tracking, dashboards, uploads, and accounts inactive until direct approval.
4. Keep all private keys and API keys in Cloudflare Variables and Secrets only.

## Safety lock

No private keys, API keys, live ads, live tracking, payment setup, affiliate links, accounts, upload systems, public owner dashboards, automated ordering integrations, scraping systems, framework rebuilds, or major code deletion should be added without direct approval.

All restaurant data, AI results, language help, promo cards, owner services, photos, ambience images, and outside links require direct confirmation and do not create guarantees.
