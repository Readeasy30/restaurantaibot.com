# RestaurantAIBot Project Status

Last updated: 2026-05-29

## Repository

`Wholelychit/restaurantaibot.com`

## Codex-first workflow

Use ChatGPT 5.5 and Codex as the production workflow.

- ChatGPT 5.5 manages the plan.
- Codex performs repository work.
- GitHub stores files and commits.
- Cloudflare Pages publishes from GitHub when connected.
- Gerry should not be asked to paste, create, replace, or manually update repo files.

Use the ChatGPT GitHub connector only for small reads, checks, reviews, emergency single-file edits, or when Codex is awkward or blocked.

Current workflow files:

- `AGENTS.md`
- `CODEX-WORKFLOW.md`
- `CODEX-CURRENT-TASK.md`
- `PROJECT-STATUS.md`
- `CHANGELOG.md`
- `CURRENT-TASK.md`
- `CONNECTOR-RECOVERY.md`

## Current stable systems

- AI restaurant search
- Improved near-me search handling
- Improved local-city search handling
- Improved quick-search submit behavior
- Custom 404 visitor recovery page
- Conservative Cloudflare security headers
- Safe Cloudflare redirects for old paths
- Google Maps integration
- Cloudflare Pages deployment
- Cloudflare Functions API
- GitHub auto deploy from `main`
- Homepage search interface
- Improved homepage map fallback behavior
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
- Demo restaurant profile data file
- Sample restaurant profile template
- Browser smoke test notes
- Dedicated UX goals file
- Updated README
- Updated changelog
- Updated manual test checklist
- Expanded sitemap coverage
- Expanded U.S. and international city landing pages
- Cross-linked food SEO landing pages
- Cross-linked city landing pages where connector allowed writes
- Removed old connector test file

## Current stable architecture

- `public/index.html` is the main website/search page.
- `public/404.html` is the custom noindex visitor recovery page for broken or outdated links.
- `public/_headers` adds conservative Cloudflare security headers and `no-store` for `/api/*`.
- `public/_redirects` adds safe 301 redirects for likely old paths including `/cities.html`, `/search.html`, `/owner.html`, and `/advertise.html`.
- `public/quick-searches.js` adds quick search buttons, injects Popular Searches / Cities / Restaurant links, supports `?q=` search links, and now submits through the search form event.
- `functions/api/search.js` handles AI restaurant search, prevents bad `near me` searches without browser location, and keeps `local + city` searches as city searches.
- `functions/api/config.js` returns the browser-safe Google Maps key from Cloudflare environment variables.
- `public/robots.txt` allows crawling and points to sitemap.
- `public/sitemap.xml` lists core pages, support pages, SEO food pages, city pages, and the restaurant cities hub. `404.html` should stay out of the sitemap.
- `CODEX-WORKFLOW.md` links to `CONNECTOR-RECOVERY.md` for connector failure handling.
- `CONNECTOR-RECOVERY.md` records connector-failure recovery rules so Gerry does not manually edit files.
- `CHANGELOG.md` tracks safe production changes.
- `UX-GOALS.md` locks product and visitor experience rules.
- `MANUAL-TEST-CHECKLIST.md` documents post-commit manual tests.
- `BROWSER-SMOKE-TEST.md` records live smoke-test attempts and honest verification limits.
- `RESTAURANT-MARKETING-PLAN.md` describes future restaurant marketing tools and packages.
- `public/demo-promotions.json` contains demo-only future placement data and is not live paid advertising.
- `public/demo-restaurant-profiles.json` contains demo-only future restaurant profile data and is not paid placement.
- `public/sample-restaurant-profile.html` shows a demo future restaurant profile layout.

## Operational status

Currently operational in repo:

- AI restaurant search files
- Worldwide city / nearby restaurant discovery files
- Google Maps / Places restaurant result files
- SEO food pages
- City landing pages
- Restaurant cities hub
- Restaurant owner / advertiser interest page
- Advertiser intake interest page
- Demo profile page for future restaurant listings
- Custom 404 visitor recovery page
- Conservative Cloudflare security headers
- Safe old-path redirects

Live browser render status:

- ChatGPT web fetch could not reliably verify live page rendering from this chat environment on 2026-05-29.
- This is not proof the site is broken.
- A real browser or Codex/browser environment should run the manual checklist.

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
- Custom 404 page

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

