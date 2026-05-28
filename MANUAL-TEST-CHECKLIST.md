# RestaurantAIBot Manual Test Checklist

Last updated: 2026-05-28

Use this checklist after safe production commits.

## Homepage

1. Open `https://restaurantaibot.com/`.
2. Confirm the page loads without a blank screen.
3. Confirm the search panel is visible.
4. Confirm the map area loads or shows a clear setup/fallback message.
5. Confirm quick search buttons appear under the header.
6. Confirm the footer warning says restaurant details can change.
7. Confirm the page works on desktop and mobile width.

## Navigation

Check these links from the homepage and support pages:

- Home / Search
- About
- Contact
- Restaurants / owner advertising page
- Privacy
- Terms

## Restaurant search

Test these searches:

- `pizza near me`
- `best sushi in Tokyo`
- `late night tacos in Dallas`
- `cheap breakfast in New York`
- `romantic dinner in Miami`

Expected behavior:

- User message appears in chat.
- AI response appears in chat.
- Restaurant cards appear when results are available.
- Map markers appear when results include coordinates.
- Direction links open Google Maps in a new tab.
- Empty or no-result searches show a useful message.

## Location search

1. Click `Use My Location`.
2. If location is allowed, confirm the page says location is enabled.
3. Search `pizza near me`.
4. If location is denied, confirm the page gives a useful message and still allows city search.

## Mobile check

1. Open the homepage on a phone or narrow browser width.
2. Confirm the search panel stacks above the map.
3. Confirm the input and Search button are easy to tap.
4. Confirm the footer links are visible.
5. Confirm the page can scroll if needed.

## Support pages

Open each page and confirm it loads:

- `/about.html`
- `/contact.html`
- `/privacy.html`
- `/terms.html`
- `/owner-advertise.html`

Expected behavior:

- Page has a clear title.
- Navigation works.
- Language is clear and consumer-friendly.
- Pages do not promise guaranteed restaurant hours, prices, allergies, menus, or availability.
- Owner / advertiser page does not add live ads, payments, or tracking.

## SEO pages

Open and scan:

- `/pizza-near-me.html`
- `/tacos-near-me.html`
- `/sushi-near-me.html`
- `/breakfast-near-me.html`

Expected behavior:

- Page explains the search use case.
- Button links back to the main search page.
- Page includes a confirm-before-you-go warning.
- Page is readable on mobile.

## Sitemap and robots

1. Open `/robots.txt`.
2. Confirm it points to `https://restaurantaibot.com/sitemap.xml`.
3. Open `/sitemap.xml`.
4. Confirm all core pages and SEO pages are listed.

## Safety checks

1. Confirm no API keys are visible in GitHub files.
2. Confirm no payment code was added.
3. Confirm no live ad scripts were added.
4. Confirm no tracking scripts were added.
5. Confirm Cloudflare Pages still uses build output directory `public`.
6. Confirm Cloudflare Pages still deploys from the `main` branch.

## Blocked / do not test yet

Do not test payments, live ads, analytics tracking, sponsored placements, user accounts, or private API-key changes. Those are not active features yet.
