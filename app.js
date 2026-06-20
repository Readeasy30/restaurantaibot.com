function renderResults(data, title) {
  const results = document.getElementById("results");

  if (!data || !data.restaurants || data.restaurants.length === 0) {
    results.innerHTML = "<p>No results found.</p>";
    return;
  }

  results.innerHTML = `
    <h2>${title}</h2>
  ` + data.restaurants.slice(0, 5).map((r, i) => {

    const isTop = i === 0;

    return `
      <div class="card" style="
        border: ${isTop ? "2px solid #f97316" : "1px solid #334155"};
        background: ${isTop ? "#1f2937" : "#111827"};
        transform: ${isTop ? "scale(1.02)" : "scale(1)"};
      ">
        <h3>
          ${isTop ? "🔥 TOP PICK — " : "#"+(i+1)+" "}
          ${r.name}
        </h3>

        <p>🍴 ${r.type || "Restaurant"}</p>
        <p>⭐ ${r.rating || "No rating"}</p>

        <p style="opacity:0.9">
          ${r.why || ""}
        </p>
      </div>
    `;
  }).join("");
}

