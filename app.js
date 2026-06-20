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
  return `best ${food || "food"} in ${location || "my area"} near me top rated restaurants open now`;
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
        location: location || "near me"
      })
    });

    const data = await res.json();

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
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  const resultsDiv = document.getElementById("results");

  searchBtn.addEventListener("click", () => {
    runSearch();
  });

  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      runSearch();
    }
  });

  async function runSearch() {
    const query = searchInput.value.trim();

    if (!query) {
      resultsDiv.innerHTML = `<p>Please type something like "pizza near me".</p>`;
      return;
    }

    resultsDiv.innerHTML = `<p>Searching...</p>`;

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          mode: state.mode,
          query: query
        })
      });

      if (!response.ok) {
        throw new Error("API error");
      }

      const data = await response.json();

      state.lastResults = data.results || [];
      renderResults(state.lastResults);

    } catch (err) {
      console.error(err);
      resultsDiv.innerHTML = `<p>Something went wrong. Try again.</p>`;
    }
  }

  function renderResults(results) {
    if (!results || results.length === 0) {
      resultsDiv.innerHTML = `<p>No results found.</p>`;
      return;
    }

    resultsDiv.innerHTML = results.map((r) => {
      return `
        <div class="card">
          <h3>${r.name || "Unknown"}</h3>
          <p>${r.description || "No description available."}</p>
          <p><strong>Rating:</strong> ${r.rating || "N/A"}</p>
        </div>
      `;
    }).join("");
  }
});
