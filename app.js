// ==========================
// 🧠 APP STATE LAYER
// ==========================

const state = {
  mood: "",
  mode: "search", // search | decision
};

// ==========================
// 🎛️ MODE CONTROL
// ==========================

function setMood(selected) {
  state.mood = selected;
}

function setMode(newMode) {
  state.mode = newMode;
}

// ==========================
// 🍽️ MAIN SEARCH ENGINE
// ==========================

async function findFood() {
  setMode("search");

  const food = document.getElementById("food").value.trim();
  const location = document.getElementById("location").value.trim();
  const results = document.getElementById("results");

  if (!food && !location) {
    results.innerHTML = "<p>Please enter something.</p>";
    return;
  }

  results.innerHTML = "Searching...";

  try {
    const response = await fetch("https://restaurant-ai-api.wholelychit.workers.dev", {
      method: "POST",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify({
        query: `Find ${state.mood ? state.mood + " style " : ""}food for: ${food}`,
        location: location || "near me"
      })
    });

    if (!response.ok) throw new Error("API error " + response.status);

    const data = await response.json();

    renderResults(data, "Search Results");

  } catch (err) {
    console.error(err);
    results.innerHTML = "<p>Something went wrong.</p>";
  }
}

// ==========================
// 🤖 DECISION ENGINE
// ==========================

async function whatShouldIEat() {
  setMode("decision");

  const location = document.getElementById("location").value.trim();
  const results = document.getElementById("results");

  results.innerHTML = "Thinking... 🤔";

  try {
    const response = await fetch("https://restaurant-ai-api.wholelychit.workers.dev", {
      method: "POST",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify({
        query: "Pick the 3 best food options for tonight. Balance price, popularity, and variety.",
        location: location || "near me"
      })
    });

    if (!response.ok) throw new Error("API error " + response.status);

    const data = await response.json();

    renderResults(data, "Top Picks for Tonight");

  } catch (err) {
    console.error(err);
    results.innerHTML = "<p>Could not generate suggestions.</p>";
  }
}

// ==========================
// 🧩 RENDER ENGINE (ONE PLACE ONLY)
// ==========================

function renderResults(data, title) {
  const results = document.getElementById("results");

  if (!data || !data.restaurants || data.restaurants.length === 0) {
    results.innerHTML = "<p>No results found.</p>";
    return;
  }

  results.innerHTML = `
    <h2>${title}</h2>
  ` + data.restaurants.slice(0, 5).map((r, i) => `
    <div class="card">
      <h3>#${i + 1} ${r.name}</h3>
      <p>🍴 ${r.type || "Restaurant"}</p>
      <p>⭐ ${r.rating || "No rating"}</p>
      <p>${r.why || ""}</p>
    </div>
  `).join("");
}
