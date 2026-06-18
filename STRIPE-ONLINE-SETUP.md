# Stripe online setup

Last updated: 2026-06-18

## Goal

No Stripe secret key should be stored on Gerry's computer.

No Stripe secret key should be stored in GitHub files.

Use GitHub Actions Secrets plus a manual GitHub Actions workflow.

## Files added

- `.github/workflows/create-stripe-payment-links.yml`
- `tools/create_stripe_payment_links.py`

## Where the Stripe secret key goes

GitHub repository secret:

`STRIPE_SECRET_KEY`

Do not put the value in a repo file.

Do not paste the value into ChatGPT.

## How to add the secret in GitHub

1. Open repo: `Readeasy30/restaurantaibot.com`
2. Click `Settings`
3. Click `Secrets and variables`
4. Click `Actions`
5. Click `New repository secret`
6. Name:

`STRIPE_SECRET_KEY`

7. Value:

Paste the Stripe secret key from Stripe.

8. Click `Add secret`

## How to run online

1. Open repo: `Readeasy30/restaurantaibot.com`
2. Click `Actions`
3. Click workflow: `Create Stripe Payment Links`
4. Click `Run workflow`
5. Type:

`CREATE`

6. Click the green `Run workflow` button.

## What happens

GitHub Actions runs the Stripe link generator in GitHub's cloud.

The secret key is read from GitHub Actions Secrets.

The workflow creates Stripe products, prices, and Payment Links.

The workflow does not print Payment Link URLs in the public log.

## Where to find the links after running

Open Stripe Dashboard.

Go to:

`Payments > Payment Links`

Copy the public links there.

Only share links that start with:

`https://buy.stripe.com/`

## What not to share

Do not share:

- API keys
- Secret keys
- Webhook secrets
- Bank info
- Identity info
- Stripe login info

## Important warning

Running the workflow more than once can create duplicate Stripe products and Payment Links.

Run it once first.

Then check Stripe Dashboard before running it again.
