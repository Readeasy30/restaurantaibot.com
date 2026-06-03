# Current Task

Last updated: 2026-06-03

RestaurantAIBot safe build queue:

1. Run repo-side validation with `python tools/validate_static_site.py` before more design changes.
2. Confirm Cloudflare Pages deployed commit `3b388c40f4ef05139450468fa5db3fbbd18ff833` or later.
3. Browser-test `https://restaurantaibot.com/` and `https://www.restaurantaibot.com/`.
4. Test `pizza in Chicago`, `tacos in Dallas`, `sushi in Tokyo`, and `pizza near me` without location.
5. Confirm demo results are clearly labeled when API keys are missing.
6. Confirm root fallback does not create `/public/index.html` redirect loops.
7. If live domain still fails, fix Cloudflare DNS / Pages custom domain connection before doing more site design.
8. Keep internal links strong between search, food pages, city pages, and restaurant owner pages.
9. Keep simple HTML, CSS, and JavaScript.
10. Keep Cloudflare Pages publishing from `main`; preferred output directory remains `public`.

Connector rule:

- Do not ask Gerry to edit files manually.
- Retry smaller safe edits, record blockers, and continue the safe queue.
- Dallas and Tokyo smaller retries succeeded; do not treat them as current blockers.

Safety rule:

- No private keys, API keys, live ads, tracking, payment setup, user accounts, uploads, ordering integrations, framework changes, or major code deletion without direct approval.
