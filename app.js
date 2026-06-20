function scoreRestaurant(r) {
  let score = 0;

  const name = (r.name || "").toLowerCase();
  const type = (r.type || "").toLowerCase();
  const why = (r.why || "").toLowerCase();
  const text = name + " " + type + " " + why;

  // -------------------------
  // ⭐ BASE QUALITY (more stable)
  // -------------------------
  const rating = parseFloat(r.rating);
  if (!isNaN(rating)) score += rating * 2;

  // -------------------------
  // 🧠 MOOD SIGNALS (broader matching)
  // -------------------------
  const mood = state?.mood || "";

  if (mood === "cheap" && (text.includes("cheap") || text.includes("value") || text.includes("budget"))) {
    score += 4;
  }

  if (mood === "date" && (text.includes("romantic") || text.includes("cozy") || text.includes("fine"))) {
    score += 4;
  }

  if (mood === "fast" && (text.includes("fast") || text.includes("quick") || text.includes("grab"))) {
    score += 4;
  }

  if (mood === "healthy" && (text.includes("healthy") || text.includes("fresh") || text.includes("salad"))) {
    score += 4;
  }

  // -------------------------
  // ⏱ TIME SIGNALS (smarter + less fragile)
  // -------------------------
  const hour = new Date().getHours();

  if (hour < 11 && (text.includes("breakfast") || text.includes("coffee"))) {
    score += 2;
  }

  if (hour >= 11 && hour < 15 && (text.includes("lunch") || text.includes("sandwich"))) {
    score += 2;
  }

  if (hour >= 17 && (text.includes("dinner") || text.includes("restaurant"))) {
    score += 2;
  }

  if (hour >= 21 && (text.includes("late") || text.includes("snack"))) {
    score += 2;
  }

  // -------------------------
  // 🍴 DEFAULT STABILITY BOOST
  // -------------------------
  if (!r.rating) score += 0.5;

  return score;
}
