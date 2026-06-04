# QA Checklist

Last updated: 2026-06-04

Use this checklist before calling this site stable.

## Required live checks

Open the main public pages in a browser after deployment.

Suggested checks:

1. Homepage
2. Main service pages
3. Demo or feature pages, if present
4. About page, if present
5. Contact page, if present
6. Privacy page
7. Terms or disclaimer page, if present
8. Sitemap, if present
9. Robots file, if present

## Pass conditions

- Homepage opens without a 404 or redirect loop.
- Navigation links work.
- Main call-to-action links work.
- Important public pages open.
- Mobile layout is readable.
- Footer links work.
- No old test page appears instead of the production page.
- No broken direct-deploy-only fix is required.

## Stability checks

- Read `STABILITY-DIRECTIVE.md` before changing production files.
- Do not repeat an old fix without checking whether it is already in the repo.
- Remove or document duplicate pages that conflict with the current site.
- Do not replace working pages casually.
- Keep the current stack unless a change is directly approved.

## Browser refresh

If a page was recently fixed, test with:

- `Ctrl + F5` on Windows
- a private/incognito browser window
- site cookies cleared only if redirect errors continue

## Record results

After testing, update `PROJECT-STATUS.md`, `CHANGELOG.md`, or another project control file with the date tested, pages tested, pass/fail result, and remaining issues.
