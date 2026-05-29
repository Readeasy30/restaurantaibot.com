# CODEX-WORKFLOW.md

Last updated: 2026-05-29

## Purpose

Codex is the main workflow for routine RestaurantAIBot repository editing.

RestaurantAIBot must stay useful, mobile-first, Cloudflare-ready, and safe for production.

## Current stack

RestaurantAIBot may use:

- Cloudflare Pages for hosting
- Cloudflare Pages Functions for API routes when present
- OpenAI for food-intent parsing when configured
- Google Places / Maps for restaurant results when configured
- simple HTML, CSS, and JavaScript

Do not convert this project to React, Vite, Next.js, TypeScript, npm, or any build tool unless Gerry clearly requests a full rebuild later.

## Operating workflow

Use ChatGPT 5.5 and Codex as the production workflow.

No local Git. No terminal Git. No VS Code requirement. No manual file creation, replacement, or paste updates.

Workflow:

1. ChatGPT 5.5 manages the plan.
2. Codex performs repository work.
3. GitHub stores files and commits.
4. Cloudflare Pages publishes from GitHub when connected.

## Main rule

Codex should handle repository file work directly.

Do not ask Gerry to paste, create, replace, or manually update repo files.

Work in useful batches. Report only after several commits or a real blocker.

## Use Codex for

- multi-file updates
- repo audits
- HTML/CSS/JS fixes
- README/status/workflow files
- sitemap.xml and robots.txt
- SEO metadata
- navigation/footer cleanup
- safe content pages
- project queue continuation
- API validation and error-handling improvements that do not expose keys

## Use ChatGPT GitHub connector for

- small direct file updates
- repo checks
- status verification
- emergency fixes
- when Codex is awkward or blocked

Internal write-action labels like `create_file` or `update_file` mean the AI is requesting permission to create or update a file. They are not instructions for Gerry to manually create files.

## Required read order

Before editing, read these files when they exist:

1. `README.md`
2. `AGENTS.md`
3. `CODEX-WORKFLOW.md`
4. `CODEX-CURRENT-TASK.md`
5. `PROJECT-STATUS.md`
6. `CHANGELOG.md`
7. `AGENT-INSTRUCTIONS.md`
8. `LOCKED-CHECKPOINT.md`
9. `FILE-MANAGEMENT.md`

## Safe work allowed

Codex may directly handle:

- README updates
- AGENTS.md updates
- CODEX-WORKFLOW.md updates
- CODEX-CURRENT-TASK.md updates
- PROJECT-STATUS.md updates
- CHANGELOG.md updates
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

## Do not change without direct approval

Do not do these without direct approval:

- framework conversion
- React, Vite, Next.js, TypeScript, npm, or build-tool migration
- major deletion of working site code
- payment setup
- live ads
- live tracking scripts
- accounts or logins
- upload systems
- public AI tools
- private keys or API tokens
- committing real OpenAI or Google Maps keys
- replacing Cloudflare Pages auto-deploy with GitHub Actions
- breaking the current search API or Maps setup
- automated ordering integrations
- scraping systems that violate site terms

## RestaurantAIBot product rules

Keep the site fast, practical, local, and mobile-first.

Restaurant search should help visitors find food by city, craving, mood, budget, dining style, or nearby location.

Restaurant owner and advertiser pages should be planning/inquiry pages only until payments, ads, tracking, and privacy rules are intentionally configured.

## Cloudflare Pages

Cloudflare only connects to GitHub and publishes.

Recommended setup:

- Production branch: main
- Build command: blank unless the current repo requires otherwise
- Output directory: .
- No manual Cloudflare file uploads

## Current safe queue

1. Upgrade About, Contact, and Privacy pages from placeholder pages into more useful pages.
2. Add an advertising / restaurant owner interest page without adding live ad code or payment setup.
3. Add city and cuisine SEO landing pages.
4. Improve API validation and error handling without exposing keys.
5. Add a manual test checklist.
6. Remove `.chatgpt-connector-test.md` after more successful production commits if desired.

## If blocked

Record the blocker in `PROJECT-STATUS.md` if possible.

Move to the next safe task or next repository. Do not ask Gerry to do manual file work.

## Reporting rule

Commit useful safe changes. Report after several useful commits or when a real blocker appears.
