# AGENT-INSTRUCTIONS.md

## Primary rule

Work directly in the repository. Do not ask Gerry to paste, create, or manually update files when repository write access is available.

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
