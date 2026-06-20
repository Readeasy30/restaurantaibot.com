const API_URL = "https://restaurant-ai-api.wholelychit.workers.dev";
const FAVORITES_KEY = "restaurantAiFavorites";

const state = {
  mood: "",
  favorites: [],
  lastResults: [],
  lastSearch: {
    food: "",
    location: "",
    mode: "search"
  }
};

// ------------------------------
// STARTUP
// ------------------------------
document.addEventListener("DOMContentLoaded", () => {
  state.favorites = loadFavorites();
  renderFavorites();
  setStatus("Ready");
});

// ------------------------------
// STORAGE
// ------------------------------
function loadFavorites() {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    return [];
  }
}

function saveFavorites() {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(state.favorites));
}

function clearFavorites() {
  state.favorites = [];
  saveFavorites();
  renderFavorites();
  refreshVisibleFavoriteButtons();
  setStatus("Favorites cleared");
}

function favoriteKey(restaurant) {
  const name = (restaurant.name || "").trim().toLowerCase();
  const location = (restaurant.location || restaurant.address || "").trim().toLowerCase();
  return `${name}|${location}`;
}

function isFavorite(restaurant) {
  const key = favoriteKey(restaurant);
  return state.favorites.some(item => favoriteKey(item) === key);
}

function addFavorite(restaurant) {
  if (isFavorite(restaurant)) return;
  state.favorites.unshift(restaurant);
  saveFavorites();
  renderFavorites();
  refreshVisibleFavoriteButtons();
  setStatus(`Saved favorite: ${restaurant.name || "Restaurant"}`);
}

function removeFavoriteByKey(key) {
  state.favorites = state.favorites.filter(item => favoriteKey(item) !== key);
  saveFavorites();
  renderFavorites();
  refreshVisibleFavoriteButtons();
  setStatus("Favorite removed");
}

function toggleFavoriteByIndex(index) {
  const restaurant = state.lastResults[index];
  if (!restaurant) return;

  const key = favoriteKey(restaurant);

  if (isFavorite(restaurant)) {
    removeFavoriteByKey(key);
  } else {
    addFavorite(restaurant);
  }
}

// ------------------------------
// STATUS / UI HELPERS
// ------------------------------
function setStatus(message) {
  const el = document.getElementById("statusBar");
  if (el) el.textContent = message;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
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
      return "";
  }
}

function setMood(mood) {
  state.mood = state.mood === mood ? "" : mood;

  document.querySelectorAll("#moods button").forEach(btn => {
    const btnMood = btn.dataset.mood || "";
    btn.classList.toggle("active", btnMood === state.mood);
  });

  setStatus(state.mood ? `Mood set: ${labelMood(state.mood)}` : "Mood cleared");
}

function quickSearch(foodValue) {
  const foodInput = document.getElementById("food");
  if (foodInput) foodInput.value = foodValue;
  findFood();
}

function showLoading(message = "Loading your options...") {
  const results = document.getElementById("results");
  if (!results) return;

  results.innerHTML = `
    <div class="loading-box">
      <div class="big">⏳ ${escapeHtml(message)}</div>
      <div class="small">Finding restaurant options for you...</div>
    </div>
  `;
}

function showError(message) {
  const results = document.getElementById("results");
  if (!results) return;
  results.innerHTML = `<div class="error-box">${escapeHtml(message)}</div>`;
}

// ------------------------------
// LEAD PLACEHOLDERS
// ------------------------------
function fakeLeadCapture() {
  const emailInput = document.getElementById("leadEmail");
  const msg = document.getElementById("leadMessage");

  if (!emailInput || !msg) return;

  const email = emailInput.value.trim();
  if (!email) {
    msg.textContent = "Please enter an email address.";
    return;
  }

  msg.textContent = `Saved placeholder signup for ${email}. Connect this to your real email system later.`;
  emailInput.value = "";
}

function fakeOwnerLead() {
  const ownerName = document.getElementById("ownerName");
  const ownerEmail = document.getElementById("ownerEmail");
  const msg = document.getElementById("ownerLeadMessage");

  if (!ownerName || !ownerEmail || !msg) return;

  const name = ownerName.value.trim();
  const email = ownerEmail.value.trim();

  if (!name || !email) {
    msg.textContent = "Please enter restaurant name and email.";
    return;
  }

  msg.textContent = `Saved placeholder lead for ${name}. Connect this form to your real lead system later.`;
  ownerName.value = "";
  ownerEmail.value = "";
}

// ------------------------------
// TIME HELPERS
// ------------------------------
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

// ------------------------------
// URL HELPERS
// ------------------------------
function buildGoogleSearchUrl(name, location) {
  const q = [name, location].filter(Boolean).join(" ");
  return `https://www.google.com/search?q=${encodeURIComponent(q)}`;
}

function buildGoogleMapsUrl(name, location) {
  const q = [name, location].filter(Boolean).join(" ");
  return `https://www.google.com/maps/search/${encodeURIComponent(q)}`;
}

