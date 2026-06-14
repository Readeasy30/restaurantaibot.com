# World-Class Restaurant App Plan

Last updated: 2026-06-14

## Big goal

Build RestaurantAIBot into a world-class restaurant discovery app for locals and travelers.

The app should help a visitor answer one simple question quickly:

> Where should I eat right now, tonight, this weekend, or during my trip?

RestaurantAIBot should combine AI intent parsing, live restaurant/map data, useful travel context, simple local-language support, and clear action buttons.

## Core positioning

RestaurantAIBot is not just a restaurant directory.

It should become:

- an AI food finder
- a travel dining helper
- a local hidden-gem finder
- a plain-language restaurant search assistant
- a future restaurant owner marketing platform

Use this plain visitor promise:

> Ask what you want. Get restaurant ideas that fit your taste, budget, mood, place, and language.

## Primary audiences

### 1. Locals

Locals want fast answers without scrolling through too many listings.

Important local use cases:

- lunch near work
- dinner tonight
- family-friendly food
- cheap eats
- outdoor dining
- date night
- happy hour
- late-night food
- vegan, gluten-free, halal, kosher, seafood, tacos, sushi, pizza, breakfast, coffee
- hidden gems away from chains
- places locals actually like

### 2. Travelers

Travelers need confidence fast because they do not know the city.

Important traveler use cases:

- best food near hotel
- restaurants near tourist attractions
- local favorites, not tourist traps
- quick lunch while sightseeing
- dinner reservation in a new city
- food near airport, stadium, convention center, museum, beach, theater, or downtown area
- local-language help when traveling internationally
- translation of cuisine, menu style, restaurant notes, and search terms

### 3. Restaurant owners later

Do not build live paid ads, tracking, dashboards, or payment systems yet.

For now, owner pages should collect interest only.

Future owner use cases:

- claim or improve restaurant profile
- update photos, menu highlights, hours, and special features
- advertise slow-night promotions
- show catering, private events, loyalty offers, and local-language traveler notes
- improve AI search visibility

## Best ideas to borrow and improve

### Google Maps

Borrow:

- map-first restaurant discovery
- directions
- location-based search
- reviews, photos, hours, popular times, and route context

Improve:

- make the search more conversational
- reduce clutter
- explain why a place fits the visitor
- add traveler-friendly language and mood filters

### Yelp

Borrow:

- review-heavy local discovery
- filters for cuisine, price, open now, delivery, takeout, and service features
- strong local business pages

Improve:

- avoid review overload
- summarize what matters in plain language
- focus on fit: budget, mood, food craving, group type, and occasion

### TripAdvisor

Borrow:

- traveler confidence
- destination pages
- tourist-friendly city and attraction searches
- global restaurant usefulness

Improve:

- make results feel fresher and more local
- separate tourist-safe picks from local hidden gems
- support local-language and English explanations side by side

### OpenTable / Resy

Borrow:

- reservation action buttons
- table availability concepts
- waitlist and notify ideas
- date, time, party size, and dining-style filters

Improve:

- do not hide available places behind confusing search flows
- show alternatives when a preferred place is unavailable
- make "available now," "book ahead," and "notify me later" easy to understand

### DoorDash / Uber Eats style marketplaces

Borrow:

- fast decision cards
- cuisine categories
- clear delivery/takeout/dine-in separation
- photos and popular items

Improve:

- keep RestaurantAIBot focused on discovery first
- do not become a delivery clone
- send visitors to maps, restaurant sites, reservation links, or ordering partners only when intentionally approved later

### Modern AI food finders

Borrow:

- natural-language search
- personalized recommendations
- mood and occasion matching
- conversational refinement

Improve:

- keep answers grounded in live restaurant/map data
- show source-style details like distance, rating, price, cuisine, open status, and address when available
- avoid pretending uncertain information is guaranteed

## Differentiator

RestaurantAIBot should win by being simpler, clearer, and more helpful than crowded restaurant apps.

The key product difference:

> AI understands the food request. Maps data finds the places. Plain language explains the fit. Local language helps the visitor feel comfortable.

## World-class feature set

### Phase 1 — Better discovery experience

Build first.

- Improve homepage search examples for locals and travelers.
- Add search chips: Near Me, Open Now, Cheap Eats, Date Night, Family Friendly, Local Favorite, Tourist Friendly, Outdoor Dining, Breakfast, Coffee, Late Night.
- Add traveler search examples: "best tacos near my hotel in Dallas," "romantic dinner in Paris," "quick lunch near Tokyo Station," "local seafood in Miami."
- Add result labels: Best for families, Good for travelers, Local-style pick, Budget-friendly, Date-night option, Quick bite, Coffee stop.
- Add plain explanation to each result: "Why this may fit."
- Add direct action buttons: Directions, Call, Website, Save Search, New Search.
- Keep booking/order buttons inactive unless the live integration is intentionally approved.

