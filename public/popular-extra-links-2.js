(() => {
  const main = document.querySelector('main.wrap');
  if (!main || document.querySelector('[data-extra-place-links-2]')) return;

  const section = document.createElement('section');
  section.setAttribute('data-extra-place-links-2', 'true');
  section.innerHTML = `
    <h2>More market, boardwalk, airport, station, terminal, arena, mall, and convention searches</h2>
    <p>Use these when you need simple food searches near travel, market, and event places.</p>
    <div class="grid">
      <div class="card"><h3>Restaurants near farmers market</h3><p>Lunch, coffee, breakfast, local food, dessert, and market-area restaurants.</p><a href="/restaurants-near-farmers-market.html">Open farmers market restaurants</a></div>
      <div class="card"><h3>Coffee near farmers market</h3><p>Cafes, quick coffee, breakfast coffee, pastries, local coffee, and market-area coffee.</p><a href="/coffee-near-farmers-market.html">Open farmers market coffee</a></div>
      <div class="card"><h3>Food near public market</h3><p>Lunch, coffee, breakfast, local food, dessert, and public-market-area restaurants.</p><a href="/food-near-public-market.html">Open public market food</a></div>
      <div class="card"><h3>Restaurants near boardwalk</h3><p>Lunch, coffee, seafood, dessert, family food, and boardwalk-area restaurants.</p><a href="/restaurants-near-boardwalk.html">Open boardwalk restaurants</a></div>
      <div class="card"><h3>Dessert near boardwalk</h3><p>Dessert shops, coffee and dessert, pastries, family dessert, and boardwalk-area dessert.</p><a href="/dessert-near-boardwalk.html">Open boardwalk dessert</a></div>
      <div class="card"><h3>Food near cruise terminal</h3><p>Lunch, coffee, seafood, quick food, dinner, and cruise-terminal restaurants.</p><a href="/food-near-cruise-terminal.html">Open cruise terminal food</a></div>
      <div class="card"><h3>Coffee near ferry terminal</h3><p>Cafes, quick coffee, breakfast coffee, pastries, and ferry-terminal coffee.</p><a href="/coffee-near-ferry-terminal.html">Open ferry terminal coffee</a></div>
      <div class="card"><h3>Breakfast near bus station</h3><p>Coffee, quick breakfast, pastries, diners, and bus-station-area breakfast.</p><a href="/breakfast-near-bus-station.html">Open bus station breakfast</a></div>
      <div class="card"><h3>Lunch near bus station</h3><p>Quick lunch, coffee, healthy lunch, sandwiches, and bus-station-area restaurants.</p><a href="/lunch-near-bus-station.html">Open bus station lunch</a></div>
      <div class="card"><h3>Restaurants near college football stadium</h3><p>Lunch, dinner, coffee, group food, family food, and stadium-area restaurants.</p><a href="/restaurants-near-college-football-stadium.html">Open college stadium food</a></div>
      <div class="card"><h3>Coffee near airport</h3><p>Quick coffee, breakfast coffee, cafes, pastries, and airport-area coffee.</p><a href="/coffee-near-airport.html">Open airport coffee</a></div>
      <div class="card"><h3>Dessert near airport</h3><p>Dessert shops, coffee and dessert, pastries, and airport-area dessert.</p><a href="/dessert-near-airport.html">Open airport dessert</a></div>
      <div class="card"><h3>Food near bus station</h3><p>Lunch, coffee, breakfast, quick food, dinner, and bus-station-area food.</p><a href="/food-near-bus-station.html">Open bus station food</a></div>
      <div class="card"><h3>Coffee near bus station</h3><p>Cafes, quick coffee, breakfast coffee, pastries, and bus-station-area coffee.</p><a href="/coffee-near-bus-station.html">Open bus station coffee</a></div>
      <div class="card"><h3>Restaurants near ferry terminal</h3><p>Lunch, coffee, seafood, quick food, dinner, and ferry-terminal restaurants.</p><a href="/restaurants-near-ferry-terminal.html">Open ferry terminal restaurants</a></div>
      <div class="card"><h3>Food near sports arena</h3><p>Dinner, lunch, coffee, family food, group meals, and arena-area restaurants.</p><a href="/food-near-sports-arena.html">Open sports arena food</a></div>
      <div class="card"><h3>Restaurants near mall food court</h3><p>Lunch, coffee, dessert, family meals, and mall-area restaurants.</p><a href="/restaurants-near-mall-food-court.html">Open mall food court search</a></div>
      <div class="card"><h3>Breakfast near airport</h3><p>Coffee, quick breakfast, family breakfast, pastries, and airport-area restaurants.</p><a href="/breakfast-near-airport.html">Open airport breakfast</a></div>
      <div class="card"><h3>Lunch near airport</h3><p>Quick lunch, healthy lunch, coffee, family meals, and airport-area restaurants.</p><a href="/lunch-near-airport.html">Open airport lunch</a></div>
      <div class="card"><h3>Coffee near convention center</h3><p>Cafes, quick coffee, breakfast coffee, pastries, and convention-area coffee.</p><a href="/coffee-near-convention-center.html">Open convention coffee</a></div>
    </div>
  `;

  const target = Array.from(main.querySelectorAll('section')).find((item) => item.textContent.includes('Go straight to search'));
  if (target) {
    main.insertBefore(section, target);
  } else {
    main.appendChild(section);
  }
})();
