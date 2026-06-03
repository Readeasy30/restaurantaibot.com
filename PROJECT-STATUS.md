# RestaurantAIBot Project Status

Last updated: 2026-06-03

## Repository

`Wholelychit/restaurantaibot.com`

## Locked checkpoint — 2026-06-03

Current stable checkpoint is locked at or after commit:

`042211fae14c9344d29315189fbf8163d80a897b`

Additional checkpoint commits made after that:

- `3598c74b46f80044a6d53117cb115dd34e5cf06a` — `public/system-status.html` marked `noindex, nofollow`.
- Sitemap diagnostic-page cleanup attempted after this checkpoint; verify latest `public/sitemap.xml` before the next build batch.

Do not repeat completed Cloudflare/DNS diagnosis unless the live domain breaks again.

## Codex-first / Grok-compatible workflow

Use ChatGPT 5.5, Codex, Grok when useful, GitHub, and Cloudflare Pages as the production workflow.

- ChatGPT 5.5 manages the plan.
- Codex or Grok can review and continue safe repository work when connected to GitHub.
- GitHub stores files and commits.
- Cloudflare Pages publishes from GitHub when connected.
- Gerry should not be asked to paste, create, replace, or manually update repo files.

Use the ChatGPT GitHub connector only for small reads, checks, reviews, emergency single-file edits, or when Codex/Grok is awkward or blocked.

Current workflow files:

- `AGENTS.md`
- `CODEX-WORKFLOW.md`
- `CODEX-CURRENT-TASK.md`
- `GROK-GITHUB-BUILD-PROMPT.md`
- `PROJECT-STATUS.md`
- `CHANGELOG.md`
- `CURRENT-TASK.md`
- `CONNECTOR-RECOVERY.md`

## Current stable systems

- AI restaurant search flow
- Optional OpenAI parsing with local parsing fallback
- Safe demo restaurant results when Google Maps is not configured or live search temporarily fails
- Clear demo-result labels on homepage restaurant cards
- Root `index.html` fallback redirect if Cloudflare is accidentally pointed at repository root
- Root `_redirects` fallback for key public pages and assets if Cloudflare is accidentally pointed at repository root
- Root `_headers` fallback security headers if Cloudflare is accidentally pointed at repository root
- Improved near-me search handling
- Improved local-city search handling
- Improved quick-search submit behavior
- Homepage live-data setup notice
- Homepage search tips
- Injected System Status navigation link
- API health endpoint at `functions/api/health.js`
- System Status page at `public/system-status.html`
- System Status page marked `noindex, nofollow`
- `/api/config` readiness fields: `googleMapsConfigured` and `mapStatus`
- Custom 404 visitor recovery page
- Conservative Cloudflare security headers
- Safe Cloudflare redirects for old paths
- Repo audit notes
- Repo-side static validation helper at `tools/validate_static_site.py`
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
- Added Grok/GitHub build prompt for safe AI-assisted review and build continuation
- Added missing owner-resource pages to sitemap
- Updated README to match current owner-resource page inventory

## Current stable architecture

- `public/index.html` is the main website/search page.
- Root `index.html` redirects to `/public/index.html` as a safety net only. Preferred Cloudflare output directory remains `public`.
- Root `_redirects` maps key root URLs/assets to `/public/...` as a safety net only. Preferred Cloudflare output directory remains `public`.
- Root `_headers` mirrors conservative security headers as a safety net only. Preferred Cloudflare output directory remains `public`.
- `public/404.html` is the custom noindex visitor recovery page for broken or outdated links.
- `public/system-status.html` is a clickable diagnostic page for owner/developer checks and should stay `noindex, nofollow`.
- `public/_headers` adds conservative Cloudflare security headers and `no-store` for `/api/*`.
- `public/_redirects` adds safe 301 redirects for likely old paths including `/cities.html`, `/search.html`, `/owner.html`, and `/advertise.html`.
- `public/quick-searches.js` adds quick search buttons, injects Popular Searches / Cities / Restaurant / Owner Resources / Marketing Tools / System Status links, supports `?q=` search links, adds search tips, checks map readiness, and submits through the search form event.
- `functions/api/search.js` handles restaurant search, prevents bad `near me` searches without browser location, keeps `local + city` searches as city searches, uses OpenAI parsing when configured, uses local parsing when OpenAI is missing, and returns clearly labeled demo results when Google Maps is missing or temporarily failing.
- `functions/api/config.js` returns the browser-safe Google Maps key from Cloudflare environment variables and readiness fields.
- `functions/api/health.js` returns boolean-only readiness values for Google Maps/OpenAI setup and never returns secret values.
- `public/robots.txt` allows crawling and points to sitemap.
- `public/sitemap.xml` lists core pages, support pages, SEO food pages, city pages, restaurant owner resources, and the restaurant cities hub. `404.html` and diagnostic-only pages should stay out of the sitemap.
- `tools/validate_static_site.py` is a local-only static preflight helper for required files, sitemap coverage, robots, headers, redirects, links, homepage behavior terms, API behavior terms, and blocked live-feature script terms.
- `CODEX-WORKFLOW.md` links to `CONNECTOR-RECOVERY.md` for connector failure handling.
- `CONNECTOR-RECOVERY.md` records connector-failure recovery rules so Gerry does not manually edit files.
- `GROK-GITHUB-BUILD-PROMPT.md` gives Grok a safe GitHub build prompt that preserves the stack and safety locks.
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
- API health endpoint for boolean-only key-readiness checks
- System Status page for owner/developer checks
- Root publishing fallback files
- Root fallback security headers
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
- Grok/GitHub build prompt
- Sitemap coverage for current owner-resource pages
- Static validation helper for repo-side checks

Live browser render status:

- Earlier live-domain issue was resolved: `restaurantaibot.com` loads the site.
- DNS/custom domains/deployment/build settings were reported good by the connected Cloudflare-side check.
- Live Google Maps/Places still depends on correctly setting Cloudflare Variables and Secrets, then redeploying.
- Browser check target after deployment: `https://restaurantaibot.com/system-status.html`.

Cloudflare variables status:

- Required for live map/search: `GOOGLE_MAPS_API_KEY`.
- Optional for AI parsing: `OPENAI_API_KEY`.
- These keys must be entered directly in Cloudflare Variables and Secrets, not in chat or GitHub.
- Wrong variable name `Google maps api` must not be used.

Not operational yet:

- Paid pop placements
- Live local ads
- Payment checkout
- Tracking scripts
- Advertiser dashboard
- Live campaign management
- Real sponsored placements

## Current safe queue after lock

1. Verify latest Cloudflare deployment includes the newest GitHub commit.
2. Browser-test `https://restaurantaibot.com/system-status.html` and click `Check Live Status`.
3. Browser-test `https://restaurantaibot.com/api/config`.
4. If `googleMapsConfigured` is false, fix Cloudflare variable name/value and redeploy.
5. If `googleMapsConfigured` is true, test: `pizza in Chicago`, `tacos in Dallas`, `sushi in Tokyo`, and `pizza near me` after clicking Use My Location.
6. Verify `public/sitemap.xml` does not include diagnostic-only `system-status.html`.
7. Run repo-side validation with `python tools/validate_static_site.py` before the next design batch.
8. Keep live ads, payments, tracking, dashboards, ordering, uploads, and accounts inactive until direct approval.

## Safety lock

No private keys, API keys, live ads, live tracking, payment setup, affiliate links, accounts, upload systems, public AI tools beyond the controlled restaurant search flow, framework rebuilds, automated ordering integrations, scraping systems, or major code deletion were added.