// ------------------------------
// NORMALIZE RESTAURANT DATA
// ------------------------------
function normalizeRestaurant(raw, fallbackLocation = "") {
  const restaurant = {
    name: raw?.name || "Restaurant",
    type: raw?.type || raw?.cuisine || "Restaurant",
    rating: raw?.rating || "No rating",
    why: raw?.why || "A strong option based on your search.",
    address: raw?.address || "",
    phone: raw?.phone || "",
    website: raw?.website || "",
    price: raw?.price || "",
    location: fallbackLocation || raw?.location || "",
    detailsUrl: raw?.detailsUrl || "",
    mapsUrl: raw?.mapsUrl || ""
  };

  if (!restaurant.detailsUrl) {
    restaurant.detailsUrl = buildGoogleSearchUrl(
      restaurant.name,
      restaurant.location || restaurant.address
    );
  }

  if (!restaurant.mapsUrl) {
    restaurant.mapsUrl = buildGoogleMapsUrl(
      restaurant.name,
      restaurant.location || restaurant.address
    );
  }

  return restaurant;
}

// ------------------------------
// SCORING
// ------------------------------
function scoreRestaurant(r) {
  let score = 0;

  const rating = parseFloat(String(r.rating).replace(/[^\d.]/g, ""));
  if (!Number.isNaN(rating)) score += rating * 2;

  const text = [
    r.name,
    r.type,
    r.why,
    r.address,
    r.price
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  if (state.mood === "cheap" && (text.includes("cheap") || text.includes("budget") || text.includes("value") || text.includes("$"))) {
    score += 4;
  }

  if (state.mood === "date" && (text.includes("date") || text.includes("romantic") || text.includes("cozy") || text.includes("steak") || text.includes("italian"))) {
    score += 4;
  }

  if (state.mood === "fast" && (text.includes("fast") || text.includes("quick") || text.includes("grab") || text.includes("takeout"))) {
    score += 4;
  }

  if (state.mood === "healthy" && (text.includes("healthy") || text.includes("fresh") || text.includes("salad") || text.includes("grill"))) {
    score += 4;
  }

  const time = getTimeContext();

  if (time === "morning" && (text.includes("breakfast") || text.includes("coffee") || text.includes("bagel"))) {
    score += 2;
  }

  if (time === "lunch" && (text.includes("lunch") || text.includes("sandwich") || text.includes("quick"))) {
    score += 2;
  }

  if (time === "evening" && (text.includes("dinner") || text.includes("steak") || text.includes("italian") || text.includes("restaurant"))) {
    score += 2;
  }

  if (time === "late night" && (text.includes("late") || text.includes("burger") || text.includes("taco") || text.includes("pizza"))) {
    score += 2;
  }

  return score;
}

// ------------------------------
// SEARCH ACTIONS
// ------------------------------
async function findFood() {
  const food = (document.getElementById("food")?.value || "").trim();
  const location = (document.getElementById("location")?.value || "").trim();

  if (!food && !location) {
    showError("Please enter a food or a location.");
    setStatus("Waiting for input");
    return;
  }

  state.lastSearch = {
    food,
    location,
    mode: "search"
  };

  showLoading("Searching for restaurants");
  setStatus("Searching...");

  try {
    const query = buildSearchPrompt(food, false);

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query,
        location: location || "near me"
      })
    });

    if (!response.ok) {
      throw new Error(`API error ${response.status}`);
    }

    const data = await response.json();
    renderResults(data, food ? `Best matches for "${food}"` : "Top restaurant matches", location);
    setStatus("Results ready");
  } catch (err) {
    console.error(err);
    showError("Error getting results. Try again.");
    setStatus("Search failed");
  }
}

async function whatShouldIEat() {
  const food = (document.getElementById("food")?.value || "").trim();
  const location = (document.getElementById("location")?.value || "").trim();

  state.lastSearch = {
    food,
    location,
    mode: "decision"
  };

  showLoading("Deciding what you should eat tonight");
  setStatus("Thinking...");

  try {
    const query = buildSearchPrompt(food, true);

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query,
        location: location || "near me"
      })
    });

    if (!response.ok) {
      throw new Error(`API error ${response.status}`);
    }

    const data = await response.json();
    renderResults(data, "Top picks right now", location);
    setStatus("Top picks ready");
  } catch (err) {
    console.error(err);
    showError("Could not generate food suggestions. Try again.");
    setStatus("Suggestion failed");
  }
}

function buildSearchPrompt(food, decisionMode = false) {
  const time = getTimeContext();
  const moodPart = state.mood ? `${labelMood(state.mood)} mood. ` : "";
  const foodPart = food ? `Food request: ${food}. ` : "";
  const decisionPart = decisionMode
    ? "Pick the best restaurant choices right now. Focus on strong local options."
    : "Find strong restaurant matches.";

  return `Time of day: ${time}. ${moodPart}${foodPart}${decisionPart}`;
}

