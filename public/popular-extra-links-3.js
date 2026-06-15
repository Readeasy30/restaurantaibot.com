(() => {
  const main = document.querySelector('main.wrap');
  if (!main || document.querySelector('[data-extra-place-links-3]')) return;

  const section = document.createElement('section');
  section.setAttribute('data-extra-place-links-3', 'true');
  section.innerHTML = `
    <h2>More airport, bus station, and ferry searches</h2>
    <p>Use these when you need food or coffee near an airport, bus station, or ferry terminal.</p>
    <div class="grid">
      <div class="card"><h3>Coffee near airport</h3><p>Quick coffee, breakfast coffee, cafes, pastries, affordable coffee, and airport-area coffee.</p><a href="/coffee-near-airport.html">Open airport coffee</a></div>
      <div class="card"><h3>Dessert near airport</h3><p>Dessert shops, coffee and dessert, pastries, affordable dessert, and airport-area dessert.</p><a href="/dessert-near-airport.html">Open airport dessert</a></div>
      <div class="card"><h3>Food near bus station</h3><p>Lunch, coffee, breakfast, quick food, cheap eats, dinner, and bus-station-area food.</p><a href="/food-near-bus-station.html">Open bus station food</a></div>
      <div class="card"><h3>Coffee near bus station</h3><p>Cafes, quick coffee, breakfast coffee, pastries, cheap coffee, and bus-station-area coffee.</p><a href="/coffee-near-bus-station.html">Open bus station coffee</a></div>
      <div class="card"><h3>Restaurants near ferry terminal</h3><p>Lunch, coffee, seafood, quick food, cheap eats, dinner, and ferry-terminal-area restaurants.</p><a href="/restaurants-near-ferry-terminal.html">Open ferry terminal restaurants</a></div>
    </div>
  `;

  const target = Array.from(main.querySelectorAll('section')).find((item) => item.textContent.includes('Go straight to search'));
  if (target) {
    main.insertBefore(section, target);
  } else {
    main.appendChild(section);
  }
})();
