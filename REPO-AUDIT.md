# Repository Audit

Last updated: 2026-05-29

## Purpose

Record lightweight repo-level checks completed after the current RestaurantAIBot production hardening batches.

## Audit checks completed

The GitHub repository was searched for common leftover problems:

- old broken city path references: `/cities.html`
- brittle scripted submit behavior: `button.click`
- obvious Google API key pattern: `AIza`
- obvious secret patterns: `OPENAI_API_KEY`, `sk-`, `GOOGLE_MAPS_API_KEY`, `password`, `secret`, `token`
- leftover work markers: `TODO`, `FIXME`, `HACK`, `XXX`, `broken`

## Current findings

No actionable repo-search matches were found for those checks at the time of this audit.

## Important limits

This audit does not replace a real browser test.

The live site still needs the manual/browser test pass in `MANUAL-TEST-CHECKLIST.md`, especially after Cloudflare deploys:

- homepage render
- Google Maps load/fallback behavior
- search API behavior
- near-me and city search behavior
- quick search buttons
- `/?q=` links
- redirects
- custom 404 page
- response headers
- mobile layout

## Safety confirmation

No private keys, live ads, live tracking scripts, payment setup, user accounts, upload systems, ordering integrations, framework rebuilds, or major code deletion were added during this audit.