### Phase 2 — Local and traveler modes

Add two simple modes on the homepage:

1. I live here
2. I am visiting

Local mode should prioritize:

- nearby food
- repeat visits
- value
- hidden gems
- quick decisions
- neighborhood pages

Traveler mode should prioritize:

- city and landmark searches
- popular local foods
- confidence and safety
- transport-friendly areas
- language help
- hotel/airport/station searches

### Phase 3 — Local-language layer

Start simple. Do not overbuild.

- Detect browser language when possible.
- Add a visible language selector.
- Translate key interface labels first.
- Support high-value languages first: English, Spanish, French, Japanese, Italian, German, Portuguese, Chinese, Korean.
- For international city pages, add local-language search examples.
- Show cuisine explanations in visitor-friendly wording.
- Add "show in local language" and "show in English" toggle for travel pages later.

Avoid risky claims:

- Do not guarantee allergy safety.
- Do not guarantee menu availability.
- Do not guarantee current hours unless returned by live source.
- Tell visitors to confirm details before visiting, booking, ordering, or paying.

### Phase 4 — World city and cuisine SEO system

Build pages that help people search faster.

Page families:

- city pages: restaurants in Paris, Tokyo, London, Miami, Chicago, Las Vegas, Dallas, New York, Toronto, etc.
- cuisine pages: pizza, tacos, sushi, seafood, vegan, breakfast, coffee, dessert, burgers, barbecue, ramen, Thai, Indian, Italian, Mexican.
- occasion pages: date night, family dinner, business lunch, outdoor dining, late night, cheap eats, brunch, fine dining, quick lunch.
- traveler pages: near airport, near hotel, near train station, near convention center, near stadium, near tourist attractions.

Each page should:

- explain the search in simple language
- include quick-start buttons
- link back to the main search
- avoid fake lists unless using live data
- avoid stale claims

### Phase 5 — Restaurant profile pages

Create demo-safe profile pages first.

Profile cards should include:

- restaurant name
- cuisine
- neighborhood/city
- short plain-language description
- best for tags
- price level if known
- address if known
- directions link
- call link if known
- website link if known
- owner note area for future claim system
- local-language visitor note

Do not add claimed/paid/sponsored labels unless a real business system exists.

### Phase 6 — AI guide refinement

The AI should act like a helpful local food assistant.

It should ask fewer questions and make smart assumptions.

Useful prompt examples:

- "Find me a quiet Italian restaurant under $30 near downtown Chicago."
- "I am visiting Tokyo. I want local food near my hotel, not tourist traps."
- "Best family dinner in Dallas with parking."
- "Cheap lunch near the Louvre."
- "Sushi near me open now."
- "I need vegetarian food near Times Square."

The AI should return structured intent:

- cuisine
- city or location
- near-me status
- budget
- occasion
- dining style
- traveler/local mode
- language preference
- needed warnings

### Phase 7 — Future monetization, later only

Do not activate yet.

Possible revenue paths:

- restaurant owner profile upgrades
- local promotion placements
- slow-night promotion pages
- city sponsorships
- lead generation for restaurant marketing services
- reservation/ordering affiliate partnerships where legal and approved
- restaurant website/AI marketing services

Before monetization, add:

- clear ad policy
- sponsored placement rules
- disclosure language
- payment/legal setup
- owner onboarding flow
- fraud review
- analytics/privacy setup

## Build rules

Keep current stack:

- Cloudflare Pages
- Cloudflare Pages Functions
- simple HTML, CSS, JavaScript
- Google Places/Maps when configured
- OpenAI parsing when configured
- no React
- no Vite
- no Node build system
- no private keys in GitHub
- no scraping
- no live paid ads yet
- no tracking scripts yet
- no user accounts yet
- no upload system yet
- no payment system yet

## Current next build batch

Recommended next safe files to improve:

1. `public/index.html`
   - strengthen hero copy
   - add local/traveler mode language
   - add better quick search examples
   - add local-language promise without claiming full translation is done

2. `public/quick-searches.js`
   - add better quick search chips
   - support local/traveler query examples
   - improve search tips

3. `public/restaurant-cities.html`
   - add traveler-focused city search paths
   - add local-language city prompts

4. `public/popular-searches.html`
   - organize by cuisine, occasion, budget, traveler need, and dining style

5. `UX-GOALS.md`
   - add local/traveler modes and local-language layer as locked goals

6. `PROJECT-STATUS.md`
   - add this plan to the current safe queue after the file is reviewed

## Success standard

RestaurantAIBot is successful when a first-time visitor can land on the homepage and, within 10 seconds, understand:

1. what the app does
2. how to search
3. whether it works for locals or travelers
4. how it handles nearby and city searches
5. that restaurant details should be confirmed before visiting
6. how to take the next action

The first version does not need to do everything.

It needs to feel useful, clear, fast, mobile-friendly, trustworthy, and expandable.
