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
- Second city + cuisine SEO pages:
  - Pizza in Chicago
  - Sushi in Tokyo
  - Romantic dinner in Paris
  - Coffee in London
  - Cheap eats in Las Vegas
- Traveler-intent SEO pages:
  - Food near hotel
  - Restaurants near airport
  - Restaurants near convention center
- Popular Searches updated with traveler-intent links.
- Popular Searches and Restaurant Cities hubs updated with city + cuisine links.
- AI Finder updated with traveler-intent page links and Owner Intake link.
- Restaurant Owner Resources updated with Owner Intake, Founder Cards, Website Starter, Disclaimer, and Webmasters LLC language.
- Local photo ambience system started:
  - `public/images/restaurant-ambience-hero.svg`
  - `public/images/promo-card-food.svg`
  - `PHOTO-AMBIENCE-RULES.md`
- Homepage helper now adds an ambience card, promo-card image, enhanced map fallback, and replaces remote result-card images with local ambience assets.
- Homepage orange background polished with a deeper restaurant-style gradient, warm glow, subtle texture, clearer button contrast, and softer shadows.
- Sitemap updated with the second city + cuisine SEO batch.
- Project status updated to the June 14 locked checkpoint.
- Codex current task updated to the June 14 locked checkpoint.
- Changelog updated through latest internal linking cleanup.

## Continue from here

### Next build batch 1 — photo ambience expansion

Add page-specific local ambience images over time:

- `public/images/pizza-chicago-ambience.svg`
- `public/images/sushi-tokyo-ambience.svg`
- `public/images/coffee-london-ambience.svg`
- `public/images/paris-dinner-ambience.svg`
- `public/images/vegas-cheap-eats-ambience.svg`
- `public/images/owner-website-ambience.svg`

Then add them to high-value pages only after the image rule stays clear:

> Ambience image only. Not a verified restaurant photo.

### Next build batch 2 — remaining internal linking cleanup

Add links to `restaurant-owner-intake.html` from:

- `public/owner-advertise.html` if a smaller safe connector edit allows it later.
- `public/restaurant-website-starter.html`.

Add links to traveler-intent pages from:

- Restaurant Cities page if useful
- related city pages over time

### Next build batch 3 — sitemap cleanup

Retry adding these pages to sitemap as a tiny focused commit:

- `public/disclaimer.html`
- `public/founder-complimentary-promo-cards.html`
- `public/restaurant-owner-intake.html`
- `public/food-near-hotel.html`
- `public/restaurants-near-airport.html`
- `public/restaurants-near-convention-center.html`

### Next build batch 4 — more SEO expansion

Possible next pages:

- food near train station
- restaurants near stadium
- family dinner near me
- date night restaurants near me
- late night food near me
- local food in major cities

## Connector notes

- Sitemap updates for `disclaimer.html` and `founder-complimentary-promo-cards.html` were blocked twice earlier.
- Sitemap update for traveler-intent pages was blocked once.
- A full owner-page replacement was blocked once before a smaller owner-page update succeeded.
- The second city + cuisine sitemap update succeeded.
- Do not ask Gerry to edit files manually.
- Retry smaller safe edits, record blockers, and continue.

## Manual live checks after Cloudflare deploys

Check these URLs:

1. `https://restaurantaibot.com/`
2. `https://restaurantaibot.com/images/restaurant-ambience-hero.svg`
3. `https://restaurantaibot.com/images/promo-card-food.svg`
4. `https://restaurantaibot.com/ai-restaurant-finder.html`
5. `https://restaurantaibot.com/restaurant-owner-resources.html`
6. `https://restaurantaibot.com/food-near-hotel.html`
7. `https://restaurantaibot.com/restaurants-near-airport.html`
8. `https://restaurantaibot.com/restaurants-near-convention-center.html`
9. `https://restaurantaibot.com/popular-searches.html`
10. `https://restaurantaibot.com/owner-advertise.html`
11. `https://restaurantaibot.com/founder-complimentary-promo-cards.html`
12. `https://restaurantaibot.com/restaurant-owner-intake.html`
13. `https://restaurantaibot.com/disclaimer.html`

## Safety rule

No private keys, API keys, live ads, live tracking, payment setup, user accounts, uploads, ordering integrations, framework changes, major code deletion, paid placement activation, owner dashboards, or automatic campaign approval without direct approval.

No random restaurant photo should be used in a way that suggests it is a verified restaurant image, owner-provided photo, paid placement, or real menu item unless that is confirmed.
