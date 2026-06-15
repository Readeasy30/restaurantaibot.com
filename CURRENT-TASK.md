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
- Site-wide Disclaimer page naming Webmasters LLC.
- Webmasters LLC footer language on owner/founder pages.
- First city + cuisine SEO pages:
  - Tacos in Dallas
  - Seafood in Miami
  - Breakfast in New York
- Popular Searches and Restaurant Cities hubs updated with city + cuisine links.
- Changelog updated through latest founder-card wiring.
- Project status updated to the June 14 locked checkpoint.

## Continue from here

### Next build batch 1 — owner intake page

Create a simple static intake page for restaurant owners.

Suggested file:

- `public/restaurant-owner-intake.html`

Purpose:

- Collect Founder Card / Website Starter inquiry details by email link or copy/paste form style.
- No backend form submission yet.
- No payments.
- No file uploads.
- No owner accounts.
- No tracking.

Should include:

- Webmasters LLC owner/operator footer.
- Disclaimer link.
- Founder Card inquiry section.
- Website Starter inquiry section.
- Copy/paste checklist.
- Mailto buttons.
- Clear no-guarantee wording.

### Next build batch 2 — more city + cuisine SEO pages

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

### Next build batch 3 — traveler-intent SEO pages

Create:

- `public/food-near-hotel.html`
- `public/restaurants-near-airport.html`
- `public/restaurants-near-convention-center.html`

Reason:

Travelers have urgent search intent. These pages can stand out quickly.

## Connector notes

- Sitemap updates for `disclaimer.html` and `founder-complimentary-promo-cards.html` were blocked twice by the connector.
- Retry later as a tiny focused sitemap-only commit.
- Do not ask Gerry to edit files manually.
- Retry smaller safe edits, record blockers, and continue.

## Manual live checks after Cloudflare deploys

Check these URLs:

1. `https://restaurantaibot.com/`
2. `https://restaurantaibot.com/owner-advertise.html`
3. `https://restaurantaibot.com/founder-complimentary-promo-cards.html`
4. `https://restaurantaibot.com/disclaimer.html`
5. `https://restaurantaibot.com/ai-restaurant-finder.html`
6. `https://restaurantaibot.com/tacos-in-dallas.html`
7. `https://restaurantaibot.com/seafood-in-miami.html`
8. `https://restaurantaibot.com/breakfast-in-new-york.html`

## Safety rule

No private keys, API keys, live ads, live tracking, payment setup, user accounts, uploads, ordering integrations, framework changes, major code deletion, paid placement activation, owner dashboards, or automatic campaign approval without direct approval.
