const state = {
  mood: "",
  mode: "search",
  favorites: loadFavorites()
};

const API_URL = "https://restaurant-ai-api.wholelychit.workers.dev";

// -------------------------
// Startup
// -------------------------
document.addEventListener("DOMContentLoaded", () => {
  renderFavorites();
});

// -------------------------
// Storage
// -------------------------
function loadFavorites() {
  try {
    const raw = localStorage.getItem("restaurantAiFavorites");
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    return [];
  }
}

function saveFavorites() {
  localStorage.setItem("restaurantAiFavorites", JSON.stringify(state.favorites));
}

function getFavoriteKey(r) {
  return `${(r.name || "").trim().toLowerCase()}|${(r.location || "").trim().toLowerCase()}`;
}

function isFavorite(r) {
  const key = getFavoriteKey(r);
  return state.favorites.some(item => getFavoriteKey(item) === key);
}

function addFavorite(r) {
  if (isFavorite(r)) return;

  state.favorites.unshift(r);
  saveFavorites();
  renderFavorites();
  setStatus(`Saved favorite: ${r.name}`);
}

function removeFavoriteByKey(key) {
  state.favorites = state.favorites.filter(item => getFavoriteKey(item) !== key);
  saveFavorites();
  renderFavorites();
  setStatus("Favorite removed");
}

function clearFavorites() {
  state.favorites = [];
  saveFavorites();
  renderFavorites();
  setStatus("Favorites cleared");
}

// -------------------------
// UI helpers
// -------------------------
function setStatus(message) {
  const statusBar = document.getElementById("statusBar");
  if (statusBar) statusBar.textContent = message;
}

function labelMood(mood) {
  switch (mood) {
    case "cheap":
      return "Cheap";
    case "date":
      return "Date Night";
    case "fast":
      return "Fast";
    case "healthy":
      return "Healthy";
    default:
      return "None";
  }
}

function setMood(selected) {
  state.mood = state.mood === selected ? "" : selected;

  document.querySelectorAll("#moods button").forEach(btn => {
    btn.classList.remove("active");
    const onclick = btn.getAttribute("onclick") || "";
    if (state.mood && onclick.includes(`'${state.mood}'`)) {
      btn.classList.add("active");
    }
  });

  setStatus(state.mood ? `Mood set: ${labelMood(state.mood)}` : "Mood cleared");
}

function setMode(mode) {
  state.mode = mode;
}

function quickSearch(value) {
  const foodInput = document.getElementById("food");
  if (foodInput) {
    foodInput.value = value;
  }
  findFood();
}

function showLoading(message = "Loading your options...") {
  const results = document.getElementById("results");
  results.innerHTML = `
    <div class="loading-box">
      <div class="big">⏳ ${message}</div>
      <div class="small">Finding good restaurant options near you</div>
    </div>
  `;
}

function showError(message) {
  const results = document.getElementById("results");
  results.innerHTML = `<div class="error-box">${message}</div>`;
}

function fakeLeadCapture() {
  const email = document.getElementById("leadEmail");
  const leadMessage = document.getElementById("leadMessage");

  if (!email || !leadMessage) return;

  if (!email.value.trim()) {
    leadMessage.textContent = "Please enter an email address.";
    return;
  }

  leadMessage.textContent = `Saved placeholder signup for ${email.value.trim()}. Connect this to your real email system later.`;
  email.value = "";
}

// -------------------------
// Time helpers
// -------------------------
function getTimeContext() {
  const hour = new Date().getHours();

  if (hour < 11) return "morning";
  if (hour < 15) return "lunch";
  if (hour < 19) return "evening";
  return "late night";
}

function getTimeLabel() {
  const time = getTimeContext();

  if (time === "morning") return "🌅 Morning suggestions";
  if (time === "lunch") return "🌞 Lunch suggestions";
  if (time === "evening") return "🌆 Evening suggestions";
  return "🌙 Late-night suggestions";
}

