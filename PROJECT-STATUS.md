# RestaurantAIBot Project Status

Last updated: 2026-05-27

## Current stable systems

- AI restaurant search
- Google Maps integration
- Cloudflare Pages deployment
- Cloudflare Functions API
- GitHub auto deploy from `main`
- Homepage search interface
- Quick search buttons
- SEO-ready core pages
- Basic support pages

## Current stable architecture

- `public/index.html` is the main website/search page.
- `public/quick-searches.js` adds quick search buttons.
- `functions/api/search.js` handles AI restaurant search.
- `functions/api/config.js` returns the browser-safe Google Maps key from Cloudflare environment variables.
- `public/robots.txt` allows crawling and points to sitemap.
- `public/sitemap.xml` lists core pages.

## Added support pages

- About
- Contact
- Privacy
- Terms

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

## Current safe queue

1. Upgrade About, Contact, and Privacy pages from placeholder pages into more useful pages.
2. Add an advertising / restaurant owner interest page without adding live ad code or payment setup.
3. Add city and cuisine SEO landing pages.
4. Improve API validation and error handling.
5. Add a manual test checklist.
6. Remove `.chatgpt-connector-test.md` after more successful production commits if desired.

## Blocked items

- Do not add private API keys, payment setup, live ad scripts, analytics tracking, or live sponsorship placement without explicit approval.
- Do not replace Cloudflare Pages auto-deploy with GitHub Actions.
- Do not change frameworks or introduce build tools.
