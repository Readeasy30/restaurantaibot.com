# Locked Checkpoint

Date: 2026-06-21
Repository: `Readeasy30/restaurantaibot.com`

## Stable direction

RestaurantAIBot is a simple Cloudflare Pages website with Cloudflare Pages Functions. Keep the current stack. Do not convert to React, Vite, Next.js, TypeScript, or a new build system unless Gerry clearly requests a rebuild later.

## Current business split

- **RestaurantAIBot** = restaurant finder + restaurant-owner lead generation + proof site for the restaurant website system.
- **Ladyfolks.com** = separate website-building business site to build after RestaurantAIBot is locked.

## Current working architecture

- `public/index.html` is the main restaurant search page.
- `public/quick-searches.js` adds quick search buttons and homepage helper links.
- `functions/api/search.js` powers AI restaurant search with OpenAI and Google Places when configured.
- `functions/api/config.js` exposes browser-safe Google Maps readiness values from Cloudflare environment variables.
- `public/robots.txt` points search engines to the sitemap.
- `public/sitemap.xml` lists the core pages.
- `public/owner-advertise.html` is the main owner sales page.
- `public/restaurant-owner-intake.html` is the static owner intake page.
- `public/restaurant-website-starter.html` is the starter website sales page.

## Locked owner-service pricing

- Visibility Check — **$10 one time**
- Starter Profile — **$20/mo**
- Smart Promo Card — **$50/mo**
- Traveler Visibility — **$100/mo**
- Website Starter — **$309 setup + $40/mo**
- Website Pro — **$619 setup + $82/mo**

## Locked website-offer rules

- Keep website builds repeatable and fast.
- Owners should be able to self-manage routine content such as hours, specials, and menu updates whenever possible.
- Monthly service should represent real value, not random tiny text edits.

## Required deployment setup

Cloudflare Pages settings should remain:

- Project: `restaurantaibot`
- Build command: blank
- Build output directory: `public`
- Production branch: `main`

Required Cloudflare environment variables:

- `OPENAI_API_KEY`
- `GOOGLE_MAPS_API_KEY`

Never commit real keys to GitHub.

## Current finish queue

1. Tighten homepage owner CTA path without turning the homepage into an owner-only page.
2. Tighten `public/owner-advertise.html`, `public/restaurant-owner-intake.html`, and `public/restaurant-website-starter.html` around the locked pricing and website-offer rules above.
3. Browser-test the live pages after Cloudflare deploys the latest GitHub commits.
4. After RestaurantAIBot is locked, move to `ladyfolks.com` as the separate website-building business site.