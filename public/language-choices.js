(() => {
  const STORAGE_KEY = 'restaurantAIBotLanguage';
  const supportedLanguages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' },
    { code: 'it', name: 'Italiano' },
    { code: 'pt', name: 'Português' },
    { code: 'ja', name: '日本語' },
    { code: 'ko', name: '한국어' },
    { code: 'zh', name: '中文' }
  ];

  const translations = {
    en: {
      languageLabel: 'Language',
      languageNote: 'Guide language only',
      hide: 'Hide',
      show: 'Show',
      askBites: 'Ask Bites',
      bitesName: 'Bites',
      homeEyebrow: 'Bites food guide',
      homeTitle: 'Tell me what you’re hungry for.',
      homeMessage: 'Try a simple search like “tacos in Dallas,” “pizza near me,” or “romantic dinner in Paris.”',
      ownerEyebrow: 'Bites for owners',
      ownerTitle: 'Want more hungry customers?',
      ownerMessage: 'I can explain Smart Promo Cards, slow-night pushes, traveler visibility, and fast restaurant websites.',
      websiteEyebrow: 'Bites website guide',
      websiteTitle: 'This is the starter website idea.',
      websiteMessage: 'A restaurant owner sends basic details. We turn them into a clean mobile site with calls, directions, menu highlights, and SEO basics.',
      searchDallas: 'Tacos in Dallas',
      searchPizza: 'Pizza near me',
      searchHotel: 'Food near hotel',
      websiteStarter: 'Website Starter',
      startInquiry: 'Start inquiry',
      emailInquiry: 'Email inquiry',
      ownerPackages: 'Owner packages',
      inputFocus: 'Good searches use food + place + need. Example: “cheap breakfast in New York” or “seafood near my hotel in Miami.”',
      nearMeHint: 'For “near me,” click Use My Location first. You can also type a city instead.',
      travelerHint: 'Traveler search detected. Add the city or landmark for better matches.',
      budgetHint: 'Budget search detected. Try adding lunch, dinner, family, or city for better results.'
    },
    es: {
      languageLabel: 'Idioma',
      languageNote: 'Solo idioma del guía',
      hide: 'Ocultar',
      show: 'Mostrar',
      askBites: 'Preguntar a Bites',
      bitesName: 'Bites',
      homeEyebrow: 'Guía de comida Bites',
      homeTitle: 'Dime qué se te antoja.',
      homeMessage: 'Prueba una búsqueda simple como “tacos en Dallas,” “pizza cerca de mí,” o “cena romántica en París.”',
      ownerEyebrow: 'Bites para dueños',
      ownerTitle: '¿Quieres más clientes con hambre?',
      ownerMessage: 'Puedo explicar Smart Promo Cards, promociones para noches lentas, visibilidad para viajeros y sitios web rápidos para restaurantes.',
      websiteEyebrow: 'Guía web Bites',
      websiteTitle: 'Esta es la idea del sitio web inicial.',
      websiteMessage: 'El dueño envía datos básicos. Los convertimos en un sitio móvil claro con llamadas, direcciones, menú destacado y SEO básico.',
      searchDallas: 'Tacos en Dallas',
      searchPizza: 'Pizza cerca de mí',
      searchHotel: 'Comida cerca del hotel',
      websiteStarter: 'Sitio inicial',
      startInquiry: 'Iniciar consulta',
      emailInquiry: 'Enviar consulta',
      ownerPackages: 'Paquetes para dueños',
      inputFocus: 'Buenas búsquedas usan comida + lugar + necesidad. Ejemplo: “desayuno barato en New York” o “mariscos cerca de mi hotel en Miami.”',
      nearMeHint: 'Para “cerca de mí,” primero toca Use My Location. También puedes escribir una ciudad.',
      travelerHint: 'Búsqueda de viajero detectada. Agrega la ciudad o punto de referencia para mejores resultados.',
      budgetHint: 'Búsqueda de presupuesto detectada. Agrega almuerzo, cena, familia o ciudad para mejores resultados.'
    },
    fr: {
      languageLabel: 'Langue',
      languageNote: 'Langue du guide seulement',
      hide: 'Masquer',
      show: 'Afficher',
      askBites: 'Demander à Bites',
      bitesName: 'Bites',
      homeEyebrow: 'Guide food Bites',
      homeTitle: 'Dites-moi ce que vous voulez manger.',
      homeMessage: 'Essayez une recherche simple comme “tacos à Dallas,” “pizza près de moi,” ou “dîner romantique à Paris.”',
      ownerEyebrow: 'Bites pour restaurants',
      ownerTitle: 'Vous voulez plus de clients affamés ?',
      ownerMessage: 'Je peux expliquer les Smart Promo Cards, les promotions des soirs calmes, la visibilité voyageur et les sites rapides pour restaurants.',
      websiteEyebrow: 'Guide site web Bites',
      websiteTitle: 'Voici l’idée du site de départ.',
      websiteMessage: 'Le restaurant envoie les infos de base. Nous les transformons en site mobile clair avec appels, itinéraire, menus forts et SEO de base.',
      searchDallas: 'Tacos à Dallas',
      searchPizza: 'Pizza près de moi',
      searchHotel: 'Restaurant près de l’hôtel',
      websiteStarter: 'Site de départ',
      startInquiry: 'Commencer',
      emailInquiry: 'Envoyer une demande',
      ownerPackages: 'Offres restaurant',
      inputFocus: 'Une bonne recherche utilise plat + lieu + besoin. Exemple : “petit déjeuner pas cher à New York” ou “fruits de mer près de mon hôtel à Miami.”',
      nearMeHint: 'Pour “près de moi,” activez d’abord la localisation. Vous pouvez aussi taper une ville.',
      travelerHint: 'Recherche voyageur détectée. Ajoutez une ville ou un lieu connu pour de meilleurs résultats.',
      budgetHint: 'Recherche budget détectée. Ajoutez déjeuner, dîner, famille ou ville pour de meilleurs résultats.'
    },
    de: {
      languageLabel: 'Sprache',
      languageNote: 'Nur Sprache des Guides',
      hide: 'Ausblenden',
      show: 'Anzeigen',
      askBites: 'Bites fragen',
      bitesName: 'Bites',
      homeEyebrow: 'Bites Essensguide',
      homeTitle: 'Sag mir, worauf du Hunger hast.',
      homeMessage: 'Probiere eine einfache Suche wie „Tacos in Dallas,“ „Pizza in meiner Nähe,“ oder „romantisches Abendessen in Paris.“',
      ownerEyebrow: 'Bites für Inhaber',
      ownerTitle: 'Möchtest du mehr hungrige Gäste?',
      ownerMessage: 'Ich kann Smart Promo Cards, Aktionen für ruhige Abende, Sichtbarkeit für Reisende und schnelle Restaurant-Websites erklären.',
      websiteEyebrow: 'Bites Website-Guide',
      websiteTitle: 'Das ist die Starter-Website-Idee.',
      websiteMessage: 'Der Restaurantinhaber sendet Basisdaten. Wir erstellen daraus eine mobile Website mit Anruf, Wegbeschreibung, Menü-Highlights und SEO-Grundlagen.',
      searchDallas: 'Tacos in Dallas',
      searchPizza: 'Pizza in meiner Nähe',
      searchHotel: 'Essen nahe Hotel',
      websiteStarter: 'Website Starter',
      startInquiry: 'Anfrage starten',
      emailInquiry: 'Anfrage senden',
      ownerPackages: 'Inhaber-Pakete',
      inputFocus: 'Gute Suchen nutzen Essen + Ort + Bedarf. Beispiel: „günstiges Frühstück in New York“ oder „Meeresfrüchte nahe meinem Hotel in Miami.“',
      nearMeHint: 'Für „in meiner Nähe“ zuerst Standort verwenden. Du kannst auch eine Stadt eingeben.',
      travelerHint: 'Reisesuche erkannt. Füge Stadt oder Sehenswürdigkeit hinzu.',
      budgetHint: 'Budgetsuche erkannt. Ergänze Mittagessen, Abendessen, Familie oder Stadt.'
    },
    it: {
      languageLabel: 'Lingua',
      languageNote: 'Solo lingua della guida',
      hide: 'Nascondi',
      show: 'Mostra',
      askBites: 'Chiedi a Bites',
      bitesName: 'Bites',
      homeEyebrow: 'Guida cibo Bites',
      homeTitle: 'Dimmi cosa vuoi mangiare.',
      homeMessage: 'Prova una ricerca semplice come “tacos a Dallas,” “pizza vicino a me,” o “cena romantica a Parigi.”',
      ownerEyebrow: 'Bites per ristoratori',
      ownerTitle: 'Vuoi più clienti affamati?',
      ownerMessage: 'Posso spiegare Smart Promo Cards, promozioni per serate lente, visibilità per viaggiatori e siti rapidi per ristoranti.',
      websiteEyebrow: 'Guida sito Bites',
      websiteTitle: 'Questa è l’idea del sito starter.',
      websiteMessage: 'Il ristoratore invia i dati base. Li trasformiamo in un sito mobile chiaro con chiamate, indicazioni, menu in evidenza e SEO base.',
      searchDallas: 'Tacos a Dallas',
      searchPizza: 'Pizza vicino a me',
      searchHotel: 'Cibo vicino all’hotel',
      websiteStarter: 'Sito starter',
      startInquiry: 'Inizia richiesta',
      emailInquiry: 'Invia richiesta',
      ownerPackages: 'Pacchetti ristoratore',
      inputFocus: 'Le buone ricerche usano cibo + luogo + bisogno. Esempio: “colazione economica a New York” o “pesce vicino al mio hotel a Miami.”',
      nearMeHint: 'Per “vicino a me,” prima usa la posizione. Puoi anche scrivere una città.',
      travelerHint: 'Ricerca da viaggiatore rilevata. Aggiungi città o punto di riferimento.',
      budgetHint: 'Ricerca economica rilevata. Aggiungi pranzo, cena, famiglia o città.'
    },
    pt: {
      languageLabel: 'Idioma',
      languageNote: 'Só idioma do guia',
      hide: 'Ocultar',
      show: 'Mostrar',
      askBites: 'Perguntar ao Bites',
      bitesName: 'Bites',
      homeEyebrow: 'Guia de comida Bites',
      homeTitle: 'Diga o que você quer comer.',
      homeMessage: 'Tente uma busca simples como “tacos em Dallas,” “pizza perto de mim,” ou “jantar romântico em Paris.”',
      ownerEyebrow: 'Bites para donos',
      ownerTitle: 'Quer mais clientes com fome?',
      ownerMessage: 'Posso explicar Smart Promo Cards, promoções para noites fracas, visibilidade para viajantes e sites rápidos para restaurantes.',
      websiteEyebrow: 'Guia de site Bites',
      websiteTitle: 'Esta é a ideia do site inicial.',
      websiteMessage: 'O dono envia dados básicos. Nós transformamos isso em um site mobile claro com ligações, rotas, destaques do menu e SEO básico.',
      searchDallas: 'Tacos em Dallas',
      searchPizza: 'Pizza perto de mim',
      searchHotel: 'Comida perto do hotel',
      websiteStarter: 'Site inicial',
      startInquiry: 'Iniciar contato',
      emailInquiry: 'Enviar contato',
      ownerPackages: 'Pacotes para donos',
      inputFocus: 'Boas buscas usam comida + lugar + necessidade. Exemplo: “café da manhã barato em New York” ou “frutos do mar perto do meu hotel em Miami.”',
      nearMeHint: 'Para “perto de mim,” use a localização primeiro. Você também pode digitar uma cidade.',
      travelerHint: 'Busca de viajante detectada. Adicione a cidade ou ponto de referência.',
      budgetHint: 'Busca econômica detectada. Adicione almoço, jantar, família ou cidade.'
    },
    ja: {
      languageLabel: '言語',
      languageNote: 'ガイド表示のみ',
      hide: '隠す',
      show: '表示',
      askBites: 'Bitesに聞く',
      bitesName: 'Bites',
      homeEyebrow: 'Bites 食事ガイド',
      homeTitle: '食べたいものを教えてください。',
      homeMessage: '「Dallas tacos」「pizza near me」「romantic dinner in Paris」のように検索できます。',
      ownerEyebrow: '店舗向けBites',
      ownerTitle: 'もっと来店客を増やしたいですか？',
      ownerMessage: 'Smart Promo Cards、遅い曜日の集客、旅行者向け表示、レストラン用サイト制作を説明できます。',
      websiteEyebrow: 'Bites サイト案内',
      websiteTitle: 'これはスターターサイトの案です。',
      websiteMessage: '店舗情報を送るだけで、電話、道順、メニュー紹介、基本SEOを含むモバイル向けサイトにできます。',
      searchDallas: 'Dallasのタコス',
      searchPizza: '近くのピザ',
      searchHotel: 'ホテル近くの食事',
      websiteStarter: 'サイトスターター',
      startInquiry: '問い合わせ開始',
      emailInquiry: 'メールで問い合わせ',
      ownerPackages: '店舗向けプラン',
      inputFocus: '良い検索は「料理 + 場所 + 目的」です。例: “cheap breakfast in New York” または “seafood near my hotel in Miami”。',
      nearMeHint: '“near me” を使う場合は、先に位置情報を有効にしてください。都市名でも検索できます。',
      travelerHint: '旅行者向け検索です。都市名やランドマークを追加すると精度が上がります。',
      budgetHint: '予算検索です。ランチ、ディナー、家族向け、都市名を追加すると便利です。'
    },
    ko: {
      languageLabel: '언어',
      languageNote: '가이드 언어만',
      hide: '숨기기',
      show: '보이기',
      askBites: 'Bites에게 묻기',
      bitesName: 'Bites',
      homeEyebrow: 'Bites 음식 가이드',
      homeTitle: '먹고 싶은 것을 알려주세요.',
      homeMessage: '“tacos in Dallas,” “pizza near me,” 또는 “romantic dinner in Paris”처럼 검색해 보세요.',
      ownerEyebrow: '업주용 Bites',
      ownerTitle: '더 많은 손님을 원하시나요?',
      ownerMessage: 'Smart Promo Cards, 한산한 날 프로모션, 여행자 노출, 빠른 레스토랑 웹사이트를 설명할 수 있습니다.',
      websiteEyebrow: 'Bites 웹사이트 가이드',
      websiteTitle: '이것이 스타터 웹사이트 아이디어입니다.',
      websiteMessage: '업주가 기본 정보를 보내면 전화, 길찾기, 메뉴 하이라이트, 기본 SEO가 있는 모바일 사이트로 만듭니다.',
      searchDallas: 'Dallas 타코',
      searchPizza: '내 주변 피자',
      searchHotel: '호텔 근처 음식',
      websiteStarter: '웹사이트 스타터',
      startInquiry: '문의 시작',
      emailInquiry: '이메일 문의',
      ownerPackages: '업주 패키지',
      inputFocus: '좋은 검색은 음식 + 장소 + 필요를 사용합니다. 예: “cheap breakfast in New York” 또는 “seafood near my hotel in Miami.”',
      nearMeHint: '“near me” 검색은 먼저 위치 사용을 눌러 주세요. 도시명을 입력해도 됩니다.',
      travelerHint: '여행자 검색입니다. 도시나 랜드마크를 추가하면 더 좋습니다.',
      budgetHint: '예산 검색입니다. 점심, 저녁, 가족, 도시를 추가해 보세요.'
    },
    zh: {
      languageLabel: '语言',
      languageNote: '仅指南语言',
      hide: '隐藏',
      show: '显示',
      askBites: '询问 Bites',
      bitesName: 'Bites',
      homeEyebrow: 'Bites 美食指南',
      homeTitle: '告诉我你想吃什么。',
      homeMessage: '可以搜索 “tacos in Dallas,” “pizza near me,” 或 “romantic dinner in Paris”。',
      ownerEyebrow: '商家版 Bites',
      ownerTitle: '想吸引更多饥饿顾客吗？',
      ownerMessage: '我可以介绍 Smart Promo Cards、淡时段促销、游客曝光和快速餐厅网站。',
      websiteEyebrow: 'Bites 网站指南',
      websiteTitle: '这是入门网站方案。',
      websiteMessage: '餐厅老板提供基本资料，我们制作一个适合手机的网站，包含电话、路线、菜单亮点和基础 SEO。',
      searchDallas: 'Dallas 的 tacos',
      searchPizza: '附近的 pizza',
      searchHotel: '酒店附近美食',
      websiteStarter: '网站入门版',
      startInquiry: '开始咨询',
      emailInquiry: '邮件咨询',
      ownerPackages: '商家套餐',
      inputFocus: '好的搜索格式是：食物 + 地点 + 需求。例如 “cheap breakfast in New York” 或 “seafood near my hotel in Miami”。',
      nearMeHint: '搜索 “near me” 时，请先点击使用位置。也可以输入城市名。',
      travelerHint: '检测到旅行搜索。添加城市或地标会更准确。',
      budgetHint: '检测到预算搜索。可以加上午餐、晚餐、家庭或城市。'
    }
  };

  function normalizeLanguage(code) {
    if (!code) return 'en';
    const shortCode = code.toLowerCase().split('-')[0];
    return supportedLanguages.some(language => language.code === shortCode) ? shortCode : 'en';
  }

  function getStoredLanguage() {
    return normalizeLanguage(localStorage.getItem(STORAGE_KEY) || navigator.language || 'en');
  }

  function setLanguage(code) {
    const nextLanguage = normalizeLanguage(code);
    localStorage.setItem(STORAGE_KEY, nextLanguage);
    document.documentElement.lang = nextLanguage;
    window.dispatchEvent(new CustomEvent('restaurantAIBotLanguageChange', { detail: { language: nextLanguage } }));
  }

  function t(key, fallback = '') {
    const language = getStoredLanguage();
    return (translations[language] && translations[language][key]) || translations.en[key] || fallback;
  }

  function addLanguagePicker() {
    if (document.getElementById('restaurantLanguageChoice')) return;

    const nav = document.querySelector('.site-nav') || document.querySelector('nav[aria-label="Site navigation"]') || document.querySelector('nav');
    if (!nav) return;

    const wrap = document.createElement('label');
    wrap.id = 'restaurantLanguageChoice';
    wrap.title = t('languageNote');
    wrap.style.display = 'inline-flex';
    wrap.style.alignItems = 'center';
    wrap.style.gap = '6px';
    wrap.style.border = '1px solid rgba(255,255,255,.45)';
    wrap.style.borderRadius = '999px';
    wrap.style.padding = '6px 10px';
    wrap.style.background = 'rgba(255,255,255,.16)';
    wrap.style.color = 'inherit';
    wrap.style.fontWeight = '800';
    wrap.style.fontSize = '.88rem';

    const span = document.createElement('span');
    span.textContent = t('languageLabel');

    const select = document.createElement('select');
    select.setAttribute('aria-label', t('languageLabel'));
    select.style.border = '0';
    select.style.borderRadius = '999px';
    select.style.padding = '5px 8px';
    select.style.fontWeight = '800';
    select.style.background = '#fff';
    select.style.color = '#222';
    select.style.maxWidth = '150px';

    supportedLanguages.forEach(language => {
      const option = document.createElement('option');
      option.value = language.code;
      option.textContent = language.name;
      select.appendChild(option);
    });

    select.value = getStoredLanguage();
    document.documentElement.lang = select.value;

    select.addEventListener('change', () => {
      setLanguage(select.value);
      window.location.reload();
    });

    wrap.append(span, select);
    nav.appendChild(wrap);
  }

  window.RestaurantAIBotLanguage = {
    supportedLanguages,
    getLanguage: getStoredLanguage,
    setLanguage,
    t
  };

  document.addEventListener('DOMContentLoaded', addLanguagePicker);
})();
