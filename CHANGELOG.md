# CHANGELOG.md

## 2026-06-14

### Added

- Added `WORLD-CLASS-RESTAURANT-APP-PLAN.md` to define the world-class RestaurantAIBot direction for locals, travelers, local-language help, AI food search, and future restaurant-owner growth.
- Added `RESTAURANT-OWNER-POPUP-ADS-WEBSITE-PROGRAM.md` to plan Smart Promo Cards, timed dining offers, owner packages, manual review, Stripe Payment Links later, and fast restaurant website offers.
- Expanded `public/demo-promotions.json` with demo-only Smart Promo Card campaign fields including today's feature, cuisine tags, match keywords, meal times, target mode, disclosure, and sample profile link.
- Updated `public/quick-searches.js` to show a homepage "Today’s feature" demo Smart Promo Card loaded from `demo-promotions.json`, with clear demo/sponsored labeling and a matching search button.
- Rebuilt `public/owner-advertise.html` as a restaurant owner sales page for Smart Promo Cards, slow-night promotions, traveler visibility, and fast mobile restaurant websites.
- Added `public/restaurant-website-starter.html` as a dedicated sales/template page for the Restaurant Website Starter package.
- Updated `public/sitemap.xml` and `public/owner-advertise.html` so the Restaurant Website Starter page is discoverable.
- Added `public/responsive-avatar.js`, a lightweight responsive text avatar named Bites that gives page-aware help without video, voice, payments, tracking, or accounts.
- Loaded the Bites avatar on the homepage, restaurant owner page, and Restaurant Website Starter page.
- Added `public/language-choices.js` with first-layer language choices for English, Spanish, French, German, Italian, Portuguese, Japanese, Korean, and Chinese.
- Updated Bites so it can auto-load language choices and show translated guide text, buttons, and search hints.
- Added `public/ai-restaurant-finder.html` as a crawlable SEO landing page explaining RestaurantAIBot for locals, travelers, language-help visitors, and restaurant owners.
- Added `SEO-STANDOUT-GROWTH-PLAN.md` to define the SEO positioning, page families, standout feature roadmap, content rules, and 30-day build order.
- Added homepage Local / Traveler mode buttons through `public/quick-searches.js` with mode-specific search ideas for locals and visitors.
- Added the first city + cuisine SEO page batch: `public/tacos-in-dallas.html`, `public/seafood-in-miami.html`, and `public/breakfast-in-new-york.html`.
- Added the second city + cuisine SEO page batch: `public/pizza-in-chicago.html`, `public/sushi-in-tokyo.html`, `public/romantic-dinner-in-paris.html`, `public/coffee-in-london.html`, and `public/cheap-eats-in-las-vegas.html`.
- Added the traveler-intent SEO page batch: `public/food-near-hotel.html`, `public/restaurants-near-airport.html`, and `public/restaurants-near-convention-center.html`.
- Added `FOUNDER-COMPLIMENTARY-PROMO-CARD-PLAN.md` to define the temporary manual-review founder promo-card bridge.
- Added `public/founder-complimentary-promo-cards.html` as the public restaurant-owner page for limited complimentary founder promo-card inquiries.
- Added `public/disclaimer.html` as the site-wide disclaimer naming Webmasters LLC as the owner/operator of RestaurantAIBot.
- Added `public/restaurant-owner-intake.html` as a static owner intake page for Founder Cards, Website Starter, and future Smart Promo Card interest.

### Changed

- Improved `public/index.html` homepage SEO with stronger title/description, canonical/robots tags, Open Graph metadata, Twitter card metadata, WebSite/SearchAction structured data, Organization structured data, WebApplication structured data, and a crawlable explanation card with internal links.
- Updated `public/quick-searches.js` so injected homepage/footer navigation includes AI Finder and Website Starter links.
- Updated `public/quick-searches.js` so choosing Local or Traveler mode creates a helpful search card, preloads a suggested query, and keeps search behavior demo-safe.
- Updated `public/quick-searches.js` so injected navigation includes Founder Cards and Disclaimer links.
- Updated `public/owner-advertise.html` so restaurant owners see Founder Complimentary Promo Cards in the main navigation, hero CTA, intro cards, dedicated launch-offer section, package grid, inquiry area, and footer.
- Updated `public/founder-complimentary-promo-cards.html` with a direct Owner Intake link, direct Disclaimer link, and Webmasters LLC owner/operator footer language.
- Updated `public/sitemap.xml` to include `ai-restaurant-finder.html`.
- Updated `public/sitemap.xml` to include the first city + cuisine SEO pages.
- Updated `public/sitemap.xml` to include the second city + cuisine SEO pages.
- Tried to update `public/sitemap.xml` with the traveler-intent SEO pages, but the connector blocked the update; retry later as a smaller focused commit.
- Updated `public/popular-searches.html` to link to the new city + cuisine SEO pages.
- Updated `public/popular-searches.html` to add a traveler food searches section linking to food near hotel, restaurants near airport, and restaurants near convention center.
- Updated `public/restaurant-cities.html` to link to the new city + cuisine SEO pages from the city hub and related city cards.
- Updated `PROJECT-STATUS.md`, `CURRENT-TASK.md`, and `CODEX-CURRENT-TASK.md` to lock the June 14 build state and next queue.
- Updated `PROJECT-STATUS.md` and `CURRENT-TASK.md` after the second city + cuisine SEO batch so the next queue is traveler-intent pages.
- Updated `CURRENT-TASK.md` after traveler-intent SEO pages so the next queue is internal linking and sitemap cleanup.
- Updated `SEO-STANDOUT-GROWTH-PLAN.md` to mark Local / Traveler mode as started, mark the first city + cuisine page batch as complete, and list the next SEO pages.