// -------------------------
// Intelligence / scoring
// -------------------------
function scoreRestaurant(r) {
  let score = 0;

  const name = (r.name || "").toLowerCase();
  const type = (r.type || "").toLowerCase();
  const why = (r.why || "").toLowerCase();
  const text = `${name} ${type} ${why}`;

  const rating = parseFloat(r.rating);
  if (!isNaN(rating)) score += rating * 2;

  if (
    state.mood === "cheap" &&
    (text.includes("cheap") || text.includes("value") || text.includes("budget"))
  ) {
    score += 4;
  }

  if (
    state.mood === "date" &&
    (text.includes("romantic") || text.includes("cozy") || text.includes("fine") || text.includes("date"))
  ) {
    score += 4;
  }

  if (
    state.mood === "fast" &&
    (text.includes("fast") || text.includes("quick") || text.includes("grab"))
  ) {
    score += 4;
  }

  if (
    state.mood === "healthy" &&
    (text.includes("healthy") || text.includes("fresh") || text.includes("salad"))
  ) {
    score += 4;
  }

  const time = getTimeContext();

  if (time === "morning" && (text.includes("breakfast") || text.includes("coffee") || text.includes("bagel"))) {
    score += 2;
  }

  if (time === "lunch" && (text.includes("lunch") || text.includes("sandwich") || text.includes("quick"))) {
    score += 2;
  }

  if (time === "evening" && (text.includes("dinner") || text.includes("restaurant") || text.includes("steak") || text.includes("italian"))) {
    score += 2;
  }

  if (time === "late night" && (text.includes("late") || text.includes("snack") || text.includes("burger") || text.includes("taco"))) {
    score += 2;
  }

  if (isNaN(rating)) score += 0.5;

  return score;
}

// -------------------------
// Result action helpers
// -------------------------
function buildGoogleSearchUrl(name, location) {
  const q = [name, location].filter(Boolean).join(" ");
  return `https://www.google.com/search?q=${encodeURIComponent(q)}`;
}

function buildGoogleMapsUrl(name, location) {
  const q = [name, location].filter(Boolean).join(" ");
  return `https://www.google.com/maps/search/${encodeURIComponent(q)}`;
}

function normalizeRestaurant(r, location) {
  return {
    name: r.name || "Restaurant",
    type: r.type || "Restaurant",
    rating: r.rating || "No rating",
    why: r.why || "A strong option based on your search.",
    website: r.website || "",
    phone: r.phone || "",
    address: r.address || "",
    mapsUrl: r.mapsUrl || buildGoogleMapsUrl(r.name || "restaurant", location),
    detailsUrl: r.detailsUrl || buildGoogleSearchUrl(r.name || "restaurant", location),
    location: location || ""
  };
}

// -------------------------
// Favorites rendering
// -------------------------
function renderFavorites() {
  const wrap = document.getElementById("favoritesList");
  if (!wrap) return;

  if (!state.favorites.length) {
    wrap.innerHTML = `<div class="empty-mini">No favorites saved yet.</div>`;
    return;
  }

  wrap.innerHTML = state.favorites.map(r => {
    const key = getFavoriteKey(r);
    return `
      <article class="favorite-card">
        <h3 class="favorite-name">${r.name}</h3>
        <div class="favorite-meta">
          <span>🍴 ${r.type || "Restaurant"}</span>
          <span>⭐ ${r.rating || "No rating"}</span>
        </div>
        <p class="favorite-why">${r.why || ""}</p>
        <div class="card-actions">
          <a class="card-action primary" href="${r.detailsUrl}" target="_blank" rel="noopener noreferrer">View details</a>
          <a class="card-action" href="${r.mapsUrl}" target="_blank" rel="noopener noreferrer">Directions</a>
          ${r.website ? `<a class="card-action" href="${r.website}" target="_blank" rel="noopener noreferrer">Website</a>` : ""}
          <button class="favorite-btn" type="button" onclick="removeFavoriteByKey('${escapeForJs(key)}')">Remove</button>
        </div>
      </article>
    `;
  }).join("");
}

