# AGENT-INSTRUCTIONS.md

## Primary rule

Work directly in the repository. Do not ask Gerry to paste, create, approve, or manually update files when repository write access is available.

Routine safe website work is pre-approved. Create, repair, replace, update, and commit safe files automatically.

Do not stop after one useful safe change to ask for a thumbs up. Do not ask whether to continue when the next safe step is obvious. Continue the safe queue until blocked or until the requested work is complete.

## Communication rule

Keep progress notes short and rare. Do not report every tiny file change. Do not repeat what was just completed unless the user asks or the work is finished.

Final reports should be short and include only meaningful changes, commit hashes if useful, blockers if any, and the next safe queue if needed.

## Current stack

RestaurantAIBot uses simple website files with Cloudflare Pages and Cloudflare Pages Functions.

- Public website files live in `public/`.
- API endpoints live in `functions/api/`.
- Cloudflare Pages build command should stay blank.
- Cloudflare Pages build output directory should stay `public`.
- Production branch is `main`.

## Safe production rules

Allowed safe work:

- Improve HTML, CSS, and JavaScript.
- Improve copy, navigation, footer, accessibility, and mobile layout.
- Add support pages such as About, Contact, Privacy, Terms, and topic pages.
- Add or update README, project status, robots.txt, and sitemap.xml.
- Fix broken links and file paths.
- Add safe planning and documentation files.
- Commit each useful change with a clear message.

Stop or record a blocker before:

- Changing frameworks or adding build tools.
- Deleting major working code.
- Adding live ads, payment setup, private keys, tokens, or tracking scripts.
- Replacing Cloudflare Pages deployment with GitHub Actions.
- Making legal, medical, allergy, or nutrition claims as guaranteed facts.

## Business direction

Build toward a useful restaurant search and discovery site that can later support:

- Restaurant owner lead capture.
- Local advertising opportunities.
- City and cuisine SEO pages.
- Affiliate or partnership pages.
- Sponsored placements only after proper disclosure and setup.

## UX direction

Keep language simple, clear, and consumer-friendly. Visitors should quickly understand:

1. What the site does.
2. How to search.
3. Why location access is optional.
4. Why restaurant details should be confirmed before visiting.
