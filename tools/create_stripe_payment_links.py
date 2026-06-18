#!/usr/bin/env python3
"""
Create RestaurantAIBot Stripe products, prices, and Payment Links.

Safety:
- This script does not contain a Stripe secret key.
- Do not paste secret keys into ChatGPT or GitHub.
- Run this only on your own computer.
- Set STRIPE_SECRET_KEY as an environment variable before running.
- The script prints only Payment Link URLs.

Official Stripe flow:
Product -> Price -> Payment Link
"""

import base64
import json
import os
import sys
import urllib.parse
import urllib.request
from typing import Dict, List, Optional

STRIPE_API_BASE = "https://api.stripe.com/v1"
OUTPUT_FILE = "stripe-payment-links-output.txt"

OFFERS: List[Dict[str, object]] = [
    {
        "key": "visibility_check",
        "name": "Restaurant Visibility Check",
        "amount_cents": 1000,
        "recurring": None,
        "tax_code": "txcd_20030000",
        "description": "One-time review of a restaurant website, online visibility basics, menu clarity, and owner-submitted information. Manual review only. No guaranteed rankings, traffic, calls, orders, or sales.",
    },
    {
        "key": "starter_profile",
        "name": "Starter Profile",
        "amount_cents": 2000,
        "recurring": "month",
        "tax_code": "txcd_20030000",
        "description": "Monthly restaurant profile support with owner-submitted details, menu highlights, best-for tags, and visitor-friendly wording. Manual review only.",
    },
    {
        "key": "smart_promo_card",
        "name": "Smart Promo Card",
        "amount_cents": 5000,
        "recurring": "month",
        "tax_code": "txcd_10701000",
        "description": "Monthly clearly labeled promo-card marketing support for restaurant owner offers. Manual review required. No guaranteed traffic, calls, orders, rankings, or sales.",
    },
    {
        "key": "traveler_visibility",
        "name": "Traveler Visibility",
        "amount_cents": 10000,
        "recurring": "month",
        "tax_code": "txcd_10701000",
        "description": "Monthly traveler-focused restaurant visibility support for restaurants near hotels, airports, attractions, downtown areas, stations, or visitor districts. Manual review only.",
    },
    {
        "key": "website_starter_setup",
        "name": "Website Starter Setup",
        "amount_cents": 30900,
        "recurring": None,
        "tax_code": "txcd_10701200",
        "description": "One-time setup for a simple mobile-first restaurant website using owner-supplied facts, menu highlights, contact details, and approved links.",
    },
    {
        "key": "website_starter_support",
        "name": "Website Starter Support",
        "amount_cents": 4000,
        "recurring": "month",
        "tax_code": "txcd_10701100",
        "description": "Monthly support for small text, link, hours, or menu-highlight updates on a Restaurant Website Starter site.",
    },
    {
        "key": "website_pro_setup",
        "name": "Website Pro Setup",
        "amount_cents": 61900,
        "recurring": None,
        "tax_code": "txcd_10701200",
        "description": "One-time setup for a multi-page restaurant website using owner-supplied facts, menu highlights, contact details, approved links, and basic local SEO.",
    },
    {
        "key": "website_pro_support",
        "name": "Website Pro Support",
        "amount_cents": 8200,
        "recurring": "month",
        "tax_code": "txcd_10701100",
        "description": "Monthly support for small updates on a Restaurant Website Pro site, including text, links, hours, menu highlights, and approved content changes.",
    },
]


def get_secret_key() -> str:
    secret = os.environ.get("STRIPE_SECRET_KEY", "").strip()
    if not secret:
        print("ERROR: STRIPE_SECRET_KEY is not set.")
        print("Set it only on your own computer. Do not paste it into ChatGPT or GitHub.")
        sys.exit(1)
    if not secret.startswith(("sk_test_", "sk_live_")):
        print("ERROR: STRIPE_SECRET_KEY must start with sk_test_ or sk_live_.")
        sys.exit(1)
    return secret


def stripe_post(secret_key: str, path: str, data: Dict[str, str]) -> Dict[str, object]:
    encoded_data = urllib.parse.urlencode(data).encode("utf-8")
    token = base64.b64encode(f"{secret_key}:".encode("utf-8")).decode("ascii")
    request = urllib.request.Request(
        f"{STRIPE_API_BASE}{path}",
        data=encoded_data,
        method="POST",
        headers={
            "Authorization": f"Basic {token}",
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": "RestaurantAIBot-Stripe-Link-Generator/1.0",
        },
    )
    try:
        with urllib.request.urlopen(request, timeout=30) as response:
            return json.loads(response.read().decode("utf-8"))
    except urllib.error.HTTPError as error:
        details = error.read().decode("utf-8", errors="replace")
        print(f"Stripe API error on {path}: HTTP {error.code}")
        print(details)
        sys.exit(1)


def create_product(secret_key: str, offer: Dict[str, object]) -> str:
    response = stripe_post(
        secret_key,
        "/products",
        {
            "name": str(offer["name"]),
            "description": str(offer["description"]),
            "tax_code": str(offer["tax_code"]),
            "metadata[restaurant_ai_bot_offer]": str(offer["key"]),
            "metadata[source]": "RestaurantAIBot",
        },
    )
    return str(response["id"])


def create_price(secret_key: str, product_id: str, offer: Dict[str, object]) -> str:
    data = {
        "currency": "usd",
        "unit_amount": str(offer["amount_cents"]),
        "product": product_id,
        "metadata[restaurant_ai_bot_offer]": str(offer["key"]),
    }
    recurring: Optional[str] = offer.get("recurring")  # type: ignore[assignment]
    if recurring:
        data["recurring[interval]"] = recurring
    response = stripe_post(secret_key, "/prices", data)
    return str(response["id"])


def create_payment_link(secret_key: str, price_id: str, offer: Dict[str, object]) -> str:
    response = stripe_post(
        secret_key,
        "/payment_links",
        {
            "line_items[0][price]": price_id,
            "line_items[0][quantity]": "1",
            "allow_promotion_codes": "true",
            "billing_address_collection": "auto",
            "metadata[restaurant_ai_bot_offer]": str(offer["key"]),
            "custom_text[submit][message]": "RestaurantAIBot services require manual review and written confirmation before activation. No rankings, traffic, calls, orders, or sales are guaranteed.",
        },
    )
    return str(response["url"])


def main() -> None:
    secret_key = get_secret_key()
    mode = "LIVE" if secret_key.startswith("sk_live_") else "TEST"
    print(f"Stripe mode detected: {mode}")
    print("Creating RestaurantAIBot products, prices, and Payment Links...")
    print("No secret key will be printed or saved.\n")

    results: List[str] = []
    for offer in OFFERS:
        print(f"Creating: {offer['name']}")
        product_id = create_product(secret_key, offer)
        price_id = create_price(secret_key, product_id, offer)
        payment_url = create_payment_link(secret_key, price_id, offer)
        line = f"{offer['name']}: {payment_url}"
        results.append(line)
        print(line)

    with open(OUTPUT_FILE, "w", encoding="utf-8") as output:
        output.write("RestaurantAIBot Stripe Payment Links\n")
        output.write("Do not add secret keys to this file.\n\n")
        output.write("\n".join(results))
        output.write("\n")

    print(f"\nDone. Safe public payment links were saved to: {OUTPUT_FILE}")
    print("Paste only the buy.stripe.com URLs into ChatGPT for website placement.")


if __name__ == "__main__":
    main()
