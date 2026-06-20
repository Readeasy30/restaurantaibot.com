async function findFood() {
  const food = document.getElementById("food").value;
  const location = document.getElementById("location").value;
  const results = document.getElementById("results");

  results.innerHTML = "Searching...";

  try {
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
        <p>🍴 ${r.type || "Unknown type"}</p>
        <p>⭐ ${r.rating || "No rating"}</p>
        <p>${r.why || ""}</p>
      </div>
    `).join("");

  } catch (err) {
    results.innerHTML = "<p>Error getting results. Try again.</p>";
    console.error(err);
  }
}
