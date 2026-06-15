# CLAUDE.md

GitHub is the source of truth.

## Startup

1. Read CLAUDE.md.
2. Read STATUS.md if present.
3. Inspect the repository files.
4. Trust the live repo over old notes.
5. Report mismatches before editing.

## Rules

- Work from the repo files.
- Keep replies short.
- Avoid repeated questions.
- Do not redesign unless Gerry asks.
- Preserve current stack unless Gerry asks for a change.
- Keep pages mobile-first, fast, and simple.

## Report

After work, report the repo, files changed, commit, next check, and blockers.

---

# RestaurantAIBot — Project Context for Claude

## Project Overview
- Site: RestaurantAIBot.com — AI-powered chatbot platform for restaurants
- Tech Stack: Node.js (`server.js`) + HTML/CSS + Cloudflare Pages Functions (`functions/`)
- Deployment: Cloudflare Pages with Functions, connected to this GitHub repo (`main` auto-deploys)
- Domain: restaurantaibot.com (Cloudflare managed)

## Project Structure
- `index.html` — homepage / landing page
- `server.js` — Node.js server (local dev)
- `package.json` — dependencies
- `.env.example` — environment variable template
- `css/` — stylesheets
- `public/` — static assets
- `functions/` — Cloudflare Pages Functions (serverless)
- `tools/` — utility/dev tools
- `_headers` — Cloudflare Pages security headers
- `_redirects` — Cloudflare Pages URL redirects
- `robots.txt` — SEO crawler rules

## Commands
- Local dev: `node server.js` or `npm start`
- Install: `npm install`
- Deploy: push to `main`; Cloudflare Pages auto-deploys

## Important Rules
- Cloudflare Pages Functions live in `functions/`.
- Never commit real API keys or secrets.
- Review `_redirects` before modifying.
