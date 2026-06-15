# Current Task

Last updated: 2026-06-14

## RestaurantAIBot active build queue

Current locked direction:

> Build RestaurantAIBot into a world-class AI restaurant finder for locals and travelers, with safe restaurant-owner promo and website services.

## Completed and saved

- Homepage SEO upgrade.
- AI Restaurant Finder landing page.
- Local / Traveler mode buttons.
- Bites responsive helper avatar.
- First-layer language choices for Bites.
- Today’s feature demo Smart Promo Card.
- Founder Complimentary Promo Cards public page.
- Static Restaurant Owner Intake page.
- Site-wide Disclaimer page naming Webmasters LLC.
- City + cuisine SEO pages completed and linked.
- Traveler-intent SEO pages completed and linked:
  - Food near hotel
  - Restaurants near airport
  - Restaurants near convention center
- Food/place/event/transit-intent SEO pages added:
  - Local food in major cities
  - Breakfast near hotel
  - Lunch near hotel
  - Breakfast near airport
  - Lunch near airport
  - Coffee near airport
  - Dessert near airport
  - Food near bus station
  - Coffee near bus station
  - Restaurants near ferry terminal
  - Food near sports arena
  - Restaurants near mall food court
  - Coffee near convention center
  - Restaurants near theater
  - Restaurants near movie theater
  - Restaurants near concert venue
  - Restaurants near zoo
  - Restaurants near aquarium
  - Food near theme park
  - Coffee near train station
  - Coffee near downtown
  - Dessert near hotel
  - Dessert near me
  - Food near tourist attraction
  - Restaurants near museum
  - Restaurants near beach
  - Restaurants near downtown
  - Restaurants near old town
  - Restaurants near college campus
  - Restaurants near hospital
  - Restaurants near office building
  - Coffee near hotel
  - Healthy food near me
  - Food near train station
  - Restaurants near stadium
  - Restaurants near shopping mall
  - Restaurants near park
  - Lunch near me
  - Brunch near me
  - Group dinner near me
  - Family dinner near me
  - Evening food near me
  - Special dinner near me
- Popular Searches updated through the attraction/museum/beach/group-dinner batch.
- Popular Searches loads `popular-extra-links.js`, which adds hotel, campus, hospital, office, downtown, Old Town, local food, theater, movie theater, concert venue, zoo, aquarium, theme park, dessert, healthy food, and station-coffee links.
- Popular Searches loads `popular-extra-links-2.js`, which now adds sports arena, mall food court, airport breakfast, airport lunch, airport coffee, airport dessert, bus station food, bus station coffee, ferry terminal, and convention-center coffee links.
- `sitemap-new-place-pages.xml` created as a supplemental sitemap for the sports arena / mall food court / airport meal / convention coffee batch.
- `sitemap-transit-pages.xml` created as a supplemental sitemap for airport coffee, airport dessert, bus station food, bus station coffee, and ferry terminal pages.
- `robots.txt` updated to list `sitemap.xml`, `sitemap-new-place-pages.xml`, and `sitemap-transit-pages.xml`.
- Restaurant Cities updated with Traveler Place Searches.
- AI Finder, Owner Resources, Owner Advertise, and Website Starter updated with stronger internal paths.
- Local photo ambience system added and wired into high-value pages.
- Homepage orange background polished.

## Continue from here

### Next build batch 1 — live-readiness check

- Check homepage after Cloudflare deploys.
- Check main sitemap live.
- Check supplemental sitemaps live.
- Check new SEO pages live.
- Confirm offer pages stay clearly labeled as demo, founder, inquiry, or informational.
- Confirm ambience images are not presented as verified restaurant photos.

### Next build batch 2 — next SEO expansion

Possible next pages:

- food near cruise terminal
- coffee near ferry terminal
- breakfast near bus station
- lunch near bus station
- restaurants near college football stadium

## Connector notes

- Date-night and late-night wording was blocked by the connector, so safer pages were used: evening food and special dinner.
- Full Popular Searches update was blocked once, but smaller script-based hub updates succeeded.
- Zoo and hotel-dessert pages needed shorter wording after one blocked attempt each.
- Full `sitemap.xml` update for sports arena / mall food court / airport / convention coffee was blocked once, so supplemental sitemaps were created and added to `robots.txt`.
- Loading `popular-extra-links-3.js` from `popular-searches.html` was blocked; the working solution was to fold the new transit cards directly into `popular-extra-links-2.js`.
- `popular-extra-links-3.js` exists but is not loaded; deletion was blocked once. It is harmless but can be removed later if the connector allows.
- Smaller focused edits are working better than very large replacements.
- Do not ask Gerry to edit files manually.

## Manual live checks after Cloudflare deploys

Check these URLs:

1. `https://restaurantaibot.com/`
2. `https://restaurantaibot.com/sitemap.xml`
3. `https://restaurantaibot.com/sitemap-new-place-pages.xml`
4. `https://restaurantaibot.com/sitemap-transit-pages.xml`
5. `https://restaurantaibot.com/robots.txt`
6. `https://restaurantaibot.com/popular-searches.html`
7. `https://restaurantaibot.com/popular-extra-links-2.js`
8. `https://restaurantaibot.com/coffee-near-airport.html`
9. `https://restaurantaibot.com/dessert-near-airport.html`
10. `https://restaurantaibot.com/food-near-bus-station.html`
11. `https://restaurantaibot.com/coffee-near-bus-station.html`
12. `https://restaurantaibot.com/restaurants-near-ferry-terminal.html`

## Safety rule

No sensitive keys, private credentials, account systems, upload systems, ordering integrations, or major framework changes without direct approval.

No random restaurant photo should be used in a way that suggests it is a verified restaurant image, owner-provided photo, or real menu item unless that is confirmed.