function escapeForJs(value) {
  return String(value).replace(/'/g, "\\'");
}

// -------------------------
// API calls
// -------------------------
async function findFood() {
  setMode("search");

  const food = document.getElementById("food").value.trim();
  const location = document.getElementById("location").value.trim();

  if (!food && !location) {
    showError("Please enter a food or a location.");
    setStatus("Waiting for input");
    return;
  }

  setStatus("Searching...");
  showLoading("Searching for food");

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: `(${getTimeContext()}) ${state.mood ? state.mood + " style " : ""}food for: ${food || "something good"}`,
        location: location || "near me"
      })
    });

    if (!response.ok) {
      throw new Error(`API error ${response.status}`);
    }

    const data = await response.json();
    renderResults(data, food ? `Best matches for "${food}"` : "Best matches", location);
    setStatus(`Done${state.mood ? " • Mood: " + labelMood(state.mood) : ""}`);
  } catch (err) {
    console.error(err);
    showError("Something went wrong getting restaurant results. Try again.");
    setStatus("Search failed");
  }
}

async function whatShouldIEat() {
  setMode("decision");

  const location = document.getElementById("location").value.trim();
  const food = document.getElementById("food").value.trim();

  setStatus("Thinking...");
  showLoading("Deciding what you should eat right now");

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: `(${getTimeContext()}) Pick the 5 best restaurant options right now. ${state.mood ? "Lean " + state.mood + ". " : ""}${food ? "The user may want " + food + ". " : ""}Focus on strong choices, value, and variety.`,
        location: location || "near me"
      })
    });

    if (!response.ok) {
      throw new Error(`API error ${response.status}`);
    }

    const data = await response.json();
    renderResults(data, "Top picks right now", location);
    setStatus(`Decision ready${state.mood ? " • Mood: " + labelMood(state.mood) : ""}`);
  } catch (err) {
    console.error(err);
    showError("Could not generate food suggestions. Try again.");
    setStatus("Decision failed");
  }
}

// -------------------------
// Rendering
// -------------------------
function renderResults(data, title, location = "") {
  const results = document.getElementById("results");

  if (!data || !data.restaurants || data.restaurants.length === 0) {
    results.innerHTML = `
      <div class="empty-state">
        <h2>No results found</h2>
        <p>Try another food, mood, or location.</p>
      </div>
    `;
    return;
  }

  const list = data.restaurants
    .slice()
    .sort((a, b) => scoreRestaurant(b) - scoreRestaurant(a))
    .slice(0, 5)
    .map(r => normalizeRestaurant(r, location));

  results.innerHTML = `
    <div class="results-header">
      <h2>${title}</h2>
      <p>${getTimeLabel()}${state.mood ? ` • Mood: ${labelMood(state.mood)}` : ""}</p>
    </div>

    <div class="results-list">
      ${list.map((r, i) => {
        const isTop = i === 0;
        const favorite = isFavorite(r);

        return `
          <article class="card ${isTop ? "top-pick" : ""}">
            <div class="card-rank">
              ${isTop ? "🔥 Top Pick" : `#${i + 1}`}
            </div>

            <h3 class="card-name">${r.name}</h3>

            <div class="card-meta">
              <span>🍴 ${r.type}</span>
              <span>⭐ ${r.rating}</span>
            </div>

            <p class="card-why">${r.why}</p>

            <div class="card-actions">
              <a class="card-action primary" href="${r.detailsUrl}" target="_blank" rel="noopener noreferrer">View details</a>
              <a class="card-action" href="${r.mapsUrl}" target="_blank" rel="noopener noreferrer">Directions</a>
              ${r.website ? `<a class="card-action" href="${r.website}" target="_blank" rel="noopener noreferrer">Website</a>` : ""}
              ${r.phone ? `<a class="card-action" href="tel:${r.phone}">Call</a>` : ""}
              <button
                class="favorite-btn ${favorite ? "saved" : ""}"
                type="button"
                onclick='toggleFavorite(${JSON.stringify(r).replace(/'/g, "&apos;")})'
              >
                ${favorite ? "Saved ❤️" : "Save ❤️"}
              </button>
            </div>
          </article>
        `;
      }).join("")}
    </div>
  `;
}

function toggleFavorite(rawRestaurant) {
  const restaurant = typeof rawRestaurant === "string"
    ? JSON.parse(rawRestaurant)
    : rawRestaurant;

  if (isFavorite(restaurant)) {
    removeFavoriteByKey(getFavoriteKey(restaurant));
  } else {
    addFavorite(restaurant);
  }

  // refresh save buttons if current results are showing
  const results = document.getElementById("results");
  if (results && results.innerHTML.trim()) {
    // no-op unless user searches again; favorites panel updates immediately
  }
}
