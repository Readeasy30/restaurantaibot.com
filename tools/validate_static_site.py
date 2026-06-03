"""RestaurantAIBot local static-site validator.

Run from repo root:
    python tools/validate_static_site.py

This is a repo-side preflight check only. It does not call the live website,
Cloudflare, OpenAI, Google Maps, or any outside service.
"""

from __future__ import annotations

from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse
import sys
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
DOMAIN = "https://restaurantaibot.com"

REQUIRED_FILES = [
    "README.md",
    "PROJECT-STATUS.md",
    "CURRENT-TASK.md",
    "MANUAL-TEST-CHECKLIST.md",
    "BROWSER-SMOKE-TEST.md",
    "public/index.html",
    "public/404.html",
    "public/_headers",
    "public/_redirects",
    "public/robots.txt",
    "public/sitemap.xml",
    "public/quick-searches.js",
    "functions/api/search.js",
    "functions/api/config.js",
]

REQUIRED_PAGES = [
    "index.html",
    "about.html",
    "contact.html",
    "privacy.html",
    "terms.html",
    "popular-searches.html",
    "restaurant-cities.html",
    "owner-advertise.html",
    "restaurant-owner-resources.html",
    "restaurant-marketing-tools.html",
    "advertiser-intake.html",
    "sample-restaurant-profile.html",
    "pizza-near-me.html",
    "tacos-near-me.html",
    "sushi-near-me.html",
    "breakfast-near-me.html",
    "vegan-restaurants-near-me.html",
    "seafood-near-me.html",
    "coffee-near-me.html",
    "dinner-near-me.html",
    "cheap-eats-near-me.html",
    "outdoor-dining-near-me.html",
    "chicago-restaurants.html",
    "new-york-restaurants.html",
    "dallas-restaurants.html",
    "miami-restaurants.html",
    "los-angeles-restaurants.html",
    "las-vegas-restaurants.html",
    "atlanta-restaurants.html",
    "denver-restaurants.html",
    "tokyo-restaurants.html",
    "london-restaurants.html",
    "paris-restaurants.html",
    "toronto-restaurants.html",
    "restaurant-growth-checklist.html",
    "restaurant-growth-starter-checkup.html",
    "restaurant-menu-copy-tips.html",
    "restaurant-photo-checklist.html",
    "restaurant-catering-private-events.html",
    "local-restaurant-seo-basics.html",
    "restaurant-customer-loyalty-ideas.html",
    "restaurant-social-post-ideas.html",
    "google-business-profile-checklist-restaurants.html",
    "restaurant-website-checklist.html",
    "restaurant-review-response-templates.html",
    "slow-night-restaurant-promotion-ideas.html",
]

ALLOWED_EXTERNAL_HOSTS = {
    "images.unsplash.com",
    "maps.googleapis.com",
    "www.google.com",
    "restaurantaibot.com",
    "www.restaurantaibot.com",
}

FORBIDDEN_LIVE_FEATURE_TERMS = [
    "adsbygoogle",
    "googletagmanager.com",
    "google-analytics.com",
    "doubleclick.net",
    "stripe.com",
    "paypal.com",
]


class LinkParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.refs: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        for name, value in attrs:
            if name in {"href", "src"} and value:
                self.refs.append(value)


def fail(message: str) -> None:
    raise SystemExit(message)