// ------------------------------
// RESULTS RENDERING
// ------------------------------
function renderResults(data, title, location = "") {
  const results = document.getElementById("results");
  if (!results) return;

  if (!data || !Array.isArray(data.restaurants) || data.restaurants.length === 0) {
    state.lastResults = [];
    results.innerHTML = `
      <div class="empty-state">
        <h3>No results found</h3>
        <p>Try another food, mood, or location.</p>
      </div>
    `;
    return;
  }

  const normalized = data.restaurants
    .map(item => normalizeRestaurant(item, location))
    .sort((a, b) => scoreRestaurant(b) - scoreRestaurant(a))
    .slice(0, 8);

  state.lastResults = normalized;

  results.innerHTML = `
    <div class="results-header">
      <h3>${escapeHtml(title)}</h3>
      <p>${escapeHtml(getTimeLabel())}${state.mood ? ` • Mood: ${escapeHtml(labelMood(state.mood))}` : ""}</p>
    </div>

    <div class="results-list">
      ${normalized.map((restaurant, index) => renderRestaurantCard(restaurant, index)).join("")}
    </div>
  `;
}

function renderRestaurantCard(restaurant, index) {
  const topPick = index === 0;
  const saved = isFavorite(restaurant);

  const extraBits = [
    restaurant.price ? `<div>💵 ${escapeHtml(restaurant.price)}</div>` : "",
    restaurant.address ? `<div>📍 ${escapeHtml(restaurant.address)}</div>` : "",
    restaurant.phone ? `<div>📞 ${escapeHtml(restaurant.phone)}</div>` : ""
  ].filter(Boolean).join("");

  return `
    <article class="card ${topPick ? "top-pick" : ""}">
      <div class="card-rank">${topPick ? "🔥 Top Pick" : `#${index + 1}`}</div>

      <h3 class="card-name">${escapeHtml(restaurant.name)}</h3>

      <div class="card-meta">
        <span>🍴 ${escapeHtml(restaurant.type || "Restaurant")}</span>
        <span>⭐ ${escapeHtml(String(restaurant.rating || "No rating"))}</span>
      </div>

      <p class="card-why">${escapeHtml(restaurant.why || "")}</p>

      ${extraBits ? `<div class="card-extra">${extraBits}</div>` : ""}

      <div class="card-actions">
        <a class="card-action primary" href="${restaurant.detailsUrl}" target="_blank" rel="noopener noreferrer">View Details</a>
        <a class="card-action" href="${restaurant.mapsUrl}" target="_blank" rel="noopener noreferrer">Directions</a>
        ${restaurant.website ? `<a class="card-action" href="${escapeHtml(restaurant.website)}" target="_blank" rel="noopener noreferrer">Website</a>` : ""}
        <button
          class="favorite-btn ${saved ? "saved" : ""}"
          type="button"
          data-favorite-index="${index}"
          onclick="toggleFavoriteByIndex(${index})"
        >
          ${saved ? "Saved ❤️" : "Save ❤️"}
        </button>
      </div>
    </article>
  `;
}

// ------------------------------
// FAVORITES RENDERING
// ------------------------------
function renderFavorites() {
  const wrap = document.getElementById("favoritesList");
  if (!wrap) return;

  if (!state.favorites.length) {
    wrap.innerHTML = `<div class="empty-mini">No favorites saved yet.</div>`;
    return;
  }

  wrap.innerHTML = state.favorites.map(item => {
    const key = favoriteKey(item);

    const extraBits = [
      item.price ? `<div>💵 ${escapeHtml(item.price)}</div>` : "",
      item.address ? `<div>📍 ${escapeHtml(item.address)}</div>` : "",
      item.phone ? `<div>📞 ${escapeHtml(item.phone)}</div>` : ""
    ].filter(Boolean).join("");

    return `
      <article class="favorite-card">
        <h3 class="favorite-name">${escapeHtml(item.name || "Restaurant")}</h3>

        <div class="favorite-meta">
          <span>🍴 ${escapeHtml(item.type || "Restaurant")}</span>
          <span>⭐ ${escapeHtml(String(item.rating || "No rating"))}</span>
        </div>

        <p class="favorite-why">${escapeHtml(item.why || "")}</p>

        ${extraBits ? `<div class="favorite-extra">${extraBits}</div>` : ""}

        <div class="card-actions">
          <a class="card-action primary" href="${item.detailsUrl}" target="_blank" rel="noopener noreferrer">View Details</a>
          <a class="card-action" href="${item.mapsUrl}" target="_blank" rel="noopener noreferrer">Directions</a>
          ${item.website ? `<a class="card-action" href="${escapeHtml(item.website)}" target="_blank" rel="noopener noreferrer">Website</a>` : ""}
          <button class="favorite-btn" type="button" onclick="removeFavoriteByKey('${escapeHtml(key)}')">Remove</button>
        </div>
      </article>
    `;
  }).join("");
}

// ------------------------------
// FAVORITE BUTTON REFRESH
// ------------------------------
function refreshVisibleFavoriteButtons() {
  document.querySelectorAll("[data-favorite-index]").forEach(btn => {
    const index = Number(btn.getAttribute("data-favorite-index"));
    const restaurant = state.lastResults[index];
    if (!restaurant) return;

    const saved = isFavorite(restaurant);
    btn.classList.toggle("saved", saved);
    btn.textContent = saved ? "Saved ❤️" : "Save ❤️";
  });
}
