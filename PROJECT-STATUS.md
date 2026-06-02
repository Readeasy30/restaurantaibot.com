# RestaurantAIBot Project Status

Last updated: 2026-06-02

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

- AI restaurant search flow
- Optional OpenAI parsing with local parsing fallback
- Safe demo restaurant results when Google Maps is not configured or live search temporarily fails
- Clear demo-result labels on homepage restaurant cards
- Improved near-me search handling
- Improved local-city search handling
- Improved quick-search submit behavior
- Custom 404 visitor recovery page
- Conservative Cloudflare security headers
- Safe Cloudflare redirects for old paths
- Repo audit notes
- Google Maps integration when Cloudflare env var is configured
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
- `public/quick-searches.js` adds quick search buttons, injects Popular Searches / Cities / Restaurant links, supports `?q=` search links, and submits through the search form event.
- `functions/api/search.js` handles restaurant search, prevents bad `near me` searches without browser location, keeps `local + city` searches as city searches, uses OpenAI parsing when configured, uses local parsing when OpenAI is missing, and returns clearly labeled demo results when Google Maps is missing or temporarily failing.
- `functions/api/config.js` returns the browser-safe Google Maps key from Cloudflare environment variables.
- `public/robots.txt` allows crawling and points to sitemap.
- `public/sitemap.xml` lists core pages, support pages, SEO food pages, city pages, and the restaurant cities hub. `404.html` should stay out of the sitemap.
- `CODEX-WORKFLOW.md` links to `CONNECTOR-RECOVERY.md` for connector failure handling.
- `CONNECTOR-RECOVERY.md` records connector-failure recovery rules so Gerry does not manually edit files.
- `CHANGELOG.md` tracks safe production changes.
- `REPO-AUDIT.md` records repo-level checks for broken paths, brittle JavaScript patterns, obvious secret patterns, and leftover TODO/FIXME markers.
- `UX-GOALS.md` locks product and visitor experience rules.
- `MANUAL-TEST-CHECKLIST.md` documents post-commit manual tests.
- `BROWSER-SMOKE-TEST.md` records live smoke-test attempts and honest verification limits.
- `RESTAURANT-MARKETING-PLAN.md` describes future restaurant marketing tools and packages.
- `public/demo-promotions.json` contains demo-only future placement data and is not live paid advertising.
- `public/demo-restaurant-profiles.json` contains demo-only future restaurant profile data and is not paid placement.
- `public/sample-restaurant-profile.html` shows a demo future restaurant profile layout.

## Operational status

Currently operational in repo:

- Restaurant search API files
- Demo fallback search when API keys are not fully configured
- Worldwide city / nearby restaurant discovery files
- Google Maps / Places restaurant result files when configured
- SEO food pages
- City landing pages
- Restaurant cities hub
- Restaurant owner / advertiser interest page
- Advertiser intake interest page
- Demo profile page for future restaurant listings
- Custom 404 visitor recovery page
- Conservative Cloudflare security headers
- Safe old-path redirects
- Repo audit notes

Live browser render status:

- Needs a real browser / Cloudflare Pages check after latest commits.
- GitHub Actions workflow runs are not present for these commits, so there is no repo-side CI result to read.
- Cloudflare Pages should publish from GitHub if the project is connected and set to output directory `public`.

Not operational yet:

- Paid pop placements
- Live local ads
- Payment checkout
- Tracking scripts
- Advertiser dashboard
- Live campaign management
- Real sponsored placements

## Current safe queue

1. Confirm Cloudflare Pages deployed commit `a794f749fee4fb1c7322f99875d445211e27fb08` or later.
2. Browser-test `https://restaurantaibot.com/` and `https://www.restaurantaibot.com/`.
3. Test these searches: `pizza in Chicago`, `tacos in Dallas`, `sushi in Tokyo`, and `pizza near me` without location.
4. Confirm demo results are clearly labeled when API keys are missing.
5. If live domain still fails, fix Cloudflare DNS / Pages custom domain connection before doing more site design.
6. Keep live ads, payments, tracking, dashboards, ordering, uploads, and accounts inactive until direct approval.

## Safety lock

No private keys, API keys, live ads, live tracking, payment setup, affiliate links, accounts, upload systems, public AI tools beyond the controlled restaurant search flow, framework rebuilds, automated ordering integrations, scraping systems, or major code deletion were added.
