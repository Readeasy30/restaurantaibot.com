# RestaurantAIBot Project Status

Last updated: 2026-05-28

## Codex-first workflow

Codex is the primary workflow for routine RestaurantAIBot repository editing.

Use the ChatGPT GitHub connector only for small reads, checks, reviews, or emergency single-file edits when Codex is unavailable.

Current workflow file:

- `CODEX-WORKFLOW.md`

## Current stable systems

- AI restaurant search
- Google Maps integration
- Cloudflare Pages deployment
- Cloudflare Functions API
- GitHub auto deploy from `main`
- Homepage search interface
- Quick search buttons
- SEO-ready core pages
- Improved support pages
- Restaurant owner / advertiser interest page
- Dedicated UX goals file
- Manual test checklist

## Current stable architecture

- `public/index.html` is the main website/search page.
- `public/quick-searches.js` adds quick search buttons.
- `functions/api/search.js` handles AI restaurant search.
- `functions/api/config.js` returns the browser-safe Google Maps key from Cloudflare environment variables.
- `public/robots.txt` allows crawling and points to sitemap.
- `public/sitemap.xml` lists core pages and first SEO pages.
- `UX-GOALS.md` locks product and visitor experience rules.
- `MANUAL-TEST-CHECKLIST.md` documents post-commit manual tests.

## Added support pages

- About
- Contact
- Privacy
- Terms
- Restaurant owner / advertiser interest

## Added SEO pages

- Pizza near me
- Tacos near me
- Sushi near me
- Breakfast near me

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

## Current safe queue

1. Improve quick search buttons and homepage links to include restaurant owner page and SEO pages.
2. Add more SEO pages: vegan, seafood, coffee, romantic dinner, cheap eats, outdoor dining.
3. Add a popular searches hub page.
4. Improve homepage UX for query parameters such as `?q=pizza%20near%20me` if needed.
5. Remove `.chatgpt-connector-test.md` after more successful production commits if desired.

## Blocked items

- Do not add private API keys, payment setup, live ad scripts, analytics tracking, or live sponsorship placement without explicit approval.
- Do not replace Cloudflare Pages auto-deploy with GitHub Actions.
- Do not change frameworks or introduce build tools.
