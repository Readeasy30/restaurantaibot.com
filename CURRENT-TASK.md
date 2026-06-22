# Current Task

Last updated: 2026-06-21

## LOCKED BUILD STATE

RestaurantAIBot current build is locked as of this checkpoint.

Do not rework, rename, remove, or redesign the completed SEO pages, Popular Searches injectors, sitemaps, disclaimer wording, owner pages, Bites avatar, language choices, or local photo ambience system unless Gerry directly asks for that change.

GitHub is the source of truth. Cloudflare Pages should publish committed changes automatically from this repository.

## RestaurantAIBot active build direction

> Build RestaurantAIBot into a world-class AI restaurant finder for locals and travelers, with safe restaurant-owner promo and website services.

## Locked business split

- **RestaurantAIBot** = consumer restaurant finder + restaurant-owner lead generator + proof site for the restaurant website system.
- **Ladyfolks.com** = separate website-building business site. It is not the current repo task. It may be promoted later inside RestaurantAIBot as a clearly labeled ad/offer after RestaurantAIBot is locked.

## Locked owner-service pricing

- Visibility Check — **$10 one time**
- Starter Profile — **$20/mo**
- Smart Promo Card — **$50/mo**
- Traveler Visibility — **$100/mo**
- Website Starter — **$309 setup + $40/mo**
- Website Pro — **$619 setup + $82/mo**

## Locked website-offer rules

- Website builds should be repeatable and fast.
- Owners should be able to self-manage routine content such as hours, specials, and menu updates whenever possible.
- Monthly service must represent real value, not routine tiny text edits.
- Keep the stack plain HTML/CSS/JS with GitHub + Cloudflare Pages.

## Finish order now

### 1) Tighten homepage owner CTA path
- Keep the homepage primarily a restaurant finder.
- Make the owner path visible but secondary.
- Link clearly to Owner Advertise, Owner Intake, and Website Starter.

### 2) Tighten owner sales pages
- `public/owner-advertise.html`
- `public/restaurant-owner-intake.html`
- `public/restaurant-website-starter.html`

Use the locked pricing above and the owner-friendly website language above.

### 3) Browser-test the live pages after deploy
Check at minimum:
- `https://restaurantaibot.com/`
- `https://restaurantaibot.com/owner-advertise.html`
- `https://restaurantaibot.com/restaurant-owner-intake.html`
- `https://restaurantaibot.com/restaurant-website-starter.html`
- `https://restaurantaibot.com/popular-searches.html`
- `https://restaurantaibot.com/restaurant-cities.html`
- `https://restaurantaibot.com/sitemap.xml`

### 4) Only after RestaurantAIBot is locked
Move to `ladyfolks.com` as the website-building business site.

## Safety rule

No sensitive keys, private credentials, account systems, upload systems, ordering integrations, major framework changes, or live paid ad/payment systems without direct approval.

No random restaurant photo should be used in a way that suggests it is a verified restaurant image, owner-provided photo, or real menu item unless that is confirmed.