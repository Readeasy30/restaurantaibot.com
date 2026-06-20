function renderResults(data, title) {
  const results = document.getElementById("results");

  if (!data || !data.restaurants || data.restaurants.length === 0) {
    results.innerHTML = "<p>No results found.</p>";
    return;
  }

  const list = data.restaurants.slice(0, 5);

  let timeLabel = "";
  try {
    timeLabel = getTimeLabel ? getTimeLabel() : "";
  } catch (e) {
    timeLabel = "";
  }

  results.innerHTML = `
    <div style="margin-bottom:12px;">
      <h2 style="margin:0;">${title}</h2>
      <p style="opacity:0.7; font-size:13px;">
        ${timeLabel}
      </p>
    </div>
  ` + list.map((r, i) => {

    const isTop = i === 0;

    return `
      <div class="card" style="
        margin-bottom:12px;
        padding:12px;
        border-radius:10px;
        border:${isTop ? "2px solid #f97316" : "1px solid #334155"};
        background:${isTop ? "#1f2937" : "#111827"};
      ">
        <div style="display:flex; align-items:center; gap:8px;">
          <h3 style="margin:0;">
            ${isTop ? "🔥 Top Pick" : "#" + (i + 1)}
          </h3>
        </div>

        <p style="margin:6px 0;">
          🍴 ${r.type || "Restaurant"}
        </p>

        <p style="margin:6px 0;">
          ⭐ ${r.rating || "No rating"}
        </p>

        <p style="opacity:0.85; margin:6px 0;">
          ${r.why || ""}
        </p>
      </div>
    `;
  }).join("");
}
