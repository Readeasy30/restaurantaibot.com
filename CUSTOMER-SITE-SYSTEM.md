# RestaurantAIBot customer site system

Last updated: 2026-06-18

## Goal

RestaurantAIBot sells simple restaurant websites with as little manual work from Gerry as possible.

The first version is not a dashboard or account system. It is a guided service funnel:

1. Restaurant owner reads the offer.
2. Restaurant owner sends required details.
3. A hosted processor link is sent after review.
4. ChatGPT or Claude generates the website files from the template.
5. GitHub stores the files.
6. Cloudflare Pages publishes the site.

## Offer ladder

- Restaurant Website Starter: $299 setup plus $49/month.
- Restaurant Website Pro: $599 setup plus $99/month.
- Add-on Smart Promo Card: $50/month.
- Add-on Traveler Visibility: $100/month.

## No-low-work rule

Gerry should not hand-build every site.

Use this repeatable flow:

1. Copy the customer intake into a new build task.
2. Generate the customer site from the standard template.
3. Commit the generated files to the customer repo or customer folder.
4. Connect the repo/folder to Cloudflare Pages.
5. Send the owner the live link for review.

## Customer site package

Each customer site should include:

- `index.html`
- `menu.html`
- `catering.html`
- `gallery.html`
- `contact.html`
- `privacy.html`
- `terms.html`
- `css/style.css`
- `robots.txt`
- `sitemap.xml`
- `llms.txt`
- `README.md`
- `STATUS.md`

## Required customer facts

Do not invent restaurant facts.

Required:

- Restaurant name
- Owner/contact name
- Owner email
- Phone
- Address
- City and neighborhood
- Cuisine
- Hours
- Menu highlights
- Ordering link, reservation link, or both if available
- Social links if available
- Photos available: yes/no
- Preferred style: simple, cozy, upscale, family, fast casual, modern, local

## Photo rule

Use owner-provided photos only for a real customer website.

If photos are not provided, use simple design, food icons, color blocks, or clearly labeled placeholder areas.

## Money rule

Do not start a customer build until the owner has been manually reviewed and the service terms are clear.

Do not collect card numbers on RestaurantAIBot.com.

## Build prompt

Use this when a customer is ready:

```text
Build a restaurant customer website from the RestaurantAIBot template.
Keep it plain HTML, CSS, and JavaScript.
Use the customer facts exactly as supplied.
Do not invent prices, menu items, hours, photos, claims, awards, reviews, or guarantees.
Create mobile-first files:
index.html, menu.html, catering.html, gallery.html, contact.html, privacy.html, terms.html, css/style.css, robots.txt, sitemap.xml, llms.txt, README.md, STATUS.md.
Use simple 7th-9th grade language.
Make call, directions, ordering, and reservation buttons obvious.
Add basic local SEO and AI crawler text.
```

## First automation stage

The first stage is semi-automated and safe:

- No login system.
- No dashboard.
- No owner uploads.
- No live ad network.
- No custom payment code.
- No private keys in GitHub.

## Later automation stage

After sales are proven, consider:

- Hosted form service.
- Processor payment links.
- Cloudflare Pages template repos.
- One repo per customer site.
- Optional email automation.
- Optional client update request form.

Do not add these until approved and tested.
