document.addEventListener('DOMContentLoaded', () => {
  const quickSearches = [
    'Pizza near me',
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

  const input = document.getElementById('userInput');
  const sendBtn = document.getElementById('sendBtn');
  const sidebar = document.querySelector('.brand-header');

  if (!input || !sendBtn || !sidebar) return;

  addSiteLinks();
  addQuickSearchButtons();
  runSearchFromUrl();

  function addSiteLinks() {
    const navs = document.querySelectorAll('.site-nav, .footer-nav');

    navs.forEach(nav => {
      addLinkIfMissing(nav, '/popular-searches.html', 'Popular Searches');
      addLinkIfMissing(nav, '/restaurant-cities.html', 'Cities');
      addLinkIfMissing(nav, '/owner-advertise.html', 'Restaurants');
      addLinkIfMissing(nav, '/restaurant-marketing-tools.html', 'Marketing Tools');
    });
  }

  function addLinkIfMissing(nav, href, text) {
    if (!nav || nav.querySelector(`a[href="${href}"]`)) return;

    const link = document.createElement('a');
    link.href = href;
    link.textContent = text;
    nav.appendChild(link);
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
      button.innerText = search;
      button.style.border = 'none';
      button.style.borderRadius = '999px';
      button.style.padding = '8px 12px';
      button.style.background = '#fff3ed';
      button.style.color = '#ff6b35';
      button.style.fontWeight = 'bold';
      button.style.cursor = 'pointer';
      button.style.fontSize = '0.8rem';

      button.addEventListener('click', () => runSearch(search));

      wrap.appendChild(button);
    });

    sidebar.append(intro, wrap);
  }

  function runSearchFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const query = params.get('q');

    if (query && query.trim()) {
      runSearch(query.trim());
    }
  }

  function runSearch(search) {
    input.value = search;
    sendBtn.click();
  }
});
