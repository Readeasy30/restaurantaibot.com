# Restaurant Owner Promo Ads + Website Program

Last updated: 2026-06-14

## Purpose

Design a low-cost restaurant owner revenue program for RestaurantAIBot.

This is a planning document only. It is not live ad code, not a payment system, and not a tracking system.

The goal is to create a trusted restaurant-owner program where restaurants can buy simple, well-timed promotional placements that appear only when useful to visitors.

## Plain-language idea

Restaurant owners should be able to say:

> I want my restaurant offer to show to nearby people who are searching for food like mine at the right time.

RestaurantAIBot should then help place that offer in the right city, neighborhood, cuisine search, meal time, and travel/local context.

## Important naming rule

Do not call these aggressive browser popups.

Use better names:

- Smart Promo Cards
- Local Food Offers
- Nearby Restaurant Offers
- Timed Dining Offers
- Featured Local Picks

The visitor should never feel trapped, interrupted, or tricked.

## What we should build

### 1. Smart Promo Card

A small, clearly labeled restaurant offer card that can appear inside search results, city pages, cuisine pages, or travel pages.

Example label:

> Sponsored local offer

Example card content:

- Restaurant name
- Cuisine
- City / neighborhood
- Short offer
- Best time to show
- Directions button
- Call button
- Website button
- Clear disclosure

Do not show fake urgency.
Do not hide that it is paid.
Do not cover the whole screen by default.

### 2. Timed placement

Restaurants should choose when they want attention.

Examples:

- Lunch: 10:30 AM - 2:00 PM
- Dinner: 4:30 PM - 8:30 PM
- Late night: 9:00 PM - midnight
- Slow night: Monday - Thursday
- Weekend push: Friday - Sunday
- Event push: before local events, convention traffic, game days, tourism days

### 3. Area placement

Restaurants should choose where their offer can appear.

Simple levels:

- Nearby radius: 1 mile, 3 miles, 5 miles, 10 miles
- City placement
- Neighborhood placement
- Tourist area placement
- Airport / station / hotel area placement
- Cuisine page placement
- City + cuisine combination

Examples:

- Pizza in Chicago
- Tacos in Dallas
- Sushi near Tokyo Station
- Breakfast near hotel in Miami
- Seafood near beach area

### 4. Intent placement

The promo should appear only when the visitor intent matches.

Use these matching signals:

- cuisine
- city
- nearby search
- meal time
- budget
- traveler/local mode
- occasion
- dining style
- open-now context when available

Examples:

- A breakfast cafe should not appear for late-night sushi.
- A fine-dining restaurant should not appear for cheap lunch unless it has a real lunch offer.
- A tourist-area restaurant can appear for visitor searches but should not dominate local hidden-gem results.

### 5. Budget control

Small restaurants need simple limits.

Starter budgets:

- $5/day local test
- $10/day small push
- $25/day active campaign
- $50/day city/cuisine push
- custom monthly package later

Give owners control:

- daily cap
- weekly cap
- start date
- end date
- pause anytime
- cancel anytime
- no surprise spend

### 6. Pricing models

Start simple and fair.

Recommended order:

1. Flat monthly listing fee
2. Flat timed-promo package
3. Optional pay-per-lead later
4. Optional pay-per-click later only with strong fraud controls
5. Optional pay-per-order only if ordering integration exists later

Avoid complicated bidding at first.

Recommended early pricing:

- Starter Profile: $19/month
- Local Promo Card: $49/month
- Slow Night Push: $79/month
- City/Cuisine Feature: $99/month
- Website Starter Package: $299 setup + $39/month care
- Website Pro Package: $599 setup + $79/month care

Prices can change after testing.

## Product packages

### Package A — Free Restaurant Profile

Purpose: build supply and trust.

Includes:

- restaurant name
- cuisine
- city / neighborhood
- address link
- phone link
- website link
- short description
- unpaid profile label

Revenue: none directly.

Why offer it:

- creates more complete restaurant data
- builds owner relationships
- gives upgrade path

### Package B — Starter Profile Upgrade

Estimated price: $19/month.

Includes:

- improved restaurant description
- menu highlights
- best-for tags
- local-language visitor note
- owner-submitted offer area
- priority review for profile updates

No sponsored search boost unless included separately.

### Package C — Smart Promo Card

Estimated price: $49/month.

