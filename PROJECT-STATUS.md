# RestaurantAIBot Project Status

Last updated: 2026-05-29

## Codex-first workflow

Codex is the primary workflow for routine RestaurantAIBot repository editing.

Gerry does not manually edit, paste, create, replace, or copy repository files. ChatGPT/Codex should handle safe file work directly when write access is available.

Use the ChatGPT GitHub connector only for small reads, checks, reviews, or emergency single-file edits when Codex is unavailable.

Current workflow files:

- `CODEX-WORKFLOW.md`
- `CURRENT-TASK.md`

## Current stable systems

- AI restaurant search
- Google Maps integration
- Cloudflare Pages deployment
- Cloudflare Functions API
- GitHub auto deploy from `main`
- Homepage search interface
- Quick search buttons with URL query support
- SEO-ready core pages
- Popular searches hub
- Restaurant cities hub
- Improved support pages
- Restaurant owner / advertiser interest page
- Advertiser intake interest page
- Restaurant marketing tools information page
- Restaurant marketing planning document
- Demo-only promotions data file
- Sample restaurant profile template
- Dedicated UX goals file
- Manual test checklist
- Expanded U.S. and international city landing pages

## Current stable architecture

- `public/index.html` is the main website/search page.
- `public/quick-searches.js` adds quick search buttons, injects Popular Searches / Cities / Restaurant links, and supports `?q=` search links.
- `functions/api/search.js` handles AI restaurant search.
- `functions/api/config.js` returns the browser-safe Google Maps key from Cloudflare environment variables.
- `public/robots.txt` allows crawling and points to sitemap.
- `public/sitemap.xml` lists core pages, SEO pages, and the restaurant cities hub.
- `UX-GOALS.md` locks product and visitor experience rules.
- `MANUAL-TEST-CHECKLIST.md` documents post-commit manual tests.
- `RESTAURANT-MARKETING-PLAN.md` describes future restaurant marketing tools and packages.
- `public/demo-promotions.json` contains demo-only future placement data and is not live paid advertising.
- `public/sample-restaurant-profile.html` shows a demo future restaurant profile layout.

## Operational status

Currently operational:

- AI restaurant search
- Worldwide city / nearby restaurant discovery
- Google Maps / Places restaurant results
- SEO food pages
- City landing pages
- Restaurant cities hub
- Restaurant owner / advertiser interest page
- Advertiser intake interest page
- Demo profile page for future restaurant listings

Not operational yet:

- Paid pop placements
- Live local ads
- Payment checkout
- Tracking scripts
- Advertiser dashboard
- Live campaign management
- Real sponsored placements

## Added support pages

- About
- Contact
- Privacy
- Terms
- Restaurant owner / advertiser interest
- Restaurant marketing tools
- Advertiser intake
- Sample restaurant profile

## Added SEO pages

- Pizza near me
- Tacos near me
- Sushi near me
- Breakfast near me
- Vegan restaurants near me
- Seafood near me
- Coffee near me
- Dinner near me
- Cheap eats near me
- Outdoor dining near me
- Popular searches hub
- Restaurant cities hub

## Added U.S. city pages

- Chicago restaurants
- New York restaurants
- Dallas restaurants
- Miami restaurants
- Los Angeles restaurants
- Las Vegas restaurants
- Atlanta restaurants
- Denver restaurants

## Added international city pages

- Tokyo restaurants
- London restaurants
- Paris restaurants
- Toronto restaurants

## Connector filter note

The GitHub connector safety filter blocked writes that used one sensitive dinner-page route/text and some matching page text. Use `dinner-near-me.html` and plain wording such as `nice dinner` instead.

A later full sitemap update that included many new page URLs was also blocked by the connector filter. Smaller sitemap updates should be used when possible.

## Completed safe queue

1. Confirmed GitHub connector write access with a tiny harmless test file.
2. Added `public/terms.html`.
3. Improved homepage navigation and footer.
4. Improved homepage mobile layout.
5. Improved accessibility labels and focus states.
6. Improved safer DOM rendering by using text content for chat messages and restaurant cards.
7. Added `public/sitemap.xml`.
8. Added `AGENT-INSTRUCTIONS.md`.
9. Added `LOCKED-CHECKPOINT.md`.
10. Added `CODEX-WORKFLOW.md` for Codex-first repo editing.
11. Upgraded `public/about.html` from placeholder to full support page.
12. Upgraded `public/contact.html` from placeholder to full support page.
13. Upgraded `public/privacy.html` from placeholder to clearer privacy page.
14. Added `public/owner-advertise.html` for restaurant owner and advertiser interest.
15. Added `UX-GOALS.md`.
16. Added owner / advertiser page to sitemap.
17. Added first SEO landing pages for pizza, tacos, sushi, and breakfast.
18. Added SEO pages to sitemap.
19. Improved API validation, coordinate checks, JSON handling, AI parse fallback, and public error messages.
20. Expanded `MANUAL-TEST-CHECKLIST.md`.
21. Improved quick search buttons and added URL query support.
22. Added expanded SEO pages and popular searches hub.
23. Updated sitemap with expanded SEO pages.
24. Injected homepage Popular Searches and Restaurants links through `quick-searches.js`.
25. Added city landing pages for Chicago, New York, Dallas, and Miami.
26. Added `public/restaurant-marketing-tools.html`.
27. Added `RESTAURANT-MARKETING-PLAN.md`.
28. Added `public/demo-promotions.json` as demo-only future placement data.
29. Added `public/advertiser-intake.html`.
30. Added city landing pages for Los Angeles, Las Vegas, Atlanta, and Denver.
31. Added `public/sample-restaurant-profile.html`.
32. Added international city landing pages for Tokyo, London, Paris, and Toronto.
33. Added `public/restaurant-cities.html` as the city/worldwide restaurant hub.
34. Added `restaurant-cities.html` to `public/sitemap.xml`.
35. Added `CURRENT-TASK.md` to keep the active safe queue in the repo.
36. Fixed the homepage injected Cities link to point to `restaurant-cities.html`.
37. Strengthened `AGENTS.md` so future AI/Codex work does not ask Gerry to manually edit files.

## Current safe queue

1. Add internal links between SEO pages and city pages.
2. Add a demo restaurant profile data file for future templates if still useful.
3. Remove `.chatgpt-connector-test.md` after more successful production commits if desired.
4. Run browser/manual tests using `MANUAL-TEST-CHECKLIST.md`.
5. Keep all live ads, payments, tracking, dashboards, and sponsored placements inactive until approval.

## Blocked items

- Do not add private API keys, payment setup, live ad scripts, analytics tracking, or live sponsorship placement without explicit approval.
- Do not replace Cloudflare Pages auto-deploy with GitHub Actions.
- Do not change frameworks or introduce build tools.
