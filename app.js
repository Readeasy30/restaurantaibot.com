const API_URL = "https://restaurant-ai-api.wholelychit.workers.dev";

const FAVORITES_KEY = "restaurantAiFavorites";
const HISTORY_KEY = "restaurantAiHistory";
const SHORTLIST_KEY = "restaurantAiShortlist";

// ------------------------------
// STATE
// ------------------------------
const state = {
  mood: "",
  favorites: [],
  shortlist: [],
  lastResults: [],
  featuredBoosts: {}, // simulated paid placements
  lastSearch: { food: "", location: "", mode: "search" }
};

// ------------------------------
// INIT
// ------------------------------
document.addEventListener("DOMContentLoaded", () => {
  state.favorites = loadLocal(FAVORITES_KEY);
  state.shortlist = loadLocal(SHORTLIST_KEY);

  setStatus("Ready");
});

// ------------------------------
// STORAGE
// ------------------------------
function loadLocal(key) {
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch {
    return [];
  }
}

function saveLocal(key, val) {
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
// INTENT DETECTION (kept from Phase 2)
// ------------------------------
function detectIntent(food = "", location = "") {
  const t = `${food} ${location}`.toLowerCase();

  return {
    cheap: t.includes("cheap") || t.includes("$"),
    date: t.includes("date") || t.includes("romantic"),
    fast: t.includes("fast") || t.includes("quick"),
    breakfast: t.includes("breakfast"),
    late: t.includes("late") || t.includes("night"),
    near: t.includes("near me") || t.includes("nearby")
  };
}

// ------------------------------
// MONETIZATION BOOST ENGINE (NEW)
// ------------------------------
function getBoostScore(r) {
  // simulated monetization layer
  const name = (r.name || "").toLowerCase();

  // pretend these are paid or featured partners
  if (name.includes("pizza") || name.includes("burger")) return 2;
  if (name.includes("grill") || name.includes("steak")) return 3;

  return 0;
}

// ------------------------------
// SMART SCORING (UPGRADED)
// ------------------------------
function scoreRestaurant(r, intent) {
  let s = 0;

  const text = `${r.name} ${r.type} ${r.why}`.toLowerCase();
  const rating = parseFloat(r.rating);

  if (!isNaN(rating)) s += rating * 2;

  if (intent.cheap && (text.includes("cheap") || text.includes("$"))) s += 5;
  if (intent.date && (text.includes("romantic") || text.includes("steak") || text.includes("italian"))) s += 5;
  if (intent.fast && (text.includes("fast") || text.includes("quick"))) s += 4;
  if (intent.breakfast && text.includes("breakfast")) s += 4;
  if (intent.late && (text.includes("pizza") || text.includes("burger"))) s += 3;

  // 🔥 MONETIZATION BOOST LAYER
  s += getBoostScore(r);

  return s;
}

// ------------------------------
// PROMPT BUILDER
// ------------------------------
function buildPrompt(food, location) {
  const intent = detectIntent(food, location);

  let p = `Find best local restaurants.`;

  if (food) p += ` Food: ${food}.`;
  if (location) p += ` Location: ${location}.`;

  if (intent.cheap) p += " Prioritize affordable places.";
  if (intent.date) p += " Prioritize romantic/date-night spots.";
  if (intent.fast) p += " Prioritize fast service.";
  if (intent.breakfast) p += " Prioritize breakfast.";
  if (intent.late) p += " Prioritize late-night food.";
  if (intent.near) p += " Focus on nearby results.";

  // monetization-aware instruction (future proofing)
  p += " Include top-quality options suitable for featured placement.";

  return p;
}

// ------------------------------
// SEARCH
// ------------------------------
async function findFood() {
  const food = document.getElementById("food")?.value || "";
  const location = document.getElementById("location")?.value || "";

  if (!food && !location) {
    setStatus("Enter a search term");
    return;
  }

  showLoading();
  setStatus("Searching...");

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: buildPrompt(food, location),
        location: location || "near me"
      })
    });

    const data = await res.json();

    renderResults(data, food || "Search results");

    setStatus("Results ready");

  } catch (e) {
    console.error(e);
    setStatus("Search failed");
  }
}

// ------------------------------
// RESULTS RENDER (MONETIZATION LAYER ADDED)
// ------------------------------
function renderResults(data, title) {
  const el = document.getElementById("results");
  if (!el) return;

  if (!data?.restaurants?.length) {
    el.innerHTML = "<p>No results found</p>";
    return;
  }

  const intent = detectIntent(
    state.lastSearch?.food,
    state.lastSearch?.location
  );

  const list = data.restaurants
    .map(r => ({
      ...r,
      score: scoreRestaurant(r, intent)
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 6);

  state.lastResults = list;

  el.innerHTML = `
    <div class="results-header">
      <h2>${title}</h2>
      <p>Top local picks (AI ranked + boosted placements)</p>
    </div>

    <!-- 💰 FEATURED SLOT (MONETIZATION READY) -->
    <div style="
      border: 1px solid #f97316;
      padding: 12px;
      margin-bottom: 12px;
      border-radius: 12px;
      background: rgba(249,115,22,0.08);
    ">
      ⭐ Featured Listing Slot (reserved for paid placement)
    </div>

    ${list.map((r, i) => {
      const isFeatured = i === 0;

      return `
        <div class="card" style="
          border: ${isFeatured ? "2px solid #f97316" : "1px solid #334155"};
          margin-bottom: 12px;
          padding: 12px;
          border-radius: 12px;
        ">
          <h3>${isFeatured ? "🔥 Featured Pick • " : ""}${r.name}</h3>

          <p>🍴 ${r.type || "Restaurant"}</p>
          <p>⭐ ${r.rating || "No rating"}</p>

          <p style="opacity:0.8;">
            ${r.why || ""}
          </p>

          <div style="margin-top:10px;">
            <button onclick="addToShortlist(${i})">Shortlist</button>
            <button onclick="boostPlaceholder('${r.name}')">Boost</button>
          </div>
        </div>
      `;
    }).join("")}
  `;
}

// ------------------------------
// SHORTLIST
// ------------------------------
function addToShortlist(index) {
  const item = state.lastResults[index];
  if (!item) return;

  state.shortlist.push(item);
  saveLocal(SHORTLIST_KEY, state.shortlist);

  alert("Added to shortlist");
}

// ------------------------------
// MONETIZATION ACTION (PLACEHOLDER)
// ------------------------------
function boostPlaceholder(name) {
  alert(
    `Boost request for "${name}" saved.\n\nThis is where paid promotion / featured listing would connect later.`
  );
}

// ------------------------------
// LOADING
// ------------------------------
function showLoading() {
  const el = document.getElementById("results");
  if (el) el.innerHTML = "<p>Loading...</p>";
}

// ------------------------------
// QUICK SEARCH
// ------------------------------
function quickSearch(v) {
  document.getElementById("food").value = v;
  findFood();
}
