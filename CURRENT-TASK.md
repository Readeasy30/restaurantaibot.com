# Current Task

Last updated: 2026-05-29

RestaurantAIBot safe build queue:

1. Run real browser/manual tests using `MANUAL-TEST-CHECKLIST.md`.
2. Review `BROWSER-SMOKE-TEST.md` after browser testing and update it with real pass/fail results.
3. Consider a shared helper script for future cross-link injection only if it stays simple and safe.
4. Keep internal links strong between search, food pages, city pages, and restaurant owner pages.
5. Full city-to-food cross-link expansion for Dallas and Tokyo is optional later; smaller navigation-link repairs already succeeded.
6. Keep simple HTML, CSS, and JavaScript.
7. Keep Cloudflare Pages publishing from `main`.

Connector rule:

- Do not ask Gerry to edit files manually.
- Retry smaller safe edits, record blockers, and continue the safe queue.
- Dallas and Tokyo smaller retries succeeded; do not treat them as current blockers.
