# CHANGELOG.md

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

### Safety notes

- No private keys, API keys, live ads, tracking scripts, payment setup, user accounts, upload systems, ordering integrations, affiliate links, framework rebuilds, or major code deletion were added.
- The Grok prompt keeps work limited to safe plain HTML/CSS/JS, Cloudflare Pages, documentation, SEO, mobile, accessibility, and small bug-fix improvements.
- Sitemap, README, status, homepage setup-notice, search-guidance, API health-check, and system-status page changes are safe static/API diagnostics updates only.
- API keys must be entered directly in Cloudflare Variables and Secrets, not in GitHub or chat.

## 2026-06-02

### Added

- Added `public/restaurant-owner-resources.html` as a restaurant owner resource hub.
- Added `public/restaurant-growth-checklist.html` for website, menu, Google profile, review, social, promotion, and repeat-customer basics.
- Added `public/google-business-profile-checklist-restaurants.html` for restaurant profile basics, photos, services, and review rhythm.
- Added `public/restaurant-website-checklist.html` for mobile-first restaurant website clarity.
- Added `public/restaurant-review-response-templates.html` for safe, human restaurant review response examples.
- Added `public/slow-night-restaurant-promotion-ideas.html` for simple restaurant promotion planning.
- Added safe demo fallback restaurant search in `functions/api/search.js` so the site can show sample results when Google Maps is not configured or live search temporarily fails.

### Changed

- Updated `public/sitemap.xml` to include the new restaurant owner resource pages.
- Updated `public/quick-searches.js` so homepage navigation includes Owner Resources.
- Updated `README.md` to document the owner resource pages and their use of the marketing-system direction.
- Updated `functions/api/search.js` so OpenAI parsing is optional and local parsing can handle common city/cuisine searches before API keys are connected.
- Updated `public/index.html` to clearly label demo search results and avoid making sample results look like verified live restaurant listings.
- Updated homepage map fallback language so visitors know they can still preview food and city searches before live Google Maps setup is complete.

### Safety notes

- No private keys, API keys, live ads, tracking scripts, payment setup, user accounts, upload systems, ordering integrations, framework rebuilds, or major code deletion were added.
- New pages are static educational/lead-support content only.
- Demo fallback results are clearly labeled as sample matches and tell visitors to confirm real details before visiting a restaurant.

## 2026-05-29

### Added

- Added `CODEX-CURRENT-TASK.md` to define the current safe work queue.
- Added this changelog to track safe production changes.
- Added `CONNECTOR-RECOVERY.md` to document what to do when the ChatGPT GitHub connector blocks, filters, or behaves inconsistently.
- Added `BROWSER-SMOKE-TEST.md` to record live smoke-test attempts and honest verification limits.
- Added `REPO-AUDIT.md` to record repo-level checks for broken paths, brittle JavaScript patterns, obvious secret patterns, and leftover TODO/FIXME markers.
- Added expanded support, food SEO, city, restaurant owner, and demo-planning pages across the current static site.
- Added demo-only planning data files for future promotions and restaurant profiles.
- Added `public/404.html` so broken or outdated links guide visitors back to Search, Popular Searches, City Guides, and For Restaurants.
- Added `public/_headers` with conservative Cloudflare security headers and `no-store` caching for `/api/*`.
- Added `public/_redirects` with safe 301 redirects for likely old paths such as `/cities.html`, `/search.html`, `/owner.html`, and `/advertise.html`.

### Changed

- Fixed Codex access documentation by confirming `Wholelychit/restaurantaibot.com` as the GitHub connector target and clarifying that local file access, terminal Git access, and connector commit access are separate.
- Updated `AGENTS.md`, `CODEX-WORKFLOW.md`, and `CODEX-CURRENT-TASK.md` so future Codex runs do not ask Gerry to use terminal Git, VS Code, manual file copying, manual paste updates, or manual GitHub edits to resolve routine access friction.
- Standardized `AGENTS.md` with the no-local-Git workflow.
- Standardized `CODEX-WORKFLOW.md` with the ChatGPT 5.5 + Codex + GitHub + Cloudflare production workflow.
- Linked `CONNECTOR-RECOVERY.md` from `CODEX-WORKFLOW.md`.
- Updated `PROJECT-STATUS.md` to include required repo-local workflow files and current safe queue.
- Updated `README.md` to match the current site structure, production hardening files, audit notes, safe workflow, SEO pages, city pages, Cloudflare setup, and known connector false positives.
- Updated `CURRENT-TASK.md` and `CODEX-CURRENT-TASK.md` with the current safe queue.
- Expanded `public/sitemap.xml` to include support pages, food pages, city pages, and restaurant owner pages.
- Verified `public/robots.txt` allows crawling and points to the sitemap.
- Updated `MANUAL-TEST-CHECKLIST.md` for current homepage, redirects, 404 page, security headers, food page, city page, query-link, near-me, local-city, demo-file, and safety checks.
- Improved `public/index.html` map fallback behavior when Google Maps config or script loading fails.
- Improved `functions/api/search.js` so `near me` searches without browser location ask the visitor to enable location or type a city instead of searching `in near me`.
- Refined `functions/api/search.js` so city searches using the word `local`, such as `local tacos in Dallas`, remain city searches and do not require browser location.
- Improved `public/quick-searches.js` so quick search buttons and `/?q=` links submit through the search form event instead of a brittle button-click shortcut.
- Improved internal links across food SEO pages, city pages, and the Popular Searches hub where connector writes allowed it.
- Updated `CONNECTOR-RECOVERY.md` after smaller Dallas/Tokyo retries succeeded.

### Fixed

- Fixed the injected homepage Cities link to point to `/restaurant-cities.html` instead of the wrong `/cities.html` path.
- Fixed homepage map area staying stuck on a stale loading message when map setup fails.
- Fixed bad near-me search behavior when the visitor has not enabled location.
- Fixed local city search behavior so `local + city` queries are not treated as location-required near-me searches.
- Fixed quick-search submission reliability by dispatching the actual form submit event.
- Added the missing Cities navigation link to `public/dallas-restaurants.html`.
- Added the missing Cities navigation link to `public/tokyo-restaurants.html`.

### Known connector false positives

- Larger full-page city-to-food cross-link rewrites for `public/dallas-restaurants.html` and `public/tokyo-restaurants.html` were blocked twice by the connector.
- Smaller retries later succeeded for both files by adding the missing `restaurant-cities.html` navigation link.
- Full city-to-food cross-link expansion can still be retried later through Codex or smaller commits if useful.
