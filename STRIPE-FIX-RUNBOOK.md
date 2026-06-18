# Stripe fix runbook

Last updated: 2026-06-18

## Goal

Fix Stripe by avoiding manual dashboard confusion.

Use the Stripe API to create all RestaurantAIBot products, prices, and Payment Links from one local script.

## What was fixed

Added:

`tools/create_stripe_payment_links.py`

This script creates:

1. Restaurant Visibility Check — $10 one time
2. Starter Profile — $20/month
3. Smart Promo Card — $50/month
4. Traveler Visibility — $100/month
5. Website Starter Setup — $309 one time
6. Website Starter Support — $40/month
7. Website Pro Setup — $619 one time
8. Website Pro Support — $82/month

## Safety rule

Do not paste Stripe secret keys into ChatGPT or GitHub.

The script reads the secret key only from your local computer environment variable:

`STRIPE_SECRET_KEY`

## Windows PowerShell steps

Open PowerShell in the repo folder.

Set the key for this PowerShell window only:

```powershell
$env:STRIPE_SECRET_KEY="sk_test_or_sk_live_goes_here"
```

Run the script:

```powershell
python tools/create_stripe_payment_links.py
```

When finished, the script creates:

`stripe-payment-links-output.txt`

This output file contains only public Payment Links.

## Git Bash steps

Open Git Bash in the repo folder.

Set the key for this terminal session only:

```bash
export STRIPE_SECRET_KEY="sk_test_or_sk_live_goes_here"
```

Run the script:

```bash
python tools/create_stripe_payment_links.py
```

## What to paste back into ChatGPT

Paste only the public links from:

`stripe-payment-links-output.txt`

The links should start with:

`https://buy.stripe.com/`

## What not to paste

Do not paste:

- `sk_test_...`
- `sk_live_...`
- API keys
- webhook secrets
- bank information
- Stripe login details
- identity details

## After links are created

Add the public $10 Visibility Check link to public website pages.

Keep higher-priced links private until a restaurant owner completes intake and is manually reviewed.

## Public first

- Restaurant Visibility Check — public

## Private after review

- Starter Profile
- Smart Promo Card
- Traveler Visibility
- Website Starter Setup
- Website Starter Support
- Website Pro Setup
- Website Pro Support

## Why this is the corrected path

Stripe does not work like Cloudflare AI setup.

Stripe Payment Links can be created by API.

This lets RestaurantAIBot avoid dashboard confusion while still keeping secrets out of GitHub and ChatGPT.
