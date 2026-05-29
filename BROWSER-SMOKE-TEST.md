# Browser Smoke Test Notes

Last updated: 2026-05-29

## Purpose

Record what can and cannot be verified after the current RestaurantAIBot safe build batches.

## Current result

A live browser-style fetch was attempted from ChatGPT for these public URLs:

- `https://restaurantaibot.com/`
- `https://restaurantaibot.com/robots.txt`
- `https://restaurantaibot.com/sitemap.xml`
- `https://restaurantaibot.com/popular-searches.html`
- `https://restaurantaibot.com/restaurant-cities.html`
- `https://restaurantaibot.com/pizza-near-me.html`
- `https://restaurantaibot.com/chicago-restaurants.html`

The ChatGPT web fetch did not return a reliable live page render. This is not proof the site is broken. It only means the live browser smoke test could not be completed from this chat environment.

## Repo-level verification completed

The repository files confirm the following:

- `public/robots.txt` allows crawling and points to `https://restaurantaibot.com/sitemap.xml`.
- `public/sitemap.xml` now includes core pages, support pages, food SEO pages, city pages, and restaurant owner pages.
- `MANUAL-TEST-CHECKLIST.md` is updated for current food pages, city pages, query links, demo files, and safety checks.
- `README.md` is updated for the current site structure and workflow.

## Manual browser test still needed

Use a real browser or Codex/browser environment to confirm:

1. Homepage loads.
2. Quick search buttons appear.
3. `/?q=` search links run searches.
4. Popular Searches page loads.
5. Restaurant Cities page loads.
6. Food SEO pages load.
7. City pages load.
8. Mobile layout is readable.
9. Search results and map markers work when Cloudflare environment variables are configured.

## Safety confirmation

No live ads, payments, tracking scripts, dashboards, user accounts, upload systems, ordering integrations, private API keys, or framework migrations were added in this smoke-test batch.
