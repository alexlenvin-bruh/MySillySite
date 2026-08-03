(function () {
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const year = document.getElementById('year');
  const isEnglish = root.lang === 'en';
  const saved = localStorage.getItem('theme');
  const preferred = matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';

  function setTheme(theme) {
    root.dataset.theme = theme;
    if (!toggle) return;
    const nextIsLight = theme === 'dark';
    toggle.setAttribute(
      'aria-label',
      isEnglish
        ? `Switch to ${nextIsLight ? 'light' : 'dark'} theme`
        : `Включить ${nextIsLight ? 'светлую' : 'тёмную'} тему`
    );
  }

  setTheme(saved || preferred);
  toggle?.addEventListener('click', function () {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
  });
  if (year) year.textContent = new Date().getFullYear();
})();
