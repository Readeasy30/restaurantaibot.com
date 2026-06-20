const API_URL = "https://restaurant-ai-api.wholelychit.workers.dev";

const state = {
  mode: "search",
  lastResults: []
};

// ----------------------
// INIT
// ----------------------
document.addEventListener("DOMContentLoaded", () => {
  renderModeBar();
  setStatus("Ready");
});

// ----------------------
// MODE SYSTEM
// ----------------------
function setMode(mode) {
  state.mode = mode;

  if (mode === "explore") quickSearch("pizza");
  if (mode === "trending") trendingSearch();

  setStatus("Mode: " + mode);
}

function renderModeBar() {
  const el = document.getElementById("modeBar");

  el.innerHTML = `
    <button onclick="setMode('search')">🔎 Search</button>
    <button onclick="setMode('explore')">🌎 Explore</button>
    <button onclick="setMode('trending')">🔥 Trending</button>
  `;
}

// ----------------------
// STATUS
// ----------------------
function setStatus(msg) {
  const el = document.getElementById("statusBar");
  if (el) el.textContent = msg;
}

// ----------------------
// SEARCH ENGINE
// ----------------------
function buildQuery(food, location) {
  return `best ${food || "food"} in ${location || "my area"} near me top rated restaurants`;
}

// ----------------------
// MAIN SEARCH
// ----------------------
async function findFood() {
  const food = document.getElementById("food").value || "";
  const location = document.getElementById("location").value || "";

  if (!food && !location) {
    setStatus("Enter something to search");
    return;
  }

  setStatus("Searching...");

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

    setStatus("Results loaded");

  } catch (e) {
    console.error(e);
    setStatus("Search failed");
  }
}

// ----------------------
// RENDER RESULTS
// ----------------------
function render(data, food, location) {
  const el = document.getElementById("results");

  if (!data?.restaurants?.length) {
    el.innerHTML = "<p>No results found</p>";
    return;
  }

  const list = data.restaurants.slice(0, 6);

  state.lastResults = list;

  el.innerHTML = `
    <h2>Best ${food || "Food"} in ${location || "Your Area"}</h2>

    ${list.map((r, i) => `
      <div class="card ${i === 0 ? "top" : ""}">
        <h3>${i === 0 ? "🔥 " : ""}${r.name}</h3>
        <p>🍴 ${r.type || ""}</p>
        <p>⭐ ${r.rating || ""}</p>
        <p>${r.why || ""}</p>
      </div>
    `).join("")}
  `;
}

// ----------------------
// QUICK + TRENDING
// ----------------------
function quickSearch(v) {
  document.getElementById("food").value = v;
  findFood();
}

function trendingSearch() {
  const trends = ["pizza", "burger", "tacos", "sushi", "chicken"];
  const pick = trends[Math.floor(Math.random() * trends.length)];

  document.getElementById("food").value = pick;
  findFood();
}
