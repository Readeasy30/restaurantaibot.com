# Current Task

Last updated: 2026-05-29

RestaurantAIBot safe build queue:

1. Keep internal links strong between search, food pages, city pages, and restaurant owner pages.
2. Review browser/manual tests using `MANUAL-TEST-CHECKLIST.md`.
3. Retry Dallas and Tokyo city-page cross-link updates later through Codex or a connector retry.
4. Consider a shared helper script for future cross-link injection only if it stays simple and safe.
5. Keep simple HTML, CSS, and JavaScript.
6. Keep Cloudflare Pages publishing from `main`.

Connector rule:

- Text-only connector blocks are false positives.
- Do not ask Gerry to edit files manually.
- Retry smaller safe edits, record blockers, and continue the safe queue.
