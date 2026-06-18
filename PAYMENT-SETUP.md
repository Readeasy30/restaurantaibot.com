# RestaurantAIBot payment setup

Last updated: 2026-06-18

## Goal

Build a safe owner-payment path for RestaurantAIBot without adding monthly software overhead.

## Rules

- Minimum paid item: $9.00.
- Do not collect card numbers on RestaurantAIBot.com.
- Use hosted processor pages first.
- Keep private keys out of GitHub.
- Store secrets only in Cloudflare Variables and Secrets.
- Keep restaurant owner services manually reviewed before activation.

## Recommended order

1. Stripe hosted links or hosted checkout for the first launch.
2. Helcim hosted payment pages as a US/CAN backup.
3. GoCardless for ACH/direct debit after recurring services are proven.
4. Wise Business for manual international invoices.
5. Mollie later if a Europe-first setup is needed.

## Starting offers

- Restaurant Visibility Check: $9 one time.
- Starter Profile Upgrade: $19/month.
- Smart Promo Card: $49/month.
- Traveler Visibility: $99/month.
- Restaurant Website Starter: $299 setup plus $39/month.
- Restaurant Website Pro: $599 setup plus $79/month.

## Cloudflare setup checklist

1. Open Cloudflare dashboard.
2. Open Workers & Pages.
3. Open the RestaurantAIBot Pages project.
4. Open Settings.
5. Open Variables and Secrets.
6. Add encrypted secrets only after the payment account is approved.
7. Redeploy the site after variables are saved.

## GitHub rule

Do not commit private keys, payment tokens, webhook signing secrets, bank details, or processor login details.

## Launch rule

Live owner payments should not activate until terms, privacy, refund language, tax settings, and processor identity checks are complete.
