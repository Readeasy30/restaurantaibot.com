# Current Task

Last updated: 2026-06-14

## RestaurantAIBot active build queue

Current locked direction:

> Build RestaurantAIBot into a world-class AI restaurant finder for locals and travelers, with safe restaurant-owner promo and website services.

## Completed and saved

- Homepage SEO upgrade.
- AI Restaurant Finder landing page.
- Local / Traveler mode buttons.
- Bites responsive helper avatar.
- First-layer language choices for Bites.
- Today’s feature demo Smart Promo Card.
- Founder Complimentary Promo Card plan.
- Founder Complimentary Promo Cards public page.
- Founder Cards wired into owner sales page.
- Static Restaurant Owner Intake page.
- Founder Cards page linked to Owner Intake.
- Site-wide Disclaimer page naming Webmasters LLC.
- Webmasters LLC footer language on owner/founder/intake pages.
- First city + cuisine SEO pages:
  - Tacos in Dallas
  - Seafood in Miami
  - Breakfast in New York
- Popular Searches and Restaurant Cities hubs updated with city + cuisine links.
- Project status updated to the June 14 locked checkpoint.
- Codex current task updated to the June 14 locked checkpoint.
- Changelog updated through latest owner-intake work.

## Continue from here

### Next build batch 1 — more city + cuisine SEO pages

Create:

- `public/pizza-in-chicago.html`
- `public/sushi-in-tokyo.html`
- `public/romantic-dinner-in-paris.html`
- `public/coffee-in-london.html`
- `public/cheap-eats-in-las-vegas.html`

Rules:

- Do not fake restaurant rankings.
- Do not claim live open status.
- Do not claim verified availability.
- Do not claim allergy safety.
- Include search examples and related links.
- Include confirmation warning.

### Next build batch 2 — traveler-intent SEO pages

Create:

- `public/food-near-hotel.html`
- `public/restaurants-near-airport.html`
- `public/restaurants-near-convention-center.html`

Reason:

Travelers have urgent search intent. These pages can stand out quickly.

### Next build batch 3 — internal linking cleanup

Add links to `restaurant-owner-intake.html` from:

- `public/owner-advertise.html` if a smaller safe connector edit allows it later.
- `public/restaurant-website-starter.html`.
- `public/restaurant-owner-resources.html`.
- `public/quick-searches.js` injected navigation if useful.

## Connector notes

- Sitemap updates for `disclaimer.html` and `founder-complimentary-promo-cards.html` were blocked twice by the connector.
- A full owner-page replacement was blocked once before a smaller owner-page update succeeded.
- Retry later as tiny focused commits.
- Do not ask Gerry to edit files manually.
- Retry smaller safe edits, record blockers, and continue.

## Manual live checks after Cloudflare deploys

Check these URLs:

1. `https://restaurantaibot.com/`
2. `https://restaurantaibot.com/owner-advertise.html`
3. `https://restaurantaibot.com/founder-complimentary-promo-cards.html`
4. `https://restaurantaibot.com/restaurant-owner-intake.html`
5. `https://restaurantaibot.com/disclaimer.html`
6. `https://restaurantaibot.com/ai-restaurant-finder.html`
7. `https://restaurantaibot.com/tacos-in-dallas.html`
8. `https://restaurantaibot.com/seafood-in-miami.html`
9. `https://restaurantaibot.com/breakfast-in-new-york.html`

## Safety rule

No private keys, API keys, live ads, live tracking, payment setup, user accounts, uploads, ordering integrations, framework changes, major code deletion, paid placement activation, owner dashboards, or automatic campaign approval without direct approval.
