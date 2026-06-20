async function findFood() {
  const food = document.getElementById("food").value;
  const location = document.getElementById("location").value;
  const results = document.getElementById("results");

  results.innerHTML = "Searching...";

  try {
    // 🔥 YOUR API GOES HERE (replace URL below)
    const response = await fetch("https://restaurant-ai-api.wholelychit.workers.dev", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: food,
        location: location
      })
    });

    const data = await response.json();

    // EXPECTED FORMAT:
    // data.restaurants = [{name, type, rating, why}]

    results.innerHTML = data.restaurants.map(r => `
      <div class="card">
        <h3>${r.name}</h3>
        <p>🍴 ${r.type}</p>
        <p>⭐ ${r.rating}</p>
        <p>${r.why}</p>
      </div>
    `).join("");

  } catch (err) {
    results.innerHTML = "Error getting results. Check API.";
    console.error(err);
  }
}
🎨 STEP 3 — CLEAN UI