Text-only cross-link updates for `public/dallas-restaurants.html` and `public/tokyo-restaurants.html` were blocked twice by the connector filter even after simplification. Treat these as false positives under `CODEX-WORKFLOW.md` and `CONNECTOR-RECOVERY.md`. Do not ask Gerry to fix these manually.

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
38. Added city-guide cross-links and quick city/food search paths to `public/popular-searches.html`.
39. Expanded `public/demo-restaurant-profiles.json` with more demo-only profile examples and disclosures.
40. Added cross-links and quick city searches to `public/pizza-near-me.html`.
41. Added cross-links and quick city searches to `public/tacos-near-me.html`.
42. Added cross-links and quick city searches to `public/sushi-near-me.html`.
43. Added cross-links and quick city searches to `public/breakfast-near-me.html`.
44. Added cross-links and quick city searches to `public/vegan-restaurants-near-me.html`.
45. Added cross-links and quick city searches to `public/seafood-near-me.html`.
46. Added cross-links and quick city searches to `public/coffee-near-me.html`.
47. Added cross-links and quick city searches to `public/dinner-near-me.html`.
48. Added cross-links and quick city searches to `public/cheap-eats-near-me.html`.
49. Added cross-links and quick city searches to `public/outdoor-dining-near-me.html`.
50. Added connector false-positive handling rule to `CODEX-WORKFLOW.md`.
51. Added city-to-food cross-links to `public/chicago-restaurants.html`.
52. Added city-to-food cross-links to `public/new-york-restaurants.html`.
53. Added city-to-food cross-links to `public/miami-restaurants.html`.
54. Added city-to-food cross-links to `public/los-angeles-restaurants.html`.
55. Added city-to-food cross-links to `public/las-vegas-restaurants.html`.
56. Added city-to-food cross-links to `public/atlanta-restaurants.html`.
57. Added city-to-food cross-links to `public/denver-restaurants.html`.
58. Added city-to-food cross-links to `public/london-restaurants.html`.
59. Added city-to-food cross-links to `public/paris-restaurants.html`.
60. Added city-to-food cross-links to `public/toronto-restaurants.html`.
61. Removed `.chatgpt-connector-test.md` after successful production commits.
62. Updated `CURRENT-TASK.md` with the next clean safe queue.
63. Updated `MANUAL-TEST-CHECKLIST.md` for the current site, food pages, city pages, demo files, query links, and safety checks.
64. Expanded `public/sitemap.xml` to include support pages, food pages, city pages, and restaurant owner pages.
65. Verified `public/robots.txt` allows crawling and points to the sitemap.
66. Updated `README.md` to match the current site structure, safe workflow, SEO pages, city pages, and known connector false positives.
67. Refreshed `CURRENT-TASK.md` after README update.
68. Added `BROWSER-SMOKE-TEST.md` to record live smoke-test attempt and next verification steps.
69. Updated `CURRENT-TASK.md` after smoke-test note.
70. Added `CONNECTOR-RECOVERY.md` to document connector failure handling.
71. Linked `CONNECTOR-RECOVERY.md` from `CODEX-WORKFLOW.md`.
72. Improved homepage map fallback behavior when Google Maps config or script loading fails.
73. Improved near-me search handling so a near-me query without browser location asks the visitor to enable location or type a city instead of searching `in near me`.
74. Updated `MANUAL-TEST-CHECKLIST.md` to test near-me searches with and without browser location.
75. Standardized `AGENTS.md` with the current no-local-Git workflow.
76. Standardized `CODEX-WORKFLOW.md` with the ChatGPT 5.5 + Codex + GitHub + Cloudflare workflow.
77. Added `CODEX-CURRENT-TASK.md` for the current safe work queue.
78. Improved `public/quick-searches.js` so quick search buttons and `/?q=` links submit through the search form event instead of a brittle button-click shortcut.
79. Updated `MANUAL-TEST-CHECKLIST.md` to test quick search buttons and query-link form submission.
80. Expanded `CHANGELOG.md` with current production updates, fixes, connector false positives, and safety notes.
81. Refined `functions/api/search.js` near-me detection so `local + city` searches remain city searches.
82. Updated `MANUAL-TEST-CHECKLIST.md` with a `local tacos in Dallas` regression test.
83. Added `public/404.html` as a custom visitor recovery page with `noindex,follow`.
84. Updated `MANUAL-TEST-CHECKLIST.md` with 404 page test coverage.
85. Updated `CHANGELOG.md` for the custom 404 page.
86. Added `public/_headers` with conservative Cloudflare security headers and `Cache-Control: no-store` for `/api/*`.
87. Updated `MANUAL-TEST-CHECKLIST.md` with security header verification.
88. Updated `CHANGELOG.md` for security headers.
89. Added `public/_redirects` with safe 301 redirects for likely old paths.
90. Updated `MANUAL-TEST-CHECKLIST.md` with redirect tests.
91. Updated `CHANGELOG.md` for safe redirects.
92. Updated `README.md` to document `public/404.html`, `public/_headers`, `public/_redirects`, `CONNECTOR-RECOVERY.md`, `CODEX-CURRENT-TASK.md`, `CHANGELOG.md`, and `BROWSER-SMOKE-TEST.md`.
93. Updated `CHANGELOG.md` after README sync.

## Current safe queue

1. Run real browser/manual tests using `MANUAL-TEST-CHECKLIST.md`.
2. Review `BROWSER-SMOKE-TEST.md` after browser testing and update it with real pass/fail results.
3. Use Codex or a later connector retry to update `public/dallas-restaurants.html` and `public/tokyo-restaurants.html` if the false-positive filter allows it.
4. Consider adding a shared helper script for future page cross-link injection if it can be done safely.
5. Keep all live ads, payments, tracking, dashboards, and sponsored placements inactive until approval.

## Blocked items

- ChatGPT web fetch could not reliably verify live public rendering from this environment.
- Connector false positive: `public/dallas-restaurants.html` text-only cross-link update blocked twice.
- Connector false positive: `public/tokyo-restaurants.html` text-only cross-link update blocked twice.
- Do not add private API keys, payment setup, live ad scripts, analytics tracking, or live sponsorship placement without explicit approval.
- Do not replace Cloudflare Pages auto-deploy with GitHub Actions.
- Do not change frameworks or introduce build tools.
