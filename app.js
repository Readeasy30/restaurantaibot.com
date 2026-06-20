const API_URL = "https://restaurant-ai-api.wholelychit.workers.dev";
const FAVORITES_KEY = "restaurantAiFavorites";
const HISTORY_KEY = "restaurantAiHistory";
const SHORTLIST_KEY = "restaurantAiShortlist";

const state = {
  mood: "",
  favorites: [],
  lastResults: [],
  shortlist: [],
  lastSearch: {
    food: "",
    location: "",
    mode: "search"
  }
};

// ------------------------------
// INIT
// ------------------------------
document.addEventListener("DOMContentLoaded", () => {
  state.favorites = loadLocal(FAVORITES_KEY);
  state.shortlist = loadLocal(SHORTLIST_KEY);
  renderFavorites();
  renderHistory();
  setStatus("Ready");
});

// ------------------------------
// STORAGE HELPERS
// ------------------------------
function loadLocal(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveLocal(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// ------------------------------
// HISTORY
// ------------------------------
function saveHistory(item) {
  const history = loadLocal(HISTORY_KEY);

  const entry = {
    food: item.food,
    location: item.location,
    time: Date.now()
  };

  history.unshift(entry);

  const trimmed = history.slice(0, 8);
  saveLocal(HISTORY_KEY, trimmed);
}

function renderHistory() {
  let container = document.getElementById("historyBox");
  if (!container) {
    container = document.createElement("div");
    container.id = "historyBox";
    container.className = "panel";
    document.querySelector(".site-shell").prepend(container);
  }

  const history = loadLocal(HISTORY_KEY);

  container.innerHTML = `
    <div class="panel-head">
      <h2>Recent searches</h2>
      <p>Click to rerun a previous search</p>
    </div>

    <div class="chips">
      ${history.map(h => `
        <button onclick="rerunSearch('${h.food}', '${h.location}')">
          ${h.food || "Search"} • ${h.location || "near me"}
        </button>
      `).join("")}
    </div>
  `;
}

function rerunSearch(food, location) {
  const foodInput = document.getElementById("food");
  const locInput = document.getElementById("location");

  if (foodInput) foodInput.value = food;
  if (locInput) locInput.value = location;

  findFood();
}

// ------------------------------
// SHORTLIST
// ------------------------------
function toggleShortlist(index) {
  const item = state.lastResults[index];
  if (!item) return;

  const key = item.name.toLowerCase();

  const exists = state.shortlist.find(r => r.name.toLowerCase() === key);

  if (exists) {
    state.shortlist = state.shortlist.filter(r => r.name.toLowerCase() !== key);
  } else {
    state.shortlist.push(item);
  }

  saveLocal(SHORTLIST_KEY, state.shortlist);
  renderShortlist();
  setStatus("Shortlist updated");
}

function renderShortlist() {
  let container = document.getElementById("shortlistBox");
  if (!container) {
    container = document.createElement("div");
    container.id = "shortlistBox";
    container.className = "panel";
    document.querySelector(".site-shell").appendChild(container);
  }

  if (!state.shortlist.length) {
    container.innerHTML = "";
    return;
  }

  container.innerHTML = `
    <div class="panel-head">
      <h2>Shortlist compare</h2>
      <p>Your selected restaurants</p>
    </div>

    <div class="results-list">
      ${state.shortlist.map(r => `
        <div class="card">
          <h3>${r.name}</h3>
          <p>🍴 ${r.type}</p>
          <p>⭐ ${r.rating}</p>
        </div>
      `).join("")}
    </div>
  `;
}

// ------------------------------
// STATUS
// ------------------------------
function setStatus(msg) {
  const el = document.getElementById("statusBar");
  if (el) el.textContent = msg;
}

// ------------------------------
// SEARCH
// ------------------------------
async function findFood() {
  const food = document.getElementById("food")?.value || "";
  const location = document.getElementById("location")?.value || "";

  if (!food && !location) {
    setStatus("Enter something first");
    return;
  }

  state.lastSearch = { food, location, mode: "search" };

  showLoading();

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: buildPrompt(food),
        location: location || "near me"
      })
    });

    const data = await response.json();

    saveHistory({ food, location });
    renderHistory();

    renderResults(data, `Results for ${food || "your search"}`);
    renderShortlist();
    setStatus("Done");

  } catch (e) {
    console.error(e);
    setStatus("Error loading results");
  }
}

// ------------------------------
// SMARTER RANKING
// ------------------------------
function score(r) {
  let s = 0;

  const text = `${r.name} ${r.type} ${r.why}`.toLowerCase();
  const rating = parseFloat(r.rating);

  if (!isNaN(rating)) s += rating * 2;

  if (text.includes("pizza") || text.includes("burger") || text.includes("taco")) s += 2;
  if (text.includes(state.mood)) s += 3;

  if (text.includes("cheap") || text.includes("$")) s += 2;

  return s;
}

// ------------------------------
// RENDER
// ------------------------------
function renderResults(data, title) {
  const el = document.getElementById("results");

  if (!data?.restaurants?.length) {
    el.innerHTML = "No results found";
    return;
  }

  const list = data.restaurants
    .sort((a, b) => score(b) - score(a))
    .slice(0, 6);

  state.lastResults = list;

  el.innerHTML = `
    <h2>${title}</h2>
    ${list.map((r, i) => `
      <div class="card">
        <h3>${i === 0 ? "🔥 " : ""}${r.name}</h3>
        <p>${r.type}</p>
        <p>${r.rating}</p>

        <button onclick="toggleShortlist(${i})">
          Add to shortlist
        </button>
      </div>
    `).join("")}
  `;
}

// ------------------------------
// HELPERS
// ------------------------------
function buildPrompt(food) {
  return `Find good restaurants for: ${food}`;
}

function showLoading() {
  document.getElementById("results").innerHTML = "Loading...";
}

// ------------------------------
// QUICK SEARCH
// ------------------------------
function quickSearch(v) {
  document.getElementById("food").value = v;
  findFood();
}

// ------------------------------
// MOOD
// ------------------------------
function setMood(m) {
  state.mood = m;
}
