# Current Task

Last updated: 2026-05-29

RestaurantAIBot safe build queue:

1. Run real browser/manual tests using `MANUAL-TEST-CHECKLIST.md`.
2. Review `BROWSER-SMOKE-TEST.md` after browser testing and update it with real pass/fail results.
3. Retry Dallas and Tokyo city-page cross-link updates later through Codex or a connector retry.
4. Consider a shared helper script for future cross-link injection only if it stays simple and safe.
5. Keep internal links strong between search, food pages, city pages, and restaurant owner pages.
6. Keep simple HTML, CSS, and JavaScript.
7. Keep Cloudflare Pages publishing from `main`.

Connector rule:

- Text-only connector blocks are false positives.
- Do not ask Gerry to edit files manually.
- Retry smaller safe edits, record blockers, and continue the safe queue.

Hard stop points:

- no private keys
- no live ads
- no live tracking
- no payment setup
- no user accounts
- no upload systems
- no ordering integrations
- no framework rebuild
