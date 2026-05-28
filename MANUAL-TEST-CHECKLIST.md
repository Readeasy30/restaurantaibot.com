# Manual Test Checklist

Use this checklist after safe production commits.

## Homepage

1. Open `https://restaurantaibot.com/`.
2. Confirm the page loads without a blank screen.
3. Confirm the navigation links appear: Search, About, Contact, Privacy, Terms.
4. Confirm the search box is visible.
5. Confirm quick search buttons appear under the header.
6. Try a search such as `pizza in Chicago`.
7. Confirm restaurant results appear in the chat panel.
8. Confirm map markers appear when results include coordinates.
9. Click Directions on a result and confirm Google Maps opens in a new tab.

## Location search

1. Click Use My Location.
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
- `/robots.txt`
- `/sitemap.xml`

## Safety checks

1. Confirm no API keys are visible in GitHub files.
2. Confirm no payment code was added.
3. Confirm no live ad scripts were added.
4. Confirm Cloudflare Pages still uses build output directory `public`.
5. Confirm Cloudflare Pages still deploys from the `main` branch.
