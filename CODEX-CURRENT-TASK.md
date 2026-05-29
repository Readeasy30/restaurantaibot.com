# CODEX-CURRENT-TASK.md

Last updated: 2026-05-29

## Repository

`Wholelychit/restaurantaibot.com`

## Current operating mode

Use ChatGPT 5.5 and Codex as the production workflow.

No local Git. No terminal Git. No VS Code requirement. No manual repo file creation or paste updates.

Workflow:

1. ChatGPT 5.5 manages the plan.
2. Codex performs repository work.
3. GitHub stores files and commits.
4. Cloudflare Pages publishes from GitHub when connected.

## Current project focus

RestaurantAIBot is a restaurant discovery and future restaurant-marketing website.

Keep the site simple, fast, mobile-first, and useful for visitors looking for food and restaurant owners looking for visibility.

## Current safe queue

1. Run real browser/manual tests using `MANUAL-TEST-CHECKLIST.md`.
2. Review `BROWSER-SMOKE-TEST.md` after browser testing and update it with real pass/fail results.
3. Consider a shared helper script for future cross-link injection only if it stays simple and safe.
4. Keep internal links strong between search, food pages, city pages, and restaurant owner pages.
5. Full city-to-food cross-link expansion for Dallas and Tokyo is optional later; smaller navigation-link repairs already succeeded.
6. Keep simple HTML, CSS, and JavaScript.
7. Keep Cloudflare Pages publishing from `main`.

## Stop points

Stop before private keys, live ads, tracking, payment setup, user accounts, upload systems, ordering integrations, framework migration, major code deletion, or changes that could break current search/API behavior without a safe repair path.

## Reporting

Report only after useful commits or a real blocker.
