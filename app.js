const state = {
  mood: "",
  mode: "search"
};

const API_URL = "https://restaurant-ai-api.wholelychit.workers.dev";

// -------------------------
// UI helpers
// -------------------------
function setStatus(message) {
  const statusBar = document.getElementById("statusBar");
  if (statusBar) statusBar.textContent = message;
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

function labelMood(mood) {
  switch (mood) {
    case "cheap": return "Cheap";
    case "date": return "Date Night";
    case "fast": return "Fast";
    case "healthy": return "Healthy";
    default: return "None";
  }
}

function setMode(mode) {
  state.mode = mode;
}

function quickSearch(value) {
  const foodInput = document.getElementById("food");
  if (foodInput) foodInput.value = value;
  findFood();
}

function showLoading(message = "Loading your options...") {
  const results = document.getElementById("results");
  results.innerHTML = `
    <div class="loading-box">
      <div class="big">⏳ ${message}</div>
      <div class="small">Finding good options near you</div>
    </div>
  `;
}

function showError(message) {
  const results = document.getElementById("results");
  results.innerHTML = `<div class="error-box">${message}</div>`;
}

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

  // Base quality
  const rating = parseFloat(r.rating);
  if (!isNaN(rating)) score += rating * 2;

  // Mood boosts
  if (state.mood === "cheap" && (text.includes("cheap") || text.includes("value") || text.includes("budget"))) {
    score += 4;
  }

  if (state.mood === "date" && (text.includes("romantic") || text.includes("cozy") || text.includes("fine") || text.includes("date"))) {
    score += 4;
  }

  if (state.mood === "fast" && (text.includes("fast") || text.includes("quick") || text.includes("grab"))) {
    score += 4;
  }

  if (state.mood === "healthy" && (text.includes("healthy") || text.includes("fresh") || text.includes("salad"))) {
    score += 4;
  }

  // Time boosts
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

  // Mild fallback if rating missing
  if (isNaN(rating)) score += 0.5;

  return score;
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
    renderResults(data, food ? `Best matches for "${food}"` : "Best matches");
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
  showLoading("Deciding what you should eat tonight");

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
    renderResults(data, "Top picks right now");
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
function renderResults(data, title) {
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
    .slice(0, 5);

  results.innerHTML = `
    <div class="results-header">
      <h2>${title}</h2>
      <p>${getTimeLabel()}${state.mood ? ` • Mood: ${labelMood(state.mood)}` : ""}</p>
    </div>
    <div class="results-list">
      ${list.map((r, i) => {
        const isTop = i === 0;
        return `
          <article class="card ${isTop ? "top-pick" : ""}">
            <div class="card-rank">
              ${isTop ? "🔥 Top Pick" : `#${i + 1}`}
            </div>
            <h3 class="card-name">${r.name || "Restaurant"}</h3>
            <div class="card-meta">
              <span>🍴 ${r.type || "Restaurant"}</span>
              <span>⭐ ${r.rating || "No rating"}</span>
            </div>
            <p class="card-why">${r.why || "A strong option based on your search."}</p>
          </article>
        `;
      }).join("")}
    </div>
  `;
}
