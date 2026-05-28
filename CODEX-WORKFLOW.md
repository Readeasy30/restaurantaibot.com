# Codex Workflow

Last updated: 2026-05-28

## Purpose

Codex is the main workflow for routine RestaurantAIBot repository editing.

RestaurantAIBot must stay useful, mobile-first, Cloudflare-ready, and safe for production.

## Current Stack

RestaurantAIBot uses:

- Cloudflare Pages for hosting
- Cloudflare Pages Functions for API routes
- OpenAI for food-intent parsing
- Google Places / Maps for restaurant results
- simple HTML, CSS, and JavaScript

Do not convert this project to React, Vite, Next.js, TypeScript, npm, or any build tool unless Gerry clearly requests a full rebuild later.

## Why Codex Is Primary

Codex should handle routine repo work directly because it can read the repo, make safe file edits, and commit useful changes without making Gerry manually paste, create, replace, or update files.

The ChatGPT GitHub connector may show internal write-action labels like `create_file` or `update_file`. Those labels can be confusing. Use that connector mainly for small reads, checks, reviews, or emergency single-file edits when Codex is unavailable.

## Required Read Order

Before editing, read these files when they exist:

1. `README.md`
2. `AGENTS.md`
3. `AGENT-INSTRUCTIONS.md`
4. `LOCKED-CHECKPOINT.md`
5. `FILE-MANAGEMENT.md`
6. `PROJECT-STATUS.md`
7. `CODEX-WORKFLOW.md`

## Safe Work Allowed

Codex may directly handle:

- Markdown documentation updates
- homepage copy improvements
- support page improvements
- footer and navigation fixes
- SEO metadata checks
- sitemap and robots.txt updates
- accessibility notes and test checklists
- simple CSS improvements
- small JavaScript repairs that preserve current behavior
- city and cuisine SEO landing pages
- restaurant owner / advertiser planning pages
- API validation and error-handling improvements that do not expose keys
- checkpoint and project-status updates

## Do Not Change Without Direct Approval

Do not do these without direct approval:

- framework conversion
- React, Vite, Next.js, TypeScript, npm, or build-tool migration
- major deletion of working site code
- payment setup
- live ads
- live tracking scripts
- accounts or logins
- private keys or API tokens
- committing real OpenAI or Google Maps keys
- replacing Cloudflare Pages auto-deploy with GitHub Actions
- breaking the current search API or Maps setup

## RestaurantAIBot Product Rules

Keep the site fast, practical, local, and mobile-first.

Restaurant search should help visitors find food by city, craving, mood, budget, dining style, or nearby location.

Restaurant owner and advertiser pages should be planning/inquiry pages only until payments, ads, tracking, and privacy rules are intentionally configured.

## Current Safe Queue

1. Upgrade About, Contact, and Privacy pages from placeholder pages into more useful pages.
2. Add an advertising / restaurant owner interest page without adding live ad code or payment setup.
3. Add city and cuisine SEO landing pages.
4. Improve API validation and error handling.
5. Add a manual test checklist.
6. Remove `.chatgpt-connector-test.md` after more successful production commits if desired.

## Reporting Rule

Commit useful safe changes. Report after several useful commits or when a real blocker appears.

Record blockers in `PROJECT-STATUS.md` instead of stopping early.
