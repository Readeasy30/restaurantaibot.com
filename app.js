const API_URL = "https://restaurant-ai-api.wholelychit.workers.dev";

const state = {
  mode: "search",
  lastResults: []
};

// --------------------
// INIT
// --------------------
document.addEventListener("DOMContentLoaded", () => {
  renderModeBar();
  setStatus("Ready");

  autoSEOPageLoad();
});

// --------------------
// MODE BAR
// --------------------
function renderModeBar() {
  const el = document.getElementById("modeBar");

  if (!el) return;

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
// SEO ENGINE
// --------------------
function buildSEOQuery(food, location) {
  const f = food || "food";
  const l = location || "near me";

  return [
    `${f} restaurants ${l}`,
    `best ${f} near ${l}`,
    `top rated ${f} restaurants`,
    `${f} places open now ${l}`
  ].join(" ");
}

function buildPageIntro(food, location) {
  const f = food || "food";
  const l = location || "your area";

  return `
    <h2>Best ${f} in ${l}</h2>
    <p>
      Discover top-rated ${f} restaurants in ${l}. Rankings are based on reviews, popularity, and AI analysis.
    </p>
  `;
}

function buildInternalLinks() {
  const combos = [
    ["st-louis", "pizza"],
    ["chicago", "burger"],
    ["miami", "seafood"],
    ["austin", "tacos"],
    ["new-york", "sushi"]
  ];
const CITY_CONTEXT = {
  chicago: ["deep dish tradition", "classic pizza culture", "local favorites"],
  miami: ["Latin fusion flavors", "beachside dining", "tourist hotspots"],
  austin: ["food truck culture", "smoky BBQ influence", "late-night eats"],
  "new-york": ["fast-paced dining", "iconic slices", "diverse food scene"]
};

function getVariation(city) {
  const list = CITY_CONTEXT[city] || ["local dining scene"];
  return list[Math.floor(Math.random() * list.length)];
}
  return combos.map(([city, food]) => `
    <a href="/seo-engine.html?city=${city}&food=${food}">
      Best ${food} in ${city.replace("-", " ")}
    </a>
  `).join("");
}

// --------------------
// AUTO SEO PAGE LOAD
// --------------------
function getParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    city: params.get("city") || "",
    food: params.get("food") || ""
  };
}

function autoSEOPageLoad() {
  const { city, food } = getParams();

  const foodInput = document.getElementById("food");
  const locInput = document.getElementById("location");

  if (foodInput) foodInput.value = food;
  if (locInput) locInput.value = city;

  if (food || city) {
    findFood();
  }
}

// --------------------
// MAIN SEARCH
// --------------------
async function findFood() {
  const food = document.getElementById("food")?.value || "";
  const location = document.getElementById("location")?.value || "";

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
// RENDER
// --------------------
function render(data, food, location) {
  const el = document.getElementById("results");

  if (!data?.restaurants?.length) {
    el.innerHTML = "No results found";
    return;
  }

  const list = data.restaurants.slice(0, 6);
  state.lastResults = list;

  el.innerHTML = `
    ${buildPageIntro(food, location)}

    <div class="results">
      ${list.map((r, i) => `
        <div class="card ${i === 0 ? "top" : ""}">
          <h3>${i === 0 ? "🔥 " : ""}${r.name}</h3>
          <p>${r.type || "Restaurant"}</p>
          <p>⭐ ${r.rating || "N/A"}</p>
          <p>${r.why || ""}</p>
        </div>
      `).join("")}
    </div>

    <hr/>

    <h3>Explore More</h3>
    <div class="links">
      ${buildInternalLinks()}
    </div>
  `;
}

// --------------------
// QUICK ACTIONS
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