Includes:

- one small sponsored offer card
- limited city/cuisine placement
- time window targeting
- daily impression cap
- clear sponsored label
- simple performance report

Best for:

- lunch specials
- slow nights
- happy hour
- local events
- new restaurant awareness

### Package D — Slow Night Push

Estimated price: $79/month.

Includes:

- Monday-Thursday targeting
- dinner or lunch time window
- cuisine + area match
- offer copy help
- one Canva-ready promo image concept
- monthly refresh

### Package E — Traveler Visibility Package

Estimated price: $99/month.

Includes:

- city/travel page visibility
- hotel/airport/station-style search matching where useful
- local-language note
- tourist-friendly explanation
- directions-focused call-to-action

Best for:

- restaurants near hotels
- downtown restaurants
- restaurants near attractions
- destination restaurants

### Package F — Restaurant Website Starter

Estimated setup: $299.
Estimated care: $39/month.

Includes:

- one-page restaurant website
- mobile-first design
- menu highlights
- hours/contact section
- map link
- call button
- order/reservation link if owner already has one
- basic SEO title/description
- Cloudflare/GitHub static build

No online ordering built from scratch at first.
Link to existing Toast, Square, DoorDash Storefront, Chowly, OpenTable, Resy, or restaurant ordering page if the owner already uses one.

### Package G — Restaurant Website Pro

Estimated setup: $599.
Estimated care: $79/month.

Includes:

- homepage
- menu page
- catering/private events page
- gallery page
- contact/directions page
- offer page
- local SEO copy
- Google Business Profile post copy
- monthly text/photo update allowance

Optional later:

- multilingual pages
- email capture
- reservation widget
- online ordering link
- loyalty link

## Automated placement system

### Owner input fields

A future advertiser intake form should collect:

- owner name
- email
- restaurant name
- website
- phone
- address
- city
- neighborhood
- cuisine
- price level
- best meal times
- offer headline
- offer details
- start date
- end date
- preferred budget
- target area
- target customer: local, traveler, family, date night, lunch crowd, late night, etc.
- language needs
- existing reservation/order links

### Campaign object

Use a simple JSON structure later.

Fields:

- campaignId
- restaurantName
- city
- neighborhood
- cuisineTags
- targetKeywords
- targetMode: local, traveler, both
- targetMealTimes
- targetDays
- radiusMiles
- budgetDaily
- budgetMonthly
- maxImpressionsPerDay
- maxClicksPerDay
- startDate
- endDate
- offerHeadline
- offerBody
- ctaType: directions, call, website, reservation, order
- ctaUrl
- sponsoredLabel
- status: draft, active, paused, expired, rejected

### Placement rules

Show a promo only when enough matches are true.

Suggested rule:

- city match required OR near-me radius match required
- cuisine match preferred
- meal-time match preferred
- user mode match preferred
- budget match optional
- visitor frequency cap required
- sponsored label required

Never show more than:

- 1 sponsored card near the top of results
- 2 sponsored cards per result page
- 1 floating promo card per visitor session

Avoid full-screen popups except maybe an exit-intent or bottom-sheet offer later, and only on owner/advertiser pages or after testing.

### Frequency caps

Protect visitor trust.

Recommended caps:

- same campaign: once per visitor per day
- any sponsored card: no more than 3 per visitor per session
- floating bottom promo: once per visitor per session
- never block search results
- always include close button

### Fairness rules

Avoid making the app feel bought.

- Organic results stay useful.
- Paid offers are clearly labeled.
- Paid offers do not pretend to be best-rated.
- Paid offers do not overwrite real restaurant data.
- Sponsored cards should explain why they are shown.

Example:

> Sponsored local offer shown because you searched for tacos in Dallas around dinner time.

## Payment program plan

### Recommended provider

Use Stripe later because it supports cards, subscriptions, invoices, taxes, webhooks, and customer portal tools.

### Phase 1 payment approach

Start with manual invoices or Stripe Payment Links.

Do not build a full dashboard first.

Flow:

1. Owner submits interest form.
2. Gerry reviews the restaurant and offer.
3. Send Stripe Payment Link or invoice.
4. After payment, add campaign manually to demo/admin data.
5. Review results monthly.

Why this is best first:

- faster launch
- lower risk
- avoids building accounts early
- prevents bad/spam restaurants from buying placement instantly

