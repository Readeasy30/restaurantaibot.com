# Cloudflare Live Domain Fix

Use this when `https://restaurantaibot.com/` or `https://www.restaurantaibot.com/` does not load after GitHub commits are correct.

## Current GitHub status

Repository work is active and commits are being pushed to:

`Wholelychit/restaurantaibot.com`

The preferred Cloudflare Pages setup is:

- Project: `restaurantaibot`
- Production branch: `main`
- Build command: blank
- Build output directory: `public`
- Root directory: blank

## Most likely live-site causes

If the live URL does not load, the problem is probably one of these Cloudflare items:

1. Cloudflare Pages project is not connected to `Wholelychit/restaurantaibot.com`.
2. Latest GitHub commit has not deployed successfully.
3. Build output directory is not set to `public`.
4. Custom domains are not active on the Pages project.
5. DNS records for `restaurantaibot.com` and `www.restaurantaibot.com` are missing or pointed to the wrong Pages target.

## Check 1: Pages deployments

Go to:

Cloudflare Dashboard -> Workers & Pages -> restaurantaibot -> Deployments

Confirm:

- Latest production deployment is successful.
- Production branch is `main`.
- Latest deployed commit is the newest GitHub commit or later than the known checkpoint in `PROJECT-STATUS.md`.

If deployment failed, open the failed deployment log and fix the first listed error.

## Check 2: Build settings

Go to:

Cloudflare Dashboard -> Workers & Pages -> restaurantaibot -> Settings -> Build & deployments

Set:

- Framework preset: None or Static HTML if available
- Build command: blank
- Build output directory: `public`
- Root directory: blank
- Production branch: `main`

After changing these, redeploy the latest production deployment.

## Check 3: Custom domains

Go to:

Cloudflare Dashboard -> Workers & Pages -> restaurantaibot -> Custom domains

Add or confirm both domains:

- `restaurantaibot.com`
- `www.restaurantaibot.com`

Both should show Active.

If either is missing, add it from this screen and follow Cloudflare's prompt to create or repair the DNS record.

## Check 4: DNS records

Go to:

Cloudflare Dashboard -> Websites -> restaurantaibot.com -> DNS -> Records

Expected records should point to the active Cloudflare Pages target for the project.

Typical pattern:

- `restaurantaibot.com` -> CNAME -> the project's `.pages.dev` target -> Proxied
- `www` -> CNAME -> the project's `.pages.dev` target -> Proxied

If Cloudflare creates special Pages DNS records automatically through Custom domains, use Cloudflare's generated records rather than guessing.

Do not point the domain to GitHub Pages unless this project is intentionally moved away from Cloudflare Pages.

## Check 5: Environment variables

Go to:

Cloudflare Dashboard -> Workers & Pages -> restaurantaibot -> Settings -> Environment variables

These names may exist when live search/map features are ready:

- `OPENAI_API_KEY`
- `GOOGLE_MAPS_API_KEY`

Do not commit these values to GitHub. Do not paste the values into ChatGPT.

The site should still show safe demo search behavior if keys are missing, but live maps and real Google Places results need the Cloudflare environment variables configured.

## Fast diagnosis by symptom

### Browser says domain cannot be found

Likely DNS/custom domain problem.

Fix Custom domains and DNS records first.

### Browser loads a Cloudflare Pages 404

Likely wrong output directory or missing fallback.

Set output directory to `public`, then redeploy.

### Browser loads the homepage but search fails

Likely missing environment variables or Pages Functions issue.

Check `/api/config`, `/api/search`, and Cloudflare deployment logs.

### Browser loads old content

Likely Cloudflare has not deployed the latest GitHub commit yet.

Check Deployments and redeploy latest production deployment.

## Do not change without direct approval

- Do not add live ads.
- Do not add tracking scripts.
- Do not add payments.
- Do not add affiliate links.
- Do not add private keys to GitHub.
- Do not replace Cloudflare Pages with GitHub Actions deployment.
