const API_URL = "https://restaurant-ai-api.wholelychit.workers.dev";

const STORAGE = {
  profile: "ra_profile",
  sponsored: "ra_sponsored"
};

const state = {
  mode: "search",
  lastResults: [],
  profile: load(STORAGE.profile) || {
    favoriteFoods: [],
    lastCity: ""
  },
  sponsoredBoosts: {
    pizza: 5,
    burger: 4,
    sushi: 3,
    tacos: 4
  }
};

// ------------------------------
// INIT
// ------------------------------
document.addEventListener("DOMContentLoaded", () => {
  setStatus("Phase 6–7 Active • Monetization + SEO Engine");
  renderModeBar?.();
});

// ------------------------------
// STORAGE
// ------------------------------
function load(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch {
    return null;
  }
}

function save(key, val) {
  localStorage.setItem(key, JSON.stringify(val));
}

// ------------------------------
// STATUS
// ------------------------------
function setStatus(msg) {
  const el = document.getElementById("statusBar");
  if (el) el.textContent = msg;
}

// ------------------------------
// MODE SWITCH (SEO LOOP)
// ------------------------------
function setMode(mode) {
  state.mode = mode;
  setStatus("Mode: " + mode);
}

// ------------------------------
// QUERY BUILDER (PHASE 7 SEO ENGINE)
// ------------------------------
function buildQuery(food, location) {
  return [
    food || "",
    location ? `in ${location}` : "",
    "best rated",
    "top local restaurants",
    "highly recommended"
  ].join(" ").trim();
}

// ------------------------------
// BOOST SYSTEM (PHASE 6 MONETIZATION)
// ------------------------------
function getBoost(r) {
  const name = (r.name || "").toLowerCase();

  for (const key in state.sponsoredBoosts) {
    if (name.includes(key)) {
      return state.sponsoredBoosts[key];
    }
  }

  return 0;
}

// ------------------------------
// INTENT ENGINE
// ------------------------------
function intent(food, location) {
  const t = `${food} ${location}`.toLowerCase();

  return {
    cheap: t.includes("cheap"),
    best: t.includes("best"),
    near: t.includes("near"),
    late: t.includes("late") || t.includes("night"),
    breakfast: t.includes("breakfast"),
    fast: t.includes("fast")
  };
}

// ------------------------------
// FINAL SCORING ENGINE (REVENUE + SEO + QUALITY)
// ------------------------------
function score(r, it, food) {
  let s = 0;

  const text = `${r.name} ${r.type} ${r.why}`.toLowerCase();
  const rating = parseFloat(r.rating);

  if (!isNaN(rating)) s += rating * 3;

  // intent scoring
  if (it.cheap && text.includes("cheap")) s += 5;
  if (it.fast && text.includes("fast")) s += 4;
  if (it.breakfast && text.includes("breakfast")) s += 4;
  if (it.late && text.includes("pizza")) s += 4;

  // SEO boost
  if (it.best && (text.includes("best") || text.includes("top"))) s += 3;

  // 💰 MONETIZATION BOOST (PHASE 6 CORE)
  s += getBoost(r);

  return s;
}

// ------------------------------
// SEARCH
// ------------------------------
async function findFood() {
  const food = document.getElementById("food")?.value || "";
  const location = document.getElementById("location")?.value || "";

  if (!food && !location) {
    setStatus("Enter search term");
    return;
  }

  state.profile.lastCity = location;
  save(STORAGE.profile, state.profile);

  showLoading();

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: buildQuery(food, location),
        location: location || "near me"
      })
    });

    const data = await res.json();

    render(data, food, location);

  } catch (e) {
    console.error(e);
    setStatus("Search failed");
  }
}

// ------------------------------
// RENDER (PHASE 7 SEO + PHASE 6 MONETIZATION)
// ------------------------------
function render(data, food, location) {
  const el = document.getElementById("results");

  if (!data?.restaurants?.length) {
    el.innerHTML = "<p>No results found</p>";
    return;
  }

  const it = intent(food, location);

  const list = data.restaurants
    .map(r => ({
      ...r,
      score: score(r, it, food)
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 6);

  state.lastResults = list;

  el.innerHTML = `
    <div class="results-header">
      <h2>Best ${food || "Food"} in ${location || "Your Area"}</h2>
      <p>AI-ranked • Sponsored-aware • SEO optimized</p>
    </div>

    <!-- 💰 SPONSORED SLOT (REAL MONETIZATION HOOK) -->
    <div style="
      border:2px solid #f97316;
      padding:12px;
      margin-bottom:12px;
      border-radius:12px;
      background:rgba(249,115,22,0.08);
    ">
      ⭐ Sponsored Placement Slot (Paid visibility system ready)
    </div>

    ${list.map((r, i) => `
      <div class="card" style="
        border:${i === 0 ? "2px solid #f97316" : "1px solid #334155"};
        margin-bottom:12px;
        padding:12px;
        border-radius:12px;
      ">
        <h3>${i === 0 ? "🔥 Top Pick • " : ""}${r.name}</h3>

        <p>🍴 ${r.type || "Restaurant"}</p>
        <p>⭐ ${r.rating || "No rating"}</p>
        <p>${r.why || ""}</p>

        <div style="margin-top:10px;">
          <button onclick="boost('${r.name}')">Boost Listing</button>
        </div>
      </div>
    `).join("")}
  `;
}

// ------------------------------
// MONETIZATION ACTION
// ------------------------------
function boost(name) {
  alert(
    `Boost request received for:\n${name}\n\nThis connects to future paid placement system.`
  );
}

// ------------------------------
// LOADING
// ------------------------------
function showLoading() {
  const el = document.getElementById("results");
  if (el) el.innerHTML = "<p>Loading top local results...</p>";
}

// ------------------------------
// MODE BAR (optional UI hook)
// ------------------------------
function renderModeBar() {
  const el = document.getElementById("modeBar");
  if (!el) return;

  el.innerHTML = `
    <button onclick="setMode('search')">Search</button>
    <button onclick="setMode('explore')">Explore</button>
    <button onclick="setMode('trending')">Trending</button>
  `;
}
