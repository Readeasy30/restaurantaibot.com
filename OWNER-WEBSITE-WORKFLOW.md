# Restaurant owner website workflow

Last updated: 2026-06-18

## Goal

Use a repeatable workflow so Gerry does not hand-build every restaurant website.

## Workflow

1. Owner sends restaurant facts.
2. Facts are reviewed for missing details.
3. Site is generated from the standard restaurant template.
4. Site files are committed to GitHub.
5. Cloudflare Pages publishes the site.
6. Owner reviews the live preview.
7. One combined correction list is handled.
8. Final version is locked.
9. Later changes go into a monthly update queue.

## Standard site files

- index.html
- menu.html
- catering.html
- gallery.html
- contact.html
- privacy.html
- terms.html
- css/style.css
- robots.txt
- sitemap.xml
- llms.txt
- README.md
- STATUS.md

## Build rules

- Keep customer sites plain HTML, CSS, and JavaScript.
- Do not invent restaurant facts.
- Use owner-provided photos only.
- Link to existing ordering and reservation tools.
- Keep pages mobile-first.
- Use simple language.
- Add local SEO and question-answer sections.
- Add a disclaimer that details can change.

## Review checklist

Before launch, check:

- Restaurant name is correct.
- Phone button works.
- Directions link works.
- Hours are present.
- Menu highlights are present.
- Ordering or reservation link works if supplied.
- Navigation links work.
- Mobile layout is readable.
- Privacy, terms, robots, sitemap, and llms files exist.

## Customer repo naming

Use one repo per approved customer site when possible.

Recommended pattern:

`restaurant-name-city-site`

## Repeatable build command for ChatGPT or Claude

Build this customer restaurant site from the RestaurantAIBot template. Use only supplied facts. Keep it plain HTML, CSS, and JavaScript. Create the standard files. Do not invent menu items, prices, hours, awards, reviews, or photos. Make the site mobile-first, simple, and SEO-ready.
