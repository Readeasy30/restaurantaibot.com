# Photo Ambience Rules

Last updated: 2026-06-14

## Purpose

Photos and visuals should make RestaurantAIBot feel warmer, more appetizing, and more trustworthy while live map setup is being completed.

The goal is ambience, not fake restaurant proof.

## Current implementation

Added local ambience image assets:

- `public/images/restaurant-ambience-hero.svg`
- `public/images/promo-card-food.svg`

Updated:

- `public/quick-searches.js`

Current homepage behavior:

- Adds an ambience card to the chat/search area.
- Adds a food promo image to Today’s Feature demo card.
- Enhances the map fallback area when live maps are not connected.
- Replaces remote Unsplash result images with local ambience images.
- Adds clear wording that the images are ambience only, not verified restaurant photos.

## Rules

Do not use random restaurant photos in a way that suggests they belong to a real restaurant.

Do not show a real restaurant’s food, storefront, staff, menu, or dining room unless:

1. The restaurant owner provided the photo, or
2. The image license clearly allows the use, and
3. The page does not imply false endorsement, ranking, verification, or ownership.

## Safe image types

Safe first-stage image types:

- generic ambience visuals
- local SVG or generated illustrations
- food mood images that are clearly not restaurant-specific
- city/cuisine mood art
- owner-provided restaurant images later

## Required wording

Use wording like:

> Ambience image only. Not a verified restaurant photo.

Use confirmation reminders like:

> Confirm hours, menus, prices, offers, allergies, and availability directly with the restaurant.

## Future image expansion

Possible future image files:

- `public/images/pizza-chicago-ambience.svg`
- `public/images/sushi-tokyo-ambience.svg`
- `public/images/coffee-london-ambience.svg`
- `public/images/paris-dinner-ambience.svg`
- `public/images/vegas-cheap-eats-ambience.svg`
- `public/images/owner-website-ambience.svg`

## Safety lock

No image should create a fake review, fake restaurant listing, fake paid placement, fake menu item, fake owner approval, or fake verified availability.
