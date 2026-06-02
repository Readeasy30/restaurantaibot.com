# CODEX-CURRENT-TASK.md

Last updated: 2026-06-02

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

## Current locked checkpoint

RestaurantAIBot now has a safer MVP search path:

- `functions/api/search.js` no longer hard-fails only because `OPENAI_API_KEY` is missing.
- Local parsing can handle common city and cuisine searches before OpenAI is connected.
- If Google Maps is not configured or live search temporarily fails, the API returns clearly labeled demo results instead of a dead-end error.
- `public/index.html` labels demo cards as sample matches and warns visitors to confirm real details before visiting.
- No live ads, payments, tracking, accounts, uploads, ordering integrations, private keys, or framework changes were added.

## Current project focus

RestaurantAIBot is a restaurant discovery and future restaurant-marketing website.

Keep the site simple, fast, mobile-first, and useful for visitors looking for food and restaurant owners looking for visibility.

## Current safe queue

1. Run real browser/manual tests using `MANUAL-TEST-CHECKLIST.md`.
2. Check whether Cloudflare Pages has deployed commit `c52e568b6827705fc3d07c4a90c69b34a2d7f529` or later.
3. Test homepage searches before API keys are configured, especially `pizza in Chicago`, `tacos in Dallas`, `sushi in Tokyo`, and `pizza near me` without location.
4. Review `BROWSER-SMOKE-TEST.md` after browser testing and update it with real pass/fail results.
5. Consider a shared helper script for future cross-link injection only if it stays simple and safe.
6. Keep internal links strong between search, food pages, city pages, and restaurant owner pages.
7. Full city-to-food cross-link expansion for Dallas and Tokyo is optional later; smaller navigation-link repairs already succeeded.
8. Keep simple HTML, CSS, and JavaScript.
9. Keep Cloudflare Pages publishing from `main`.

## Stop points

Stop before private keys, live ads, tracking, payment setup, user accounts, upload systems, ordering integrations, framework migration, major code deletion, or changes that could break current search/API behavior without a safe repair path.

## Reporting

Report only after useful commits or a real blocker.