### Phase 2 payment approach

Build self-serve payment later.

Needed pieces:

- owner account
- campaign builder
- Stripe Checkout
- Stripe Customer Portal
- webhook to activate/pause campaign
- admin review dashboard
- tax settings
- refund/cancellation policy
- terms update
- privacy update
- ad disclosure policy

Do not build Phase 2 until Phase 1 proves demand.

## Reporting for owners

Keep reports simple.

Show:

- impressions
- clicks
- direction clicks
- phone clicks
- website clicks
- reservation/order clicks if available
- top search terms that triggered the promo
- best day/time
- active budget used

Do not claim actual sales unless the restaurant provides verified sales or a real ordering/reservation integration provides it.

## Admin review system

All campaigns should be reviewed before going live.

Reject campaigns that include:

- fake discounts
- misleading urgency
- false health/allergy claims
- inappropriate content
- copied brand names
- illegal offers
- no real restaurant identity
- broken links
- unclear pricing

## Comparison notes from major platforms

### Google Ads / Maps

What they do well:

- intent-based local discovery
- directions/call/website actions
- strong map placement
- local engagement tracking

What RestaurantAIBot can improve:

- easier restaurant-specific setup
- simpler pricing
- clear meal-time targeting
- local/traveler intent matching
- less intimidating dashboard

### Yelp Ads

What they do well:

- prominent ad spots
- business-page visibility
- small daily budgets
- lead tracking

What RestaurantAIBot can improve:

- more transparent campaign rules
- fewer surprise charges
- better restaurant-owner trust
- no pressure-sales model
- clear sponsored labels

### Tripadvisor Ads

What they do well:

- traveler audience
- restaurant search audience
- location/cuisine targeting
- seasonal and date-based campaigns

What RestaurantAIBot can improve:

- combine traveler mode with AI search intent
- add local-language notes
- help restaurants near hotels, attractions, stations, convention centers, and airports

### OpenTable / Resy

What they do well:

- reservation intent
- dining-time context
- booking journey ads
- notify/waitlist behavior

What RestaurantAIBot can improve:

- not limited to reservation restaurants
- support casual restaurants, cafes, diners, food trucks, and takeout-heavy restaurants
- make the search easier for first-time visitors

### DoorDash-style ads

What they do well:

- sponsored listing placement
- pay-per-order model
- existing customer/lapsed customer targeting

What RestaurantAIBot can improve:

- discovery before delivery
- lower-cost awareness packages
- direct restaurant website support
- no heavy commission structure at the discovery stage

### Toast / Square / Chowly / direct-ordering platforms

What they do well:

- restaurant websites
- direct ordering
- POS integrations
- menu sync
- branded ordering pages

What RestaurantAIBot can improve:

- sell lightweight websites quickly
- link to existing ordering/reservation tools instead of replacing them
- add AI search visibility as a bonus
- focus on small restaurants that need affordable setup

## Recommended first MVP

Build this first, in this order:

1. Add a restaurant owner sales page for Smart Promo Cards and Website Starter.
2. Add an interest form or mailto lead form.
3. Add demo promo cards clearly labeled as demo/sponsored examples.
4. Add a JSON demo campaign file.
5. Add manual admin rules in documentation.
6. Add Stripe Payment Links manually outside the app after legal/privacy copy is ready.
7. Later add live paid campaign activation only after review.

## First public offer copy

Headline:

> Get seen when hungry people are searching nearby.

Subheadline:

> RestaurantAIBot helps restaurants show simple local offers by city, cuisine, meal time, and visitor intent.

Offer blocks:

- Smart Promo Cards
- Slow Night Push
- Traveler Visibility
- Restaurant Website Starter

Trust copy:

> Paid placements are labeled. Visitors stay in control. Restaurants set simple budgets. No surprise spend.

## Build safety locks

Do not add these yet:

- live ad auction
- self-serve payment dashboard
- hidden tracking scripts
- behavioral retargeting
- unreviewed owner uploads
- automatic campaign approval
- fake urgency countdowns
- full-screen blocking popups
- payment checkout code in GitHub
- private keys in GitHub

## Decision

This program should start as a manual-review, low-cost local promotion service.

The first winning product is not a complicated ad network.

The first winning product is:

> Affordable restaurant visibility at the right food moment, plus fast restaurant websites for owners who need help.
