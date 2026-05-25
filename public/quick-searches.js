document.addEventListener('DOMContentLoaded', () => {
  const quickSearches = [
    'Best pizza in Chicago',
    'Late night tacos in Dallas',
    'Romantic dinner in Miami',
    'Cheap breakfast in New York',
    'Quiet sushi in Tokyo',
    'Outdoor dining in Los Angeles'
  ];

  const input = document.getElementById('userInput');
  const sendBtn = document.getElementById('sendBtn');
  const sidebar = document.querySelector('.brand-header');

  if (!input || !sendBtn || !sidebar) return;

  const wrap = document.createElement('div');
  wrap.style.marginTop = '14px';
  wrap.style.display = 'flex';
  wrap.style.flexWrap = 'wrap';
  wrap.style.gap = '8px';

  quickSearches.forEach(search => {
    const button = document.createElement('button');
    button.innerText = search;
    button.style.border = 'none';
    button.style.borderRadius = '999px';
    button.style.padding = '8px 12px';
    button.style.background = '#fff3ed';
    button.style.color = '#ff6b35';
    button.style.fontWeight = 'bold';
    button.style.cursor = 'pointer';
    button.style.fontSize = '0.8rem';

    button.addEventListener('click', () => {
      input.value = search;
      sendBtn.click();
    });

    wrap.appendChild(button);
  });

  sidebar.appendChild(wrap);
});
