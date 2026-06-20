const API_URL = "https://restaurant-ai-api.wholelychit.workers.dev";

const state = {
  mode: "search",
  lastResults: []
};

document.addEventListener("DOMContentLoaded", () => {
  renderModeBar();
  setStatus("Ready");
});

// --------------------
// MODE BAR
// --------------------
function renderModeBar() {
  const el = document.getElementById("modeBar");

  el.innerHTML = `
    <button onclick="setMode('search')">Search</button>
    <button onclick="setMode('explore')">Explore</button>
    <button onclick="setMode('trending')">Trending</button>
  `;
}

function setMode(mode) {
  state.mode = mode;

  if (mode === "trending") trendingSearch();
  if (mode === "explore") quickSearch("pizza");

  setStatus("Mode: " + mode);
}

// --------------------
// STATUS
// --------------------
function setStatus(msg) {
  const el = document.getElementById("statusBar");
  if (el) el.textContent = msg;
}

// --------------------
// SEO QUERY ENGINE
// --------------------
function buildSEOQuery(food, location) {
  return `${food || "food"} restaurants ${location || "near me"} ratings reviews open now`;
}

// --------------------
// MAIN SEARCH
// --------------------
async function findFood() {
  const food = document.getElementById("food").value || "";
  const location = document.getElementById("location").value || "";

  if (!food && !location) {
    setStatus("Enter search term");
    return;
  }

  setStatus("Searching...");

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: buildSEOQuery(food, location),
        location: location || "near me",
        mode: state.mode
      })
    });

    const data = await res.json();

    console.log("API RESPONSE:", data);

    render(data, food, location);
    setStatus("Results loaded");

  } catch (err) {
    console.error(err);
    setStatus("Search failed");
  }
}

// --------------------
// RENDER RESULTS
// --------------------
function render(data, food, location) {
  const el = document.getElementById("results");

  if (!data || !data.restaurants || data.restaurants.length === 0) {
    el.innerHTML = "No results found";
    return;
  }

  const list = data.restaurants.slice(0, 6);
  state.lastResults = list;

  el.innerHTML = `
    <h2>Best ${food || "Food"} in ${location || "Your Area"}</h2>

    ${list.map((r, i) => `
      <div class="card ${i === 0 ? "top" : ""}">
        <h3>${i === 0 ? "🔥 " : ""}${r.name || "Unknown"}</h3>
        <p>🍴 ${r.type || "Restaurant"}</p>
        <p>⭐ ${r.rating || "N/A"}</p>
        <p>${r.why || ""}</p>
      </div>
    `).join("")}
  `;
}

// --------------------
// TRAFFIC LOOP
// --------------------
function trendingSearch() {
  const foods = ["pizza", "burger", "sushi", "tacos", "chicken"];
  const pick = foods[Math.floor(Math.random() * foods.length)];

  document.getElementById("food").value = pick;
  document.getElementById("location").value = "near me";

  findFood();
}

function quickSearch(food) {
  document.getElementById("food").value = food;
  findFood();
}

