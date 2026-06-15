(() => {
  const main = document.querySelector('main.wrap');
  if (!main || document.querySelector('[data-extra-place-links]')) return;

  const section = document.createElement('section');
  section.setAttribute('data-extra-place-links', 'true');
  section.innerHTML = `
    <h2>More helpful place searches</h2>
    <p>Use these when you are near a campus, medical area, office area, or hotel and need a simple food search.</p>
    <div class="grid">
      <div class="card"><h3>Restaurants near college campus</h3><p>Lunch, coffee, cheap eats, pizza, tacos, and group food near campus areas.</p><a href="/restaurants-near-college-campus.html">Open campus restaurants</a></div>
      <div class="card"><h3>Restaurants near hospital</h3><p>Coffee, lunch, family meals, quick food, and nearby restaurant searches.</p><a href="/restaurants-near-hospital.html">Open hospital-area restaurants</a></div>
      <div class="card"><h3>Restaurants near office building</h3><p>Lunch, coffee, business lunch, quick food, and group meals near office areas.</p><a href="/restaurants-near-office-building.html">Open office-area restaurants</a></div>
      <div class="card"><h3>Coffee near hotel</h3><p>Cafes, breakfast coffee, quick coffee, pastries, brunch, and hotel-area coffee.</p><a href="/coffee-near-hotel.html">Open coffee near hotel</a></div>
      <div class="card"><h3>Healthy food near me</h3><p>Salads, bowls, soup, grilled food, vegetarian meals, lunch, and dinner ideas.</p><a href="/healthy-food-near-me.html">Open healthy food</a></div>
    </div>
  `;

  const goSearch = Array.from(main.querySelectorAll('section')).find((item) => item.textContent.includes('Go straight to search'));
  if (goSearch) {
    main.insertBefore(section, goSearch);
  } else {
    main.appendChild(section);
  }
})();
