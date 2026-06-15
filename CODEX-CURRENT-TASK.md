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
- Site-wide Disclaimer naming Webmasters LLC.
- Webmasters LLC footer language on owner/founder pages.
- Restaurant Website Starter page.
- Owner sales page.
- First city + cuisine SEO pages:
  - `public/tacos-in-dallas.html`
  - `public/seafood-in-miami.html`
  - `public/breakfast-in-new-york.html`
- Popular Searches and Restaurant Cities hub links.
- SEO roadmap in `SEO-STANDOUT-GROWTH-PLAN.md`.
- Changelog and project status files.

## Best next task

Create a simple static owner intake page.

Suggested file:

- `public/restaurant-owner-intake.html`

Purpose:

- Let restaurant owners send details for Founder Cards, Smart Promo Cards, or Website Starter inquiries.
- Use mailto links and copy/paste checklists only.
- No backend form processing yet.

The page should include:

- Founder Card intake section.
- Website Starter intake section.
- Smart Promo Card future interest section.
- Webmasters LLC footer.
- Disclaimer / Privacy / Terms links.
- Clear language that there is no live paid placement or checkout yet.

## Next SEO pages after intake

Create city + cuisine pages:

- `public/pizza-in-chicago.html`
- `public/sushi-in-tokyo.html`
- `public/romantic-dinner-in-paris.html`
- `public/coffee-in-london.html`
- `public/cheap-eats-in-las-vegas.html`

Create traveler-intent pages:

- `public/food-near-hotel.html`
- `public/restaurants-near-airport.html`
- `public/restaurants-near-convention-center.html`

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

Sitemap updates for `disclaimer.html` and `founder-complimentary-promo-cards.html` were blocked twice by the connector. Retry later as a tiny sitemap-only commit. Do not ask Gerry to edit manually.

## Deliverables

For each safe batch, update:

- `CHANGELOG.md`
- `PROJECT-STATUS.md` if the stable checkpoint changes
- `CURRENT-TASK.md` if the next queue changes

## Stop points

Stop before private keys, API keys, live tracking, live ads, payment setup, user accounts, upload systems, affiliate links, framework migration, major code deletion, automated ordering, or anything that risks breaking production.
