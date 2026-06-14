document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('bitesGuideAvatar')) return;

  const path = window.location.pathname;
  const isSearchPage = path === '/' || path.endsWith('/index.html');
  const isOwnerPage = path.includes('owner-advertise');
  const isWebsiteStarterPage = path.includes('restaurant-website-starter');

  const context = getPageContext();
  addAvatarStyles();
  buildAvatar(context);

  function getPageContext() {
    if (isOwnerPage) {
      return {
        eyebrow: 'Bites for owners',
        title: 'Want more hungry customers?',
        message: 'I can explain Smart Promo Cards, slow-night pushes, traveler visibility, and fast restaurant websites.',
        buttons: [
          { label: 'Website Starter', href: '/restaurant-website-starter.html' },
          { label: 'Start inquiry', href: '#owner-inquiry' }
        ]
      };
    }

    if (isWebsiteStarterPage) {
      return {
        eyebrow: 'Bites website guide',
        title: 'This is the starter website idea.',
        message: 'A restaurant owner sends basic details. We turn them into a clean mobile site with calls, directions, menu highlights, and SEO basics.',
        buttons: [
          { label: 'Email inquiry', href: '#owner-inquiry' },
          { label: 'Owner packages', href: '/owner-advertise.html' }
        ]
      };
    }

    return {
      eyebrow: 'Bites food guide',
      title: 'Tell me what you’re hungry for.',
      message: 'Try a simple search like “tacos in Dallas,” “pizza near me,” or “romantic dinner in Paris.”',
      buttons: [
        { label: 'Tacos in Dallas', search: 'tacos in Dallas' },
        { label: 'Pizza near me', search: 'pizza near me' },
        { label: 'Food near hotel', search: 'food near my hotel' }
      ]
    };
  }

  function addAvatarStyles() {
    const style = document.createElement('style');
    style.textContent = `
      .bites-avatar {
        position: fixed;
        right: 18px;
        bottom: 18px;
        width: min(360px, calc(100vw - 24px));
        z-index: 9999;
        font-family: Arial, sans-serif;
        color: #222;
      }
      .bites-avatar * { box-sizing: border-box; }
      .bites-card {
        background: #ffffff;
        border: 1px solid rgba(0,0,0,.12);
        border-radius: 22px;
        box-shadow: 0 18px 46px rgba(0,0,0,.22);
        overflow: hidden;
      }
      .bites-head {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 12px 13px;
        background: linear-gradient(135deg,#ff6b35,#ff9559);
        color: #fff;
      }
      .bites-face {
        width: 42px;
        height: 42px;
        display: grid;
        place-items: center;
        border-radius: 50%;
        background: rgba(255,255,255,.2);
        border: 1px solid rgba(255,255,255,.35);
        font-size: 1.35rem;
        flex: 0 0 auto;
      }
      .bites-name { font-weight: 900; line-height: 1.15; }
      .bites-eyebrow { font-size: .78rem; opacity: .9; }
      .bites-toggle {
        margin-left: auto;
        border: 0;
        background: rgba(255,255,255,.2);
        color: #fff;
        border-radius: 999px;
        padding: 7px 10px;
        font-weight: 900;
        cursor: pointer;
      }
      .bites-body { padding: 14px; }
      .bites-title { font-weight: 900; margin: 0 0 5px; line-height: 1.25; }
      .bites-message { margin: 0; color: #444; font-size: .94rem; line-height: 1.45; }
      .bites-actions { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px; }
      .bites-actions a,
      .bites-actions button {
        border: 0;
        text-decoration: none;
        background: #fff3ed;
        color: #d94c1f;
        border-radius: 999px;
        padding: 8px 11px;
        font-weight: 900;
        font-size: .82rem;
        cursor: pointer;
      }
      .bites-mini {
        display: none;
        margin-left: auto;
        border: 0;
        background: #ff6b35;
        color: #fff;
        border-radius: 999px;
        padding: 10px 13px;
        font-weight: 900;
        box-shadow: 0 12px 28px rgba(0,0,0,.2);
        cursor: pointer;
      }
      .bites-avatar.is-collapsed .bites-card { display: none; }
      .bites-avatar.is-collapsed .bites-mini { display: inline-flex; align-items: center; gap: 8px; }
      .bites-sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
      @media (max-width: 820px) {
        .bites-avatar {
          right: 12px;
          bottom: 78px;
          width: min(340px, calc(100vw - 24px));
        }
        .bites-body { padding: 12px; }
      }
      @media (max-width: 480px) {
        .bites-avatar {
          left: 12px;
          right: 12px;
          bottom: 86px;
          width: auto;
        }
        .bites-head { padding: 10px 11px; }
        .bites-face { width: 38px; height: 38px; }
        .bites-actions a,
        .bites-actions button { flex: 1 1 100%; text-align: center; }
      }
    `;
    document.head.appendChild(style);
  }

  function buildAvatar(context) {
    const avatar = document.createElement('aside');
    avatar.id = 'bitesGuideAvatar';
    avatar.className = 'bites-avatar';
    avatar.setAttribute('aria-label', 'Bites restaurant guide');

    const card = document.createElement('div');
    card.className = 'bites-card';

    const head = document.createElement('div');
    head.className = 'bites-head';

    const face = document.createElement('div');
    face.className = 'bites-face';
    face.textContent = '🍽️';
    face.setAttribute('aria-hidden', 'true');

    const nameWrap = document.createElement('div');
    const eyebrow = document.createElement('div');
    eyebrow.className = 'bites-eyebrow';
    eyebrow.textContent = context.eyebrow;
    const name = document.createElement('div');
    name.className = 'bites-name';
    name.textContent = 'Bites';
    nameWrap.append(eyebrow, name);

    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'bites-toggle';
    toggle.setAttribute('aria-expanded', 'true');
    toggle.textContent = 'Hide';

    const body = document.createElement('div');
    body.className = 'bites-body';

    const title = document.createElement('p');
    title.className = 'bites-title';
    title.textContent = context.title;

    const message = document.createElement('p');
    message.className = 'bites-message';
    message.id = 'bitesAvatarMessage';
    message.textContent = context.message;

    const actions = document.createElement('div');
    actions.className = 'bites-actions';

    context.buttons.forEach(action => {
      if (action.href) {
        const link = document.createElement('a');
        link.href = action.href;
        link.textContent = action.label;
        actions.appendChild(link);
        return;
      }

      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = action.label;
      button.addEventListener('click', () => runAvatarSearch(action.search));
      actions.appendChild(button);
    });

    const mini = document.createElement('button');
    mini.type = 'button';
    mini.className = 'bites-mini';
    mini.innerHTML = '<span aria-hidden="true">🍽️</span><span>Ask Bites</span>';

    toggle.addEventListener('click', () => collapseAvatar(true));
    mini.addEventListener('click', () => collapseAvatar(false));

    head.append(face, nameWrap, toggle);
    body.append(title, message, actions);
    card.append(head, body);
    avatar.append(card, mini);
    document.body.appendChild(avatar);

    wireInputHints(message);

    function collapseAvatar(collapsed) {
      avatar.classList.toggle('is-collapsed', collapsed);
      toggle.setAttribute('aria-expanded', String(!collapsed));
      toggle.textContent = collapsed ? 'Show' : 'Hide';
      if (!collapsed) toggle.focus();
    }
  }

  function wireInputHints(messageElement) {
    const input = document.getElementById('userInput');
    if (!input || !messageElement) return;

    input.addEventListener('focus', () => {
      messageElement.textContent = 'Good searches use food + place + need. Example: “cheap breakfast in New York” or “seafood near my hotel in Miami.”';
    });

    input.addEventListener('input', () => {
      const value = input.value.toLowerCase();
      if (!value) return;
      if (value.includes('near me')) {
        messageElement.textContent = 'For “near me,” click Use My Location first. You can also type a city instead.';
      } else if (value.includes('hotel') || value.includes('airport') || value.includes('station')) {
        messageElement.textContent = 'Traveler search detected. Add the city or landmark for better matches.';
      } else if (value.includes('cheap') || value.includes('budget')) {
        messageElement.textContent = 'Budget search detected. Try adding lunch, dinner, family, or city for better results.';
      }
    });
  }

  function runAvatarSearch(searchText) {
    const input = document.getElementById('userInput');
    const form = document.getElementById('searchForm');

    if (input && form) {
      input.value = searchText;
      form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
      return;
    }

    window.location.href = `/?q=${encodeURIComponent(searchText)}`;
  }
});