### Safety notes

- No live paid ads, payment checkout, tracking scripts, user accounts, owner uploads, dashboards, private keys, automated ordering, or framework changes were added.
- Today's promo card is a demo-only example and does not activate real paid placement.
- The owner sales page uses inquiry-only email CTAs and does not activate payment checkout or live sponsored placement.
- The Restaurant Website Starter page is inquiry-only and does not collect payments, upload files, or create owner accounts.
- The owner intake page is static and email-based only; it does not process forms, collect payments, upload files, create accounts, activate campaigns, or store submissions.
- The Bites avatar is text-only, collapsible, and does not use voice, video, user accounts, or behavioral tracking.
- Language choices are a first-layer guide translation feature only; they do not claim certified full-page translation yet.
- SEO updates add honest crawler-friendly content and structured data only; they do not add fake reviews, fake listings, keyword stuffing, or fake restaurant availability.
- City + cuisine and traveler-intent pages are search-help pages only; they do not claim live rankings, verified availability, open status, or allergy safety.
- Founder Complimentary Promo Cards are temporary manual-review launch features only; they do not guarantee traffic, clicks, reservations, sales, rankings, or customer results.
- The disclaimer page records that restaurant details, AI output, language help, promo cards, outside links, and owner services require direct confirmation and do not create guarantees.
- Local / Traveler mode only changes helper prompts and suggested searches; it does not track users or create profiles.
- Future paid placements still require business rules, disclosures, privacy updates, payment setup, and manual review.

## 2026-06-03

### Added

- Added `GROK-GITHUB-BUILD-PROMPT.md` so Grok, Codex, or another GitHub-connected AI assistant can review and continue the safe RestaurantAIBot build without changing the stack or asking Gerry for manual repo edits.
- Added a visible live-data setup notice through `public/quick-searches.js` so homepage visitors understand that food/city search can be previewed while Google Maps is being connected.
- Added homepage search tips for food-plus-city searches, near-me searches, and restaurant detail confirmation.
- Added `functions/api/health.js` to show whether live Google Maps and optional OpenAI configuration are present as booleans only. The endpoint never returns secret values.
- Added `public/system-status.html`, a public system status page that checks `/api/health` without exposing secret values.

### Changed

- Updated `public/sitemap.xml` to include missing live owner-resource pages: `restaurant-photo-checklist.html` and `restaurant-catering-private-events.html`.
- Updated `README.md` so the documented main files and owner-resource page list match the current repository.
- Updated `PROJECT-STATUS.md` to record the current Cloudflare environment-variable blocker: wrong/empty Google Maps variable and empty OpenAI variable.
- Improved quick-search button focus styling and added automatic live-map status text when the Google Maps key is detected.
- Added `System Status` to injected homepage/footer navigation through `public/quick-searches.js`.
- Added `system-status.html` to `public/sitemap.xml`.
- Updated `/api/config` to include `googleMapsConfigured` and `mapStatus` readiness fields while keeping `Cache-Control: no-store`.

### Safety notes

- No private keys, API keys, live ads, tracking scripts, payment setup, user accounts, upload systems, ordering integrations, affiliate links, framework rebuilds, or major code deletion were added.
- The Grok prompt keeps work limited to safe plain HTML/CSS/JS, Cloudflare Pages, documentation, SEO, mobile, accessibility, and small bug-fix improvements.
- Sitemap, README, status, homepage setup-notice, search-guidance, API health-check, system-status page, and config-readiness changes are safe static/API diagnostics updates only.
- API keys must be entered directly in Cloudflare Variables and Secrets, not in GitHub or chat.

## 2026-06-02

### Added

- Added `public/restaurant-owner-resources.html` as a restaurant owner resource hub.
- Added `public/restaurant-growth-checklist.html` for website, menu, Google profile, review, social, promotion, and repeat-customer basics.
- Added `public/google-business-profile-checklist-restaurants.html` for restaurant profile basics, photos, services, and review rhythm.
