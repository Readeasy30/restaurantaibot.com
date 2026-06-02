# Current Task

Last updated: 2026-06-02

RestaurantAIBot safe build queue:

1. Confirm Cloudflare Pages deployed commit `e9e82d2c24882eb88c4d4e2c9d38e4b9b79ce867` or later.
2. Browser-test `https://restaurantaibot.com/` and `https://www.restaurantaibot.com/`.
3. Test `pizza in Chicago`, `tacos in Dallas`, `sushi in Tokyo`, and `pizza near me` without location.
4. Confirm demo results are clearly labeled when API keys are missing.
5. Confirm root fallback does not create `/public/index.html` redirect loops.
6. If live domain still fails, fix Cloudflare DNS / Pages custom domain connection before doing more site design.
7. Keep internal links strong between search, food pages, city pages, and restaurant owner pages.
8. Keep simple HTML, CSS, and JavaScript.
9. Keep Cloudflare Pages publishing from `main`; preferred output directory remains `public`.

Connector rule:

- Do not ask Gerry to edit files manually.
- Retry smaller safe edits, record blockers, and continue the safe queue.
- Dallas and Tokyo smaller retries succeeded; do not treat them as current blockers.

Safety rule:

- No private keys, API keys, live ads, tracking, payment setup, user accounts, uploads, ordering integrations, framework changes, or major code deletion without direct approval.
