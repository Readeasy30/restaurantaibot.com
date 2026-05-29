# CHANGELOG.md

## 2026-05-29

### Added

- Added `CODEX-CURRENT-TASK.md` to define the current safe work queue.
- Added this changelog to track safe production changes.
- Added `CONNECTOR-RECOVERY.md` to document what to do when the ChatGPT GitHub connector blocks, filters, or behaves inconsistently.
- Added `BROWSER-SMOKE-TEST.md` to record live smoke-test attempts and honest verification limits.
- Added expanded support, food SEO, city, restaurant owner, and demo-planning pages across the current static site.
- Added demo-only planning data files for future promotions and restaurant profiles.

### Changed

- Standardized `AGENTS.md` with the no-local-Git workflow.
- Standardized `CODEX-WORKFLOW.md` with the ChatGPT 5.5 + Codex + GitHub + Cloudflare production workflow.
- Linked `CONNECTOR-RECOVERY.md` from `CODEX-WORKFLOW.md`.
- Updated `PROJECT-STATUS.md` to include required repo-local workflow files and current safe queue.
- Updated `README.md` to match the current site structure, safe workflow, SEO pages, city pages, Cloudflare setup, and known connector false positives.
- Updated `CURRENT-TASK.md` and `CODEX-CURRENT-TASK.md` with the current safe queue.
- Expanded `public/sitemap.xml` to include support pages, food pages, city pages, and restaurant owner pages.
- Verified `public/robots.txt` allows crawling and points to the sitemap.
- Updated `MANUAL-TEST-CHECKLIST.md` for current homepage, food page, city page, query-link, near-me, demo-file, and safety checks.
- Improved `public/index.html` map fallback behavior when Google Maps config or script loading fails.
- Improved `functions/api/search.js` so `near me` searches without browser location ask the visitor to enable location or type a city instead of searching `in near me`.
- Improved `public/quick-searches.js` so quick search buttons and `/?q=` links submit through the search form event instead of a brittle button-click shortcut.
- Improved internal links across food SEO pages, city pages, and the Popular Searches hub where connector writes allowed it.

### Fixed

- Fixed the injected homepage Cities link to point to `/restaurant-cities.html` instead of the wrong `/cities.html` path.
- Fixed homepage map area staying stuck on a stale loading message when map setup fails.
- Fixed bad near-me search behavior when the visitor has not enabled location.
- Fixed quick-search submission reliability by dispatching the actual form submit event.

### Known connector false positives

- `public/dallas-restaurants.html` city-to-food cross-link update was blocked twice by the connector despite being harmless text-only content.
- `public/tokyo-restaurants.html` city-to-food cross-link update was blocked twice by the connector despite being harmless text-only content.
- These are recorded as connector false positives. Do not ask Gerry to edit these files manually.

### Notes

- Cloudflare remains publisher only and should publish from GitHub.
- No private keys, API keys, live ads, live tracking, payment setup, affiliate links, accounts, upload systems, public AI tools beyond the controlled restaurant search flow, framework rebuilds, automated ordering integrations, scraping systems, or major code deletion were added.