def text(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def require_paths() -> None:
    missing = [path for path in REQUIRED_FILES if not (ROOT / path).is_file()]
    missing += [f"public/{page}" for page in REQUIRED_PAGES if not (PUBLIC / page).is_file()]
    if missing:
        fail("Missing required files: " + ", ".join(missing))


def validate_sitemap() -> None:
    tree = ET.fromstring(text(PUBLIC / "sitemap.xml"))
    namespace = "{http://www.sitemaps.org/schemas/sitemap/0.9}"
    urls = [node.text or "" for node in tree.findall(f".//{namespace}loc")]

    expected = [f"{DOMAIN}/"] + [f"{DOMAIN}/{page}" for page in REQUIRED_PAGES if page != "index.html"]
    missing = [url for url in expected if url not in urls]
    if missing:
        fail("Sitemap missing URLs: " + ", ".join(missing))

    if any(url.endswith("/404.html") for url in urls):
        fail("Sitemap should not include 404.html")


def validate_robots_headers_redirects() -> None:
    robots = text(PUBLIC / "robots.txt")
    if f"Sitemap: {DOMAIN}/sitemap.xml" not in robots:
        fail("robots.txt does not point to the live sitemap")

    headers = text(PUBLIC / "_headers")
    for term in ["X-Content-Type-Options: nosniff", "X-Frame-Options: DENY", "/api/*", "Cache-Control: no-store"]:
        if term not in headers:
            fail(f"public/_headers missing: {term}")

    redirects = text(PUBLIC / "_redirects")
    for term in [
        "/cities.html /restaurant-cities.html 301",
        "/search.html / 301",
        "/owner.html /owner-advertise.html 301",
        "/advertise.html /owner-advertise.html 301",
        "/marketing.html /restaurant-marketing-tools.html 301",
    ]:
        if term not in redirects:
            fail(f"public/_redirects missing: {term}")


def validate_links() -> None:
    broken: list[str] = []
    unexpected_external: list[str] = []

    for page in sorted(PUBLIC.glob("*.html")):
        parser = LinkParser()
        parser.feed(text(page))

        for ref in parser.refs:
            if ref.startswith(("#", "mailto:", "tel:", "data:", "javascript:")):
                continue

            parsed = urlparse(ref)
            if parsed.scheme in {"http", "https"}:
                if parsed.hostname not in ALLOWED_EXTERNAL_HOSTS:
                    unexpected_external.append(f"{page.name} -> {ref}")
                continue

            clean = ref.split("?", 1)[0].split("#", 1)[0]
            if not clean:
                continue
            target = PUBLIC / (clean.lstrip("/") or "index.html") if clean.startswith("/") else page.parent / clean
            if not target.exists():
                broken.append(f"{page.name} -> {ref}")

    if broken:
        fail("Broken internal links: " + "; ".join(broken))
    if unexpected_external:
        fail("Unexpected external links: " + "; ".join(unexpected_external))


def validate_homepage_and_api_terms() -> None:
    index = text(PUBLIC / "index.html")
    quick = text(PUBLIC / "quick-searches.js")
    api = text(ROOT / "functions/api/search.js")

    for term in ["Use My Location", "Demo example only", "Restaurant details can change", "Search on Google Maps"]:
        if term not in index:
            fail(f"Homepage missing expected term: {term}")

    for term in ["restaurant-cities.html", "restaurant-owner-resources.html", "dispatchEvent(new Event('submit'"]:
        if term not in quick:
            fail(f"quick-searches.js missing expected term: {term}")

    for term in ["demoMode", "near me", "type a city", "OPENAI_API_KEY", "GOOGLE_MAPS_API_KEY"]:
        if term not in api:
            fail(f"functions/api/search.js missing expected term: {term}")


def validate_safety_terms() -> None:
    findings: list[str] = []
    for path in ROOT.rglob("*"):
        if not path.is_file() or ".git" in path.parts:
            continue
        if path.suffix not in {".html", ".js", ".json", ".md", ".txt", ".xml", ".py"}:
            continue
        lower = text(path).lower()
        for term in FORBIDDEN_LIVE_FEATURE_TERMS:
            if term in lower:
                findings.append(f"{path.relative_to(ROOT)} includes {term}")

    if findings:
        fail("Live feature terms found: " + "; ".join(findings))


def main() -> int:
    require_paths()
    validate_sitemap()
    validate_robots_headers_redirects()
    validate_links()
    validate_homepage_and_api_terms()
    validate_safety_terms()
    print("RestaurantAIBot static-site validation passed.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
