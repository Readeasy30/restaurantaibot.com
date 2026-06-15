(() => {
  const main = document.querySelector('main.wrap');
  if (!main || document.querySelector('[data-extra-place-links-2]')) return;

  const section = document.createElement('section');
  section.setAttribute('data-extra-place-links-2', 'true');
  section.innerHTML = `
    <h2>More airport, arena, mall, and convention searches</h2>
    <p>Use these when you need food near an airport, sports arena, convention center, or mall food court.</p>
    <div class="grid">
      <div class="card"><h3>Food near sports arena</h3><p>Dinner, lunch, coffee, family food, group meals, cheap eats, and arena-area restaurants.</p><a href="/food-near-sports-arena.html">Open sports arena food</a></div>
      <div class="card"><h3>Restaurants near mall food court</h3><p>Lunch, coffee, dessert, family meals, cheap eats, and mall-area restaurants.</p><a href="/restaurants-near-mall-food-court.html">Open mall food court search</a></div>
      <div class="card"><h3>Breakfast near airport</h3><p>Coffee, quick breakfast, cheap breakfast, family breakfast, pastries, and airport-area restaurants.</p><a href="/breakfast-near-airport.html">Open airport breakfast</a></div>
      <div class="card"><h3>Lunch near airport</h3><p>Quick lunch, cheap lunch, healthy lunch, coffee, family meals, and airport-area restaurants.</p><a href="/lunch-near-airport.html">Open airport lunch</a></div>
      <div class="card"><h3>Coffee near convention center</h3><p>Cafes, quick coffee, breakfast coffee, pastries, quiet coffee, and convention-area coffee.</p><a href="/coffee-near-convention-center.html">Open convention coffee</a></div>
    </div>
  `;

  const target = Array.from(main.querySelectorAll('section')).find((item) => item.textContent.includes('Go straight to search'));
  if (target) {
    main.insertBefore(section, target);
  } else {
    main.appendChild(section);
  }
})();
