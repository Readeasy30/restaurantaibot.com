
// STATE (simple + stable)
// =========================

let mood = "";

function setMood(selected) {
  mood = selected;
}

// =========================
// MAIN FUNCTION
// =========================

async function findFood() {
  const food = document.getElementById("food").value.trim();
  const location = document.getElementById("location").value.trim();
  const results = document.getElementById("results");

  if (!food && !location) {
    results.innerHTML = "<p>Please enter something first.</p>";
    return;
  }

  results.innerHTML = "Searching...";

  try {
    const response = await fetch("https://restaurant-ai-api.wholelychit.workers.dev", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: `Find ${mood ? mood + " style " : ""}food for: ${food || "any food"}`,
        location: location || "near me"
      })
    });

    if (!response.ok) {
      throw new Error("API error: " + response.status);
    }

    const data = await response.json();

    if (!data || !data.restaurants || data.restaurants.length === 0) {
      results.innerHTML = "<p>No results found.</p>";
      return;
    }

    results.innerHTML = data.restaurants.map(r => `
      <div class="card">
        <h3>${r.name}</h3>
        <p>🍴 ${r.type || "Restaurant"}</p>
        <p>⭐ ${r.rating || "No rating"}</p>
        <p>${r.why || ""}</p>
      </div>
    `).join("");

  } catch (err) {
    console.error(err);
    results.innerHTML = "<p>Something went wrong. Try again.</p>";
  }
}
