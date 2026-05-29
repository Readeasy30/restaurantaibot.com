# CHANGELOG.md

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

### Notes

- Cloudflare remains publisher only and should publish from GitHub.
- No private keys, API keys, live ads, live tracking, payment setup, affiliate links, accounts, upload systems, public AI tools beyond the controlled restaurant search flow, framework rebuilds, automated ordering integrations, scraping systems, or major code deletion were added.
