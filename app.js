const API_URL = "https://restaurant-ai-api.wholelychit.workers.dev";
const FAVORITES_KEY = "restaurantAiFavorites";
const HISTORY_KEY = "restaurantAiHistory";
const SHORTLIST_KEY = "restaurantAiShortlist";

const state = {
  mood: "",
  favorites: [],
  shortlist: [],
  lastResults: [],
  lastSearch: { food: "", location: "", mode: "search" }
};

// ------------------------------
// INIT
// ------------------------------
document.addEventListener("DOMContentLoaded", () => {
  state.favorites = loadLocal(FAVORITES_KEY);
  state.shortlist = loadLocal(SHORTLIST_KEY);
  renderFavorites?.();
  renderHistory?.();
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

function saveLocal(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// ------------------------------
// STATUS
// ------------------------------
function setStatus(msg) {
  const el = document.getElementById("statusBar");
  if (el) el.textContent = msg;
}

// ------------------------------
// INTENT ENGINE (PHASE 2 CORE)
// ------------------------------
function detectIntent(food = "", location = "") {
  const text = `${food} ${location}`.toLowerCase();

  return {
    isNearMe: text.includes("near me") || text.includes("nearby"),
    isCheap: text.includes("cheap") || text.includes("budget") || text.includes("$"),
    isFast: text.includes("fast") || text.includes("quick"),
    isDate: text.includes("date") || text.includes("romantic"),
    isBreakfast: text.includes("breakfast") || text.includes("morning"),
    isLate: text.includes("late") || text.includes("night")
  };
}

// ------------------------------
// SMART SCORING (PHASE 2 UPGRADE)
// ------------------------------
function scoreRestaurant(r, intent) {
  let score = 0;

  const text = `${r.name} ${r.type} ${r.why}`.toLowerCase();
  const rating = parseFloat(r.rating);

  if (!isNaN(rating)) score += rating * 2;

  if (intent.isCheap && (text.includes("cheap") || text.includes("$") || text.includes("value"))) score += 5;
  if (intent.isFast && (text.includes("fast") || text.includes("quick") || text.includes("grab"))) score += 5;
  if (intent.isDate && (text.includes("romantic") || text.includes("steak") || text.includes("italian"))) score += 5;
  if (intent.isBreakfast && (text.includes("breakfast") || text.includes("coffee"))) score += 5;
  if (intent.isLate && (text.includes("late") || text.includes("pizza") || text.includes("burger"))) score += 4;

  if (text.includes("popular") || text.includes("top rated")) score += 2;

  return score;
}

// ------------------------------
// BUILD PROMPT (PHASE 2)
// ------------------------------
function buildPrompt(food, location) {
  const intent = detectIntent(food, location);

  let prompt = `Find best restaurants.`;

  if (food) prompt += ` Food: ${food}.`;
  if (location) prompt += ` Location: ${location}.`;

  if (intent.isNearMe) prompt += " Focus on nearby high-quality options.";
  if (intent.isCheap) prompt += " Prioritize affordable options.";
  if (intent.isDate) prompt += " Prioritize romantic/date-night places.";
  if (intent.isFast) prompt += " Prioritize fast service.";
  if (intent.isBreakfast) prompt += " Prioritize breakfast/brunch.";
  if (intent.isLate) prompt += " Prioritize late-night food.";

  prompt += " Return top 6 strong local matches.";

  return prompt;
}

// ------------------------------
// SEARCH
// ------------------------------
async function findFood() {
  const food = document.getElementById("food")?.value || "";
  const location = document.getElementById("location")?.value || "";

  if (!food && !location) {
    setStatus("Enter something to search");
    return;
  }

  state.lastSearch = { food, location, mode: "search" };

  showLoading();

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: buildPrompt(food, location),
        location: location || "near me"
      })
    });

    const data = await response.json();

    saveHistory?.({ food, location });

    renderResults(data, `Results for ${food || "your search"}`, location);

    setStatus("Results loaded");

  } catch (e) {
    console.error(e);
    setStatus("Search failed");
  }
}

// ------------------------------
// RESULTS
// ------------------------------
function renderResults(data, title, location = "") {
  const el = document.getElementById("results");
  if (!el) return;

  if (!data?.restaurants?.length) {
    el.innerHTML = "<p>No results found.</p>";
    return;
  }

  const intent = detectIntent(
    state.lastSearch.food,
    state.lastSearch.location
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
      <p>Smart-ranked local results</p>
    </div>

    ${list.map((r, i) => `
      <div class="card ${i === 0 ? "top" : ""}">
        <h3>${i === 0 ? "🔥 " : ""}${r.name}</h3>
        <p>🍴 ${r.type || "Restaurant"}</p>
        <p>⭐ ${r.rating || "No rating"}</p>

        <button onclick="addToShortlist(${i})">
          Add to shortlist
        </button>
      </div>
    `).join("")}
  `;
}

// ------------------------------
// SHORTLIST (LIGHTWEIGHT)
// ------------------------------
function addToShortlist(index) {
  const item = state.lastResults[index];
  if (!item) return;

  const exists = state.shortlist.find(r => r.name === item.name);

  if (!exists) state.shortlist.push(item);

  saveLocal(SHORTLIST_KEY, state.shortlist);

  alert("Added to shortlist");
}

// ------------------------------
// HISTORY (MINIMAL SUPPORT)
// ------------------------------
function saveHistory(entry) {
  const history = loadLocal(HISTORY_KEY);

  history.unshift({
    ...entry,
    time: Date.now()
  });

  saveLocal(HISTORY_KEY, history.slice(0, 8));
}

// ------------------------------
// QUICK SEARCH
// ------------------------------
function quickSearch(v) {
  document.getElementById("food").value = v;
  findFood();
}

// ------------------------------
// STATUS LOADING
// ------------------------------
function showLoading() {
  const el = document.getElementById("results");
  if (el) el.innerHTML = "<p>Searching...</p>";
}
