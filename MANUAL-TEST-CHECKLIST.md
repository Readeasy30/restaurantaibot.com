# RestaurantAIBot Manual Test Checklist

Last updated: 2026-05-29

Use this checklist after safe production commits.

## Homepage

1. Open `https://restaurantaibot.com/`.
2. Confirm the page loads without a blank screen.
3. Confirm the search panel is visible.
4. Confirm the map area loads or shows a clear setup/fallback message.
5. Confirm quick search buttons appear under the header.
6. Confirm the homepage navigation includes Search, Popular Searches, Cities, About, Contact, and For Restaurants where available.
7. Confirm the injected Cities link points to `/restaurant-cities.html`, not `/cities.html`.
8. Confirm the footer warning says restaurant details can change.
9. Confirm the page works on desktop and mobile width.

## Navigation

Check these links from the homepage, support pages, food pages, and city pages:

- Home / Search
- Popular Searches
- Restaurant Cities
- About
- Contact
- Restaurants / owner advertising page
- Privacy
- Terms
- Restaurant marketing tools
- Advertiser intake

## Restaurant search

Test these searches:

- `pizza near me`
- `best sushi in Tokyo`
- `late night tacos in Dallas`
- `cheap breakfast in New York`
- `nice dinner in Miami`
- `outdoor dining in Los Angeles`
- `coffee and breakfast in Denver`
- `seafood in Miami`

Expected behavior:

- User message appears in chat.
- AI response appears in chat.
- Restaurant cards appear when results are available.
- Map markers appear when results include coordinates.
- Direction links open Google Maps in a new tab.
- Empty or no-result searches show a useful message.
- Search links using `/?q=` place the query into the search box and run the search.

## Location search

1. Click `Use My Location`.
2. If location is allowed, confirm the page says location is enabled.
3. Search `pizza near me`.
4. If location is denied, confirm the page gives a useful message and still allows city search.

## Mobile check

1. Open the homepage on a phone or narrow browser width.
2. Confirm the search panel stacks above the map.
3. Confirm the input and Search button are easy to tap.
4. Confirm quick search buttons wrap instead of overflowing.
5. Confirm footer links are visible.
6. Confirm food and city landing pages are readable without sideways scrolling.
7. Confirm the page can scroll if needed.

## Support pages

Open each page and confirm it loads:

- `/about.html`
- `/contact.html`
- `/privacy.html`
- `/terms.html`
- `/owner-advertise.html`
- `/restaurant-marketing-tools.html`
- `/advertiser-intake.html`
- `/sample-restaurant-profile.html`

Expected behavior:

- Page has a clear title.
- Navigation works.
- Language is clear and consumer-friendly.
- Pages do not promise guaranteed restaurant hours, prices, allergies, menus, or availability.
- Owner / advertiser page does not add live ads, payments, or tracking.
- Demo profile page is clearly demo/sample only.

## Food SEO pages

Open and scan:

- `/pizza-near-me.html`
- `/tacos-near-me.html`
- `/sushi-near-me.html`
- `/breakfast-near-me.html`
- `/vegan-restaurants-near-me.html`
- `/seafood-near-me.html`
- `/coffee-near-me.html`
- `/dinner-near-me.html`
- `/cheap-eats-near-me.html`
- `/outdoor-dining-near-me.html`
- `/popular-searches.html`

Expected behavior:

- Page explains the search use case.
- Main button links back to the AI search page.
- City and food cross-links work where present.
- `/?q=` links run a matching search from the homepage.
- Page includes a confirm-before-you-go warning.
- Page is readable on mobile.

## City pages

Open and scan:

- `/restaurant-cities.html`
- `/chicago-restaurants.html`
- `/new-york-restaurants.html`
- `/dallas-restaurants.html`
- `/miami-restaurants.html`
- `/los-angeles-restaurants.html`
- `/las-vegas-restaurants.html`
- `/atlanta-restaurants.html`
- `/denver-restaurants.html`
- `/tokyo-restaurants.html`
- `/london-restaurants.html`
- `/paris-restaurants.html`
- `/toronto-restaurants.html`

Expected behavior:

- City page has clear city-specific title and description.
- Search button links back to the AI search page.
- City-to-food cross-links work where present.
- Dallas and Tokyo may still need later cross-link retry because connector false positives blocked text-only updates.
- Page includes a confirm-before-you-go warning.
- Page is readable on mobile.

## Data/demo files

Check these files in the repository, not as public promises:

- `public/demo-promotions.json`
- `public/demo-restaurant-profiles.json`

Expected behavior:

- Files are clearly demo-only.
- Files do not represent paid placements.
- Files do not include private data, API keys, payment instructions, or live ad settings.

## Sitemap and robots

1. Open `/robots.txt`.
2. Confirm it points to `https://restaurantaibot.com/sitemap.xml`.
3. Open `/sitemap.xml`.
4. Confirm all core pages, support pages, SEO pages, city pages, and the restaurant cities hub are listed.

## Safety checks

1. Confirm no API keys are visible in GitHub files.
2. Confirm no payment code was added.
3. Confirm no live ad scripts were added.
4. Confirm no tracking scripts were added.
5. Confirm no user accounts or upload systems were added.
6. Confirm no framework migration was added.
7. Confirm Cloudflare Pages still uses the current simple static setup.
8. Confirm Cloudflare Pages still deploys from the `main` branch.

## Blocked / do not test yet

Do not test payments, live ads, analytics tracking, sponsored placements, user accounts, upload systems, public AI tools beyond the controlled search flow, ordering integrations, or private API-key changes. Those are not active features yet.
