(() => {
  const main = document.querySelector('main.wrap');
  if (!main || document.querySelector('[data-extra-place-links]')) return;

  const section = document.createElement('section');
  section.setAttribute('data-extra-place-links', 'true');
  section.innerHTML = `
    <h2>More helpful place searches</h2>
    <p>Use these when you are near a hotel, campus, medical area, office area, downtown, theater, concert venue, station, or old-town district and need a simple food search.</p>
    <div class="grid">
      <div class="card"><h3>Restaurants near theater</h3><p>Dinner before shows, coffee, dessert, quick food, group meals, and theater-area restaurants.</p><a href="/restaurants-near-theater.html">Open theater restaurants</a></div>
      <div class="card"><h3>Restaurants near movie theater</h3><p>Dinner before movies, coffee, dessert, quick food, cheap eats, and family meals near movie theaters.</p><a href="/restaurants-near-movie-theater.html">Open movie-area restaurants</a></div>
      <div class="card"><h3>Restaurants near concert venue</h3><p>Dinner before concerts, coffee, dessert, quick food, group meals, and venue-area restaurants.</p><a href="/restaurants-near-concert-venue.html">Open concert venue restaurants</a></div>
      <div class="card"><h3>Dessert near me</h3><p>Ice cream, cake, pastries, coffee and dessert, family dessert, and city dessert searches.</p><a href="/dessert-near-me.html">Open dessert search</a></div>
      <div class="card"><h3>Coffee near train station</h3><p>Cafes, breakfast coffee, quick coffee, pastries, quiet coffee, and station-area coffee.</p><a href="/coffee-near-train-station.html">Open station coffee</a></div>
      <div class="card"><h3>Breakfast near hotel</h3><p>Coffee, diners, pastries, quick breakfast, cheap breakfast, brunch, and family breakfast near hotels.</p><a href="/breakfast-near-hotel.html">Open breakfast near hotel</a></div>
      <div class="card"><h3>Lunch near hotel</h3><p>Quick lunch, cheap lunch, healthy lunch, tacos, pizza, and family lunch near hotels.</p><a href="/lunch-near-hotel.html">Open lunch near hotel</a></div>
      <div class="card"><h3>Restaurants near downtown</h3><p>Lunch, coffee, dinner, business meals, group meals, family food, and cheap eats downtown.</p><a href="/restaurants-near-downtown.html">Open downtown restaurants</a></div>
      <div class="card"><h3>Restaurants near Old Town</h3><p>Local food, lunch, coffee, dinner, family meals, dessert, and historic-district food searches.</p><a href="/restaurants-near-old-town.html">Open Old Town restaurants</a></div>
      <div class="card"><h3>Local food in major cities</h3><p>Local restaurants, lunch, dinner, coffee, cheap eats, city food, traveler food, and neighborhood favorites.</p><a href="/local-food-in-major-cities.html">Open local food cities</a></div>
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
