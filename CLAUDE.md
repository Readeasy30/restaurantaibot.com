# RestaurantAIBot — Project Context for Claude

## Project Overview
- **Site:** RestaurantAIBot.com — AI-powered chatbot platform for restaurants
- **Tech Stack:** Node.js (`server.js`) + HTML/CSS + Cloudflare Pages Functions (`functions/`)
- **Deployment:** Cloudflare Pages with Functions, connected to this GitHub repo (`main` auto-deploys)
- **Domain:** restaurantaibot.com (Cloudflare managed)

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
- `_redirects` — Cloudflare Pages URL redirects (4,323 bytes — many routes)
- `robots.txt` — SEO crawler rules

## Commands
- **Local dev:** `node server.js` or `npm start`
- **Install:** `npm install`
- **Deploy:** Push to `main` — Cloudflare Pages auto-deploys

## Environment Variables
See `.env.example` for required variables. Set secrets via Cloudflare Pages dashboard or `wrangler secret put`.

## Git Workflow
- `main` branch auto-deploys to Cloudflare Pages
- Feature branches: `feature/branch-name` or `claude/...`
- Follow Conventional Commits: `feat:`, `fix:`, `chore:`, `docs:`

## Important Rules
- Cloudflare Pages Functions live in `functions/` — each file is a serverless endpoint
- Never commit real API keys or secrets — use `.env` locally, Cloudflare secrets in production
- The `_redirects` file is large and handles many bot/widget routes — review before modifying
