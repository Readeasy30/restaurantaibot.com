# GROK-GITHUB-BUILD-PROMPT.md

Use this prompt when working on `Wholelychit/restaurantaibot.com` with Grok, Codex, or another GitHub-connected AI assistant.

## Exact task to give Grok

Review and continue building this repository:

`Wholelychit/restaurantaibot.com`

Read these files first:

1. `README.md`
2. `AGENTS.md`
3. `CODEX-WORKFLOW.md`
4. `CODEX-CURRENT-TASK.md`
5. `PROJECT-STATUS.md`
6. `LOCKED-CHECKPOINT.md` if present
7. `MANUAL-TEST-CHECKLIST.md` if present
8. `BROWSER-SMOKE-TEST.md` if present
9. `REPO-AUDIT.md` if present

## Main rule

Do not ask Gerry to paste, create, replace, or manually edit repository files. Use GitHub access to create, update, replace, and commit safe files directly.

## Stack lock

Keep the current stack:

- Plain HTML
- Plain CSS
- Plain JavaScript
- Cloudflare Pages
- Cloudflare Pages Functions when needed
- Google Maps / Places only through approved Cloudflare environment variables
- OpenAI parsing only through approved Cloudflare environment variables

Do not convert this repo to React, Vite, Next.js, TypeScript, Tailwind, Node build tooling, or any framework unless Gerry directly approves it.

## Safety lock

Do not add:

- API keys or private tokens
- Live ads
- Live tracking scripts
- Payment setup
- Affiliate links
- Ordering integrations
- User accounts
- Upload systems
- Scraping systems that violate terms
- Major code deletion
- Framework rebuilds

## Build goal

Build RestaurantAIBot into a fast, simple, useful restaurant discovery and restaurant-owner marketing site.

The visitor side should help people search by:

- Food craving
- City
- Travel destination
- Mood
- Budget
- Dining style
- Near-me intent when browser location is safely available

The owner side should help restaurant owners understand future services such as:

- Better restaurant websites
- Google Business Profile improvement
- Review response help
- Slow-night promotions
- Local ad planning
- Future sponsored profiles or promotion packages

Keep all advertiser, sponsor, payment, tracking, and campaign systems as planning/demo content only until Gerry approves live commercial features.

## First safe build queue

1. Verify homepage links, footer links, navigation, search form behavior, and mobile layout.
2. Check `public/sitemap.xml` and `public/robots.txt` for missing current pages.
3. Check title tags, meta descriptions, canonical URLs, headings, and alt text.
4. Check public JavaScript for obvious browser errors and brittle selectors.
5. Check Cloudflare settings documentation: build command blank, output directory `public`, branch `main`.
6. Improve small safe HTML/CSS/JS issues directly.
7. Add or update documentation only when it prevents repeated work.
8. Commit each useful safe batch with a clear message.
9. Update `PROJECT-STATUS.md` and `CHANGELOG.md` after meaningful work.
10. Stop only for real blockers: missing GitHub permission, missing Cloudflare access, API key setup, payments, tracking, live ads, accounts, uploads, or risky production changes.

## Report format

After a useful batch, report:

- Files changed
- Bugs fixed
- SEO improvements
- Mobile/accessibility improvements
- Commit messages
- What still needs browser/Cloudflare verification
- Any blocker that requires Gerry

Keep the report short and actionable.

## Browser test targets

When browser testing is available, test:

- `https://restaurantaibot.com/`
- `https://www.restaurantaibot.com/`
- Search: `pizza in Chicago`
- Search: `tacos in Dallas`
- Search: `sushi in Tokyo`
- Search: `pizza near me` with no location permission
- Main SEO hubs
- City pages
- Food pages
- Owner/advertiser pages

## Expected production behavior

- Site should load fast on mobile.
- Search should not break when API keys are missing.
- Demo fallback results must be clearly labeled.
- No secret keys should ever appear in browser files or GitHub.
- No live ads, payments, tracking, dashboard, ordering, or affiliate systems should be activated without direct approval.
