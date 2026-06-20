const API_URL = "https://restaurant-ai-api.wholelychit.workers.dev";

const KEYS = {
  favorites: "ra_favorites",
  history: "ra_history",
  shortlist: "ra_shortlist",
  profile: "ra_profile"
};

// ------------------------------
// STATE (PHASE 5 UPGRADE)
// ------------------------------
const state = {
  mode: "search", // search | explore | trending
  lastResults: [],
  profile: {
    favoriteFoods: [],
    lastLocation: ""
  }
};

// ------------------------------
// INIT
// ------------------------------
document.addEventListener("DOMContentLoaded", () => {
  state.profile = load(KEYS.profile) || state.profile;
  setStatus("Ready • Phase 5 Active");
  renderModeUI();
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
// MODE SYSTEM (PHASE 5 CORE)
// ------------------------------
function setMode(mode) {
  state.mode = mode;
  renderModeUI();
  setStatus(`Mode: ${mode}`);
}

function renderModeUI() {
  const el = document.getElementById("modeBar");
  if (!el) return;

  el.innerHTML = `
    <button onclick="setMode('search')">🔎 Search</button>
    <button onclick="setMode('explore')">🌎 Explore</button>
    <button onclick="setMode('trending')">🔥 Trending</button>
  `;
}

// ------------------------------
// INTENT ENGINE (PHASE 4 FIXED)
// ------------------------------
function analyzeIntent(food = "", location = "") {
  const t = `${food} ${location}`.toLowerCase();

  return {
    cheap: t.includes("cheap") || t.includes("$"),
    date: t.includes("date") || t.includes("romantic"),
    fast: t.includes("fast") || t.includes("quick"),
    breakfast: t.includes("breakfast"),
    late: t.includes("late") || t.includes("night"),
    near: t.includes("near me") || t.includes("nearby"),
    best: t.includes("best")
  };
}

// ------------------------------
// CLEAN QUERY BUILDER (PHASE 4.1 FIX)
// ------------------------------
function buildQuery(food, location) {
  return [
    food || "",
    location ? `in ${location}` : "",
    "best rated",
    "top local food"
  ].join(" ").trim();
}

// ------------------------------
// SEO SCORE ENGINE (FINAL VERSION)
// ------------------------------
function score(r, intent) {
  let s = 0;

  const text = `${r.name} ${r.type} ${r.why}`.toLowerCase();
  const rating = parseFloat(r.rating);

  if (!isNaN(rating)) s += rating * 3;

  if (intent.cheap && text.includes("cheap")) s += 5;
  if (intent.date && text.includes("romantic")) s += 6;
  if (intent.fast && text.includes("fast")) s += 4;
  if (intent.breakfast && text.includes("breakfast")) s += 4;
  if (intent.late && (text.includes("late") || text.includes("pizza"))) s += 4;

  if (intent.best && (text.includes("best") || text.includes("top"))) s += 3;

  return s;
}

// ------------------------------
// MAIN SEARCH
// ------------------------------
async function findFood() {
  const food = document.getElementById("food")?.value || "";
  const location = document.getElementById("location")?.value || "";

  if (!food && !location) {
    setStatus("Enter search term");
    return;
  }

  state.profile.lastLocation = location;
  save(KEYS.profile, state.profile);

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

    renderResults(data, food, location);

    setStatus("Results loaded");

  } catch (e) {
    console.error(e);
    setStatus("Search failed");
  }
}

// ------------------------------
// RESULTS RENDER (FINAL PLATFORM VERSION)
// ------------------------------
function renderResults(data, food, location) {
  const el = document.getElementById("results");

  if (!data?.restaurants?.length) {
    el.innerHTML = "<p>No results found</p>";
    return;
  }

  const intent = analyzeIntent(food, location);

  const list = data.restaurants
    .map(r => ({ ...r, score: score(r, intent) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 6);

  state.lastResults = list;

  // track profile (light personalization)
  if (food && !state.profile.favoriteFoods.includes(food)) {
    state.profile.favoriteFoods.push(food);
    save(KEYS.profile, state.profile);
  }

  el.innerHTML = `
    <div class="results-header">
      <h2>Best ${food || "Food"} in ${location || "Your Area"}</h2>
      <p>AI-ranked • Personalized • Phase 5 Platform</p>
    </div>

    ${getModeBanner()}

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
      </div>
    `).join("")}
  `;
}

// ------------------------------
// PHASE 5 MODE CONTENT
// ------------------------------
function getModeBanner() {
  if (state.mode === "search") {
    return `<div class="card">🔎 Search Mode: Personalized results</div>`;
  }

  if (state.mode === "explore") {
    return `
      <div class="card">
        🌎 Explore Mode:
        Try: pizza, sushi, burgers, breakfast, tacos
      </div>
    `;
  }

  if (state.mode === "trending") {
    return `
      <div class="card">
        🔥 Trending Mode:
        Popular foods people search for today
      </div>
    `;
  }

  return "";
}

// ------------------------------
// LOADING
// ------------------------------
function showLoading() {
  const el = document.getElementById("results");
  if (el) el.innerHTML = "<p>Loading best local results...</p>";
}

// ------------------------------
// QUICK SEARCH
// ------------------------------
function quickSearch(v) {
  document.getElementById("food").value = v;
  findFood();
}
