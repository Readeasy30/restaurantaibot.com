document.addEventListener('DOMContentLoaded', () => {
  const quickSearches = [
    'Pizza near me',
    'Food near my hotel',
    'Restaurants near airport',
    'Late night tacos in Dallas',
    'Quiet sushi in Tokyo',
    'Cheap breakfast in New York',
    'Vegan food near me',
    'Seafood in Miami',
    'Coffee near me',
    'Nice dinner in Chicago',
    'Cheap eats in Las Vegas',
    'Outdoor dining in Los Angeles'
  ];

  const localSearches = [
    'Lunch near me',
    'Cheap eats near me',
    'Family dinner near me',
    'Coffee near me',
    'Date night near me',
    'Outdoor dining near me'
  ];

  const travelerSearches = [
    'Food near my hotel',
    'Restaurants near airport',
    'Restaurants near convention center',
    'Local food in Paris',
    'Sushi near Tokyo Station',
    'Seafood near beach in Miami',
    'Dinner near convention center'
  ];

  const searchTips = [
    'Best format: food + city, like “tacos in Dallas.”',
    'For nearby searches, click Use My Location first.',
    'Always confirm hours, menus, allergies, and prices before visiting.'
  ];

  const ambienceImage = '/images/restaurant-ambience-hero.svg';
  const promoImage = '/images/promo-card-food.svg';

  const input = document.getElementById('userInput');
  const form = document.getElementById('searchForm');
  const sidebar = document.querySelector('.brand-header');
  const chatHistory = document.getElementById('chatHistory');
  const mapContainer = document.getElementById('map-container');

  if (!input || !form || !sidebar) return;

  addSiteLinks();
  addSetupNotice();
  addSearchTips();
  addAudienceModeButtons();
  addQuickSearchButtons();
  addAmbienceFeatureCard();
  addTodaysFeaturePromoCard();
  enhanceMapFallback();
  replaceRemoteRestaurantImages();
  checkLiveDataStatus();
  runSearchFromUrl();

  function addSiteLinks() {
    const navs = document.querySelectorAll('.site-nav, .footer-nav');

    navs.forEach(nav => {
      addLinkIfMissing(nav, '/ai-restaurant-finder.html', 'AI Finder');
      addLinkIfMissing(nav, '/popular-searches.html', 'Popular Searches');
      addLinkIfMissing(nav, '/restaurant-cities.html', 'Cities');
      addLinkIfMissing(nav, '/food-near-hotel.html', 'Food Near Hotel');
      addLinkIfMissing(nav, '/restaurants-near-airport.html', 'Airport Food');
      addLinkIfMissing(nav, '/owner-advertise.html', 'Restaurants');
      addLinkIfMissing(nav, '/founder-complimentary-promo-cards.html', 'Founder Cards');
      addLinkIfMissing(nav, '/restaurant-owner-intake.html', 'Owner Intake');
      addLinkIfMissing(nav, '/restaurant-website-starter.html', 'Website Starter');
      addLinkIfMissing(nav, '/restaurant-owner-resources.html', 'Owner Resources');
      addLinkIfMissing(nav, '/restaurant-marketing-tools.html', 'Marketing Tools');
      addLinkIfMissing(nav, '/system-status.html', 'System Status');
      addLinkIfMissing(nav, '/disclaimer.html', 'Disclaimer');
    });
  }

  function addLinkIfMissing(nav, href, text) {
    if (!nav || nav.querySelector(`a[href="${href}"]`)) return;

    const link = document.createElement('a');
    link.href = href;
    link.textContent = text;
    nav.appendChild(link);
  }

  function addSetupNotice() {
    if (document.getElementById('liveDataSetupNotice')) return;

    const notice = document.createElement('div');
    notice.id = 'liveDataSetupNotice';
    notice.setAttribute('role', 'status');
    notice.innerHTML = '<strong>Live data setup mode</strong><span>Search by food and city now. Real map results turn on after Google Maps is connected.</span>';
    notice.style.marginTop = '14px';
    notice.style.padding = '11px 12px';
    notice.style.borderRadius = '14px';
    notice.style.background = 'rgba(255,255,255,.18)';
    notice.style.border = '1px solid rgba(255,255,255,.38)';
    notice.style.fontSize = '.9rem';
    notice.style.lineHeight = '1.4';

    const strong = notice.querySelector('strong');
    const span = notice.querySelector('span');
    if (strong) {
      strong.style.display = 'block';
      strong.style.marginBottom = '3px';
    }
    if (span) span.style.display = 'block';

    const nearMeBtn = document.getElementById('nearMeBtn');
    if (nearMeBtn) sidebar.insertBefore(notice, nearMeBtn);
    else sidebar.appendChild(notice);
  }

  function addSearchTips() {
    if (document.getElementById('searchTips')) return;

    const tips = document.createElement('div');
    tips.id = 'searchTips';
    tips.setAttribute('aria-label', 'Restaurant search tips');
    tips.style.marginTop = '12px';
    tips.style.padding = '10px 12px';
    tips.style.borderRadius = '14px';
    tips.style.background = 'rgba(255,255,255,.14)';
    tips.style.border = '1px solid rgba(255,255,255,.26)';
    tips.style.fontSize = '.84rem';
    tips.style.lineHeight = '1.4';

    const title = document.createElement('strong');
    title.textContent = 'Search tips';
    title.style.display = 'block';
    title.style.marginBottom = '4px';

    const list = document.createElement('ul');
    list.style.marginLeft = '18px';

    searchTips.forEach(tip => {
      const item = document.createElement('li');
      item.textContent = tip;
      item.style.marginBottom = '3px';
      list.appendChild(item);
    });

    tips.append(title, list);

    const nearMeBtn = document.getElementById('nearMeBtn');
    if (nearMeBtn && nearMeBtn.nextSibling) sidebar.insertBefore(tips, nearMeBtn.nextSibling);
    else sidebar.appendChild(tips);
  }

  function addAudienceModeButtons() {
    if (document.getElementById('audienceModePicker')) return;

    const section = document.createElement('section');
    section.id = 'audienceModePicker';
    section.setAttribute('aria-label', 'Choose local or traveler restaurant search mode');
    section.style.marginTop = '14px';
    section.style.padding = '12px';
    section.style.borderRadius = '16px';
    section.style.background = 'rgba(255,255,255,.18)';
    section.style.border = '1px solid rgba(255,255,255,.32)';

    const title = document.createElement('strong');
    title.textContent = 'Choose your search mode';
    title.style.display = 'block';
    title.style.marginBottom = '8px';

    const intro = document.createElement('p');
    intro.textContent = 'RestaurantAIBot can help like a local guide or a travel food helper.';
    intro.style.fontSize = '.86rem';
    intro.style.lineHeight = '1.4';
    intro.style.marginBottom = '10px';

    const modeGrid = document.createElement('div');
    modeGrid.style.display = 'grid';
    modeGrid.style.gridTemplateColumns = 'repeat(2, minmax(0, 1fr))';
    modeGrid.style.gap = '8px';

    modeGrid.append(
      createModeButton({ label: 'I live here', detail: 'nearby, value, family, hidden gems', emoji: '🏠', mode: 'local' }),
      createModeButton({ label: 'I am visiting', detail: 'hotel, airport, attractions, language help', emoji: '🧳', mode: 'traveler' })
    );

    section.append(title, intro, modeGrid);

    const nearMeBtn = document.getElementById('nearMeBtn');
    if (nearMeBtn && nearMeBtn.nextSibling) sidebar.insertBefore(section, nearMeBtn.nextSibling);
    else sidebar.appendChild(section);
  }

  function createModeButton({ label, detail, emoji, mode }) {
    const button = document.createElement('button');
    button.type = 'button';
    button.setAttribute('aria-label', `${label}: ${detail}`);
    button.dataset.mode = mode;
    button.style.border = 'none';
    button.style.borderRadius = '16px';
    button.style.padding = '11px 10px';
    button.style.background = '#fff';
    button.style.color = '#d94c1f';
    button.style.cursor = 'pointer';
    button.style.textAlign = 'left';
    button.style.minHeight = '86px';
    button.style.boxShadow = '0 8px 20px rgba(0,0,0,.08)';

    const emojiSpan = document.createElement('span');
    emojiSpan.textContent = emoji;
    emojiSpan.style.display = 'block';
    emojiSpan.style.fontSize = '1.25rem';
    emojiSpan.style.marginBottom = '4px';

    const labelSpan = document.createElement('strong');
    labelSpan.textContent = label;
    labelSpan.style.display = 'block';
    labelSpan.style.lineHeight = '1.2';

    const detailSpan = document.createElement('span');
    detailSpan.textContent = detail;
    detailSpan.style.display = 'block';
    detailSpan.style.fontSize = '.76rem';
    detailSpan.style.color = '#555';
    detailSpan.style.lineHeight = '1.3';
    detailSpan.style.marginTop = '4px';

    button.append(emojiSpan, labelSpan, detailSpan);
    button.addEventListener('focus', () => { button.style.outline = '3px solid rgba(255,255,255,.65)'; button.style.outlineOffset = '2px'; });
    button.addEventListener('blur', () => { button.style.outline = 'none'; });
    button.addEventListener('click', () => activateAudienceMode(mode));
    return button;
  }

  function activateAudienceMode(mode) {
    const searches = mode === 'traveler' ? travelerSearches : localSearches;
    const message = mode === 'traveler'
      ? 'Traveler mode ready. Try food near your hotel, airport, station, landmark, or city.'
      : 'Local mode ready. Try nearby food, cheap eats, family dinner, coffee, or date night.';
    addModeMessage(mode, message, searches);
    input.value = searches[0];
    input.focus();
  }

  function addModeMessage(mode, message, searches) {
    if (!chatHistory) return;
    const existing = document.getElementById('audienceModeResult');
    if (existing) existing.remove();

    const card = document.createElement('section');
    card.id = 'audienceModeResult';
    card.className = 'restaurant-card demo-card';
    card.setAttribute('aria-label', `${mode} restaurant search ideas`);

    const content = document.createElement('div');
    content.className = 'restaurant-content';

    const label = document.createElement('span');
    label.className = 'tag demo-tag';
    label.textContent = mode === 'traveler' ? 'Traveler mode' : 'Local mode';

    const title = document.createElement('h3');
    title.textContent = mode === 'traveler' ? 'Search like a traveler' : 'Search like a local';

    const copy = document.createElement('p');
    copy.textContent = message;

    const actions = document.createElement('div');
    actions.className = 'card-actions';

    searches.forEach(search => {
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = search;
      stylePromoButton(button);
      button.addEventListener('click', () => runSearch(search));
      actions.appendChild(button);
    });

    content.append(label, title, copy, actions);
    card.appendChild(content);
    chatHistory.prepend(card);
    chatHistory.scrollTop = 0;
  }

  function addQuickSearchButtons() {
    const intro = document.createElement('p');
    intro.textContent = 'Popular searches:';
    intro.style.marginTop = '14px';
    intro.style.fontWeight = '800';
    intro.style.fontSize = '0.9rem';

    const wrap = document.createElement('div');
    wrap.style.marginTop = '8px';
    wrap.style.display = 'flex';
    wrap.style.flexWrap = 'wrap';
    wrap.style.gap = '8px';

    quickSearches.forEach(search => {
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = search;
      button.style.border = 'none';
      button.style.borderRadius = '999px';
      button.style.padding = '8px 12px';
      button.style.background = '#fff3ed';
      button.style.color = '#ff6b35';
      button.style.fontWeight = 'bold';
      button.style.cursor = 'pointer';
      button.style.fontSize = '0.8rem';
      button.style.minHeight = '36px';
      button.addEventListener('focus', () => { button.style.outline = '3px solid rgba(255,255,255,.65)'; button.style.outlineOffset = '2px'; });
      button.addEventListener('blur', () => { button.style.outline = 'none'; });
      button.addEventListener('click', () => runSearch(search));
      wrap.appendChild(button);
    });

    sidebar.append(intro, wrap);
  }

  function addAmbienceFeatureCard() {
    if (!chatHistory || document.getElementById('ambienceFeatureCard')) return;

    const card = document.createElement('section');
    card.id = 'ambienceFeatureCard';
    card.className = 'restaurant-card demo-card';
    card.setAttribute('aria-label', 'Restaurant ambience image card');

    const image = document.createElement('img');
    image.className = 'restaurant-image';
    image.src = ambienceImage;
    image.alt = 'Warm restaurant ambience image only, not a verified restaurant photo';
    image.loading = 'lazy';

    const content = document.createElement('div');
    content.className = 'restaurant-content';

    const label = document.createElement('span');
    label.className = 'tag demo-tag';
    label.textContent = 'Ambience image';

    const title = document.createElement('h3');
    title.textContent = 'Search food with a little more flavor';

    const copy = document.createElement('p');
    copy.textContent = 'Photos and visuals help the site feel warm while live maps are being connected. These images are ambience only, not verified restaurant photos.';

    const actions = document.createElement('div');
    actions.className = 'card-actions';

    const hotelLink = document.createElement('a');
    hotelLink.href = '/food-near-hotel.html';
    hotelLink.textContent = 'Food near hotel';

    const airportLink = document.createElement('a');
    airportLink.href = '/restaurants-near-airport.html';
    airportLink.textContent = 'Airport food';

    actions.append(hotelLink, airportLink);
    content.append(label, title, copy, actions);
    card.append(image, content);
    chatHistory.appendChild(card);
  }

  async function addTodaysFeaturePromoCard() {
    if (!chatHistory || document.getElementById('todaysFeaturePromoCard')) return;
    try {
      const response = await fetch('/demo-promotions.json', { cache: 'no-store' });
      if (!response.ok) return;
      const data = await response.json();
      const promotions = Array.isArray(data.promotions) ? data.promotions : [];
      const promo = promotions.find(item => item.todaysFeature) || promotions[0];
      if (!promo) return;

      const card = document.createElement('section');
      card.id = 'todaysFeaturePromoCard';
      card.className = 'restaurant-card demo-card';
      card.setAttribute('aria-label', 'Today demo smart promo card');

      const image = document.createElement('img');
      image.className = 'restaurant-image';
      image.src = promoImage;
      image.alt = 'Food promo ambience image only, not a verified restaurant photo';
      image.loading = 'lazy';

      const content = document.createElement('div');
      content.className = 'restaurant-content';

      const label = document.createElement('span');
      label.className = 'tag demo-tag';
      label.textContent = promo.label || 'Demo sponsored example';

      const title = document.createElement('h3');
      title.textContent = `Today’s feature: ${promo.restaurantName || 'Sample restaurant offer'}`;

      const headline = document.createElement('p');
      headline.innerHTML = `<strong>${escapeHtml(promo.headline || 'Smart Promo Card example')}</strong>`;

      const offer = document.createElement('p');
      offer.textContent = promo.offerText || 'This demo shows how a restaurant offer could appear when it matches a visitor search.';

      const match = document.createElement('p');
      match.textContent = promo.reason || 'Shown when the city, cuisine, time, and visitor intent match.';

      const note = document.createElement('p');
      note.className = 'source-note';
      note.textContent = promo.disclosure || 'Demo only. Not a paid placement.';

      const actions = document.createElement('div');
      actions.className = 'card-actions';

      const trySearch = document.createElement('button');
      trySearch.type = 'button';
      trySearch.textContent = `Try ${promo.category || 'food'} in ${promo.city || 'this city'}`;
      stylePromoButton(trySearch);
      trySearch.addEventListener('click', () => runSearch(`${promo.category || 'food'} in ${promo.city || ''}`.trim()));

      const sampleLink = document.createElement('a');
      sampleLink.href = promo.url || '/sample-restaurant-profile.html';
      sampleLink.textContent = promo.ctaText || 'View sample profile';

      actions.append(trySearch, sampleLink);
      content.append(label, title, headline, offer, match, note, actions);
      card.append(image, content);
      chatHistory.appendChild(card);
      chatHistory.scrollTop = chatHistory.scrollHeight;
    } catch (error) {}
  }

  function enhanceMapFallback() {
    if (!mapContainer) return;

    const apply = () => {
      const fallback = mapContainer.querySelector('.map-fallback');
      if (!fallback || fallback.dataset.ambienceEnhanced === 'true') return;
      fallback.dataset.ambienceEnhanced = 'true';
      fallback.style.background = '#101827';
      fallback.style.color = '#fff7ed';
      fallback.style.padding = '26px';
      fallback.innerHTML = `
        <div style="max-width:720px;width:min(92%,720px);background:#fff;border-radius:28px;overflow:hidden;box-shadow:0 24px 70px rgba(0,0,0,.25);text-align:left;color:#222">
          <img src="${ambienceImage}" alt="Restaurant ambience image only, not a verified restaurant photo" style="width:100%;height:260px;object-fit:cover;display:block">
          <div style="padding:22px">
            <span style="display:inline-block;background:#fff7d6;color:#8a5a00;border-radius:999px;padding:6px 10px;font-weight:800;font-size:.82rem;margin-bottom:10px">Ambience image only</span>
            <h2 style="font-size:1.45rem;line-height:1.2;margin:0 0 8px;color:#d94c1f">Live maps are not connected yet</h2>
            <p style="margin:0 0 12px;color:#555;line-height:1.5">Search still works with safe demo examples while Google Maps is being connected. Photos and visuals are for mood only, not verified restaurant listings.</p>
            <p style="margin:0;color:#666;font-size:.9rem">Confirm hours, menus, prices, offers, allergies, and availability directly with the restaurant.</p>
          </div>
        </div>`;
    };

    apply();
    const observer = new MutationObserver(apply);
    observer.observe(mapContainer, { childList: true, subtree: true });
  }

  function replaceRemoteRestaurantImages() {
    if (!chatHistory) return;

    const replace = () => {
      chatHistory.querySelectorAll('img.restaurant-image').forEach(img => {
        if (img.src.includes('images.unsplash.com')) {
          img.src = ambienceImage;
          img.alt = 'Restaurant ambience image only, not a verified restaurant photo';
        }
      });
    };

    replace();
    const observer = new MutationObserver(replace);
    observer.observe(chatHistory, { childList: true, subtree: true });
  }

  function stylePromoButton(button) {
    button.style.border = 'none';
    button.style.background = '#ff6b35';
    button.style.color = 'white';
    button.style.padding = '9px 13px';
    button.style.borderRadius = '999px';
    button.style.fontSize = '0.86rem';
    button.style.fontWeight = 'bold';
    button.style.cursor = 'pointer';
  }

  function escapeHtml(value) {
    const div = document.createElement('div');
    div.textContent = value;
    return div.innerHTML;
  }

  async function checkLiveDataStatus() {
    try {
      const response = await fetch('/api/config', { cache: 'no-store' });
      if (!response.ok) return;
      const config = await response.json();
      if (!config.googleMapsApiKey) return;
      const notice = document.getElementById('liveDataSetupNotice');
      if (!notice) return;
      notice.innerHTML = '<strong>Live map connected</strong><span>Search food plus city, or use your location for nearby restaurant results.</span>';
      notice.style.background = 'rgba(255,255,255,.25)';
    } catch (error) {}
  }

  function runSearchFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const query = params.get('q');
    if (query && query.trim()) runSearch(query.trim());
  }

  function runSearch(search) {
    input.value = search;
    form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
  }
});
