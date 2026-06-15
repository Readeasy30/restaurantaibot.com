# CODEX-CURRENT-TASK.md

Last updated: 2026-06-14

## Repository

`Readeasy30/restaurantaibot.com`

## Current task: Continue safe RestaurantAIBot build

Continue from the June 14 locked checkpoint.

RestaurantAIBot is now positioned as:

> AI restaurant finder for locals and travelers, with restaurant-owner promo and website services.

## Completed state to preserve

Do not redo or remove these:

- Homepage AI restaurant search.
- Homepage SEO upgrade and structured data.
- AI Restaurant Finder landing page.
- Local / Traveler mode.
- Bites responsive helper avatar.
- First-layer language choices.
- Today’s feature demo Smart Promo Card.
- Founder Complimentary Promo Card plan and public page.
- Founder Cards wired into owner page.
- Static Restaurant Owner Intake page.
- Site-wide Disclaimer naming Webmasters LLC.
- Webmasters LLC footer language on owner/founder/intake pages.
- Restaurant Website Starter page.
- Owner sales page.
- City + cuisine SEO pages:
  - `public/tacos-in-dallas.html`
  - `public/seafood-in-miami.html`
  - `public/breakfast-in-new-york.html`
  - `public/pizza-in-chicago.html`
  - `public/sushi-in-tokyo.html`
  - `public/romantic-dinner-in-paris.html`
  - `public/coffee-in-london.html`
  - `public/cheap-eats-in-las-vegas.html`
- Popular Searches and Restaurant Cities hub links.
- Sitemap coverage for the city + cuisine SEO batch.
- SEO roadmap in `SEO-STANDOUT-GROWTH-PLAN.md`.
- Changelog and project status files.

## Best next task

Create traveler-intent SEO pages:

- `public/food-near-hotel.html`
- `public/restaurants-near-airport.html`
- `public/restaurants-near-convention-center.html`

Purpose:

- Help travelers search urgent food situations.
- Build pages around high-intent searches.
- Link back to homepage search, Popular Searches, Restaurant Cities, Disclaimer, and relevant food/city pages.

## Rules

- Do not redesign the site.
- Do not convert to React, Vite, Next.js, TypeScript, Tailwind, or build tools.
- Keep plain HTML/CSS/JS.
- Do not delete major working code.
- Do not add API keys, tracking scripts, live ads, payment systems, affiliate links, owner dashboards, user accounts, uploads, or ordering integrations.
- Do not claim live sponsored placement is active.
- Do not claim restaurant rankings, live open status, verified availability, allergy safety, traffic guarantees, sales guarantees, or revenue guarantees.
- Keep Founder Cards labeled as temporary complimentary manual-review launch features.
- Keep Webmasters LLC as site owner/operator language where appropriate.

## Known connector note

Earlier sitemap updates for `disclaimer.html` and `founder-complimentary-promo-cards.html` were blocked twice by the connector. The second city + cuisine sitemap update succeeded. Retry remaining sitemap cleanup later as a tiny focused commit. Do not ask Gerry to edit manually.

## Deliverables

For each safe batch, update:

- `CHANGELOG.md`
- `PROJECT-STATUS.md` if the stable checkpoint changes
- `CURRENT-TASK.md` if the next queue changes

## Stop points

Stop before private keys, API keys, live tracking, live ads, payment setup, user accounts, upload systems, affiliate links, framework migration, major code deletion, automated ordering, or anything that risks breaking production.
