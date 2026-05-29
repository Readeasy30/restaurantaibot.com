# CODEX-CURRENT-TASK.md

Last updated: 2026-05-29

## Repository

`Wholelychit/restaurantaibot.com`

## Current operating mode

Use ChatGPT 5.5 and Codex as the production workflow.

No local Git. No terminal Git. No VS Code requirement. No manual repo file creation or paste updates.

Workflow:

1. ChatGPT 5.5 manages the plan.
2. Codex performs repository work.
3. GitHub stores files and commits.
4. Cloudflare Pages publishes from GitHub when connected.

## Codex access status

The GitHub connector can see `Wholelychit/restaurantaibot.com` on default branch `main`, so safe commits can use that connector when file SHAs are available.

Local terminal Git is not required for Gerry. If local `git` is unavailable or `.git` is not visible in a Codex shell, keep working through Codex/GitHub access and do not ask Gerry to use terminal Git, VS Code, manual copy/paste, or manual GitHub edits.

## Current project focus

RestaurantAIBot is a restaurant discovery and future restaurant-marketing website.

Keep the site simple, fast, mobile-first, and useful for visitors looking for food and restaurant owners looking for visibility.

## Current safe queue

1. Preserve the current stack and deployment setup.
2. Review current pages and API/function files before changing production code.
3. Improve homepage, navigation, footer, and mobile experience.
4. Upgrade About, Contact, and Privacy pages from placeholders if needed.
5. Add restaurant owner / advertiser interest content without live ads, tracking, or payment setup.
6. Add city/cuisine SEO landing pages.
7. Improve API validation and error handling without exposing keys.
8. Add or improve titles, meta descriptions, canonical URLs, robots.txt, and sitemap.xml.
9. Add a manual test checklist.

## Stop points

Stop before:

- private keys or API keys
- real OpenAI or Google Maps key commits
- live ads or tracking
- payment setup
- user accounts
- upload systems
- public AI tools
- ordering integrations
- scraping systems that violate site terms
- framework migration
- major code deletion
- changes that could break current search/API behavior without a safe repair path

## Reporting

Report only after useful commits or a real blocker.
