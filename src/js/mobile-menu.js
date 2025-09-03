(() => {
  const openBtn = document.querySelector('[data-menu-open]');
  const menu = document.querySelector('[data-menu]');
  const closeBtns = document.querySelectorAll('[data-menu-close]');
  if (!openBtn || !menu) return; // якщо елементів немає, скрипт не падає
  const toggleMenu = () => menu.classList.toggle('is-open');
  openBtn.addEventListener('click', toggleMenu);
  closeBtns.forEach(btn => btn.addEventListener('click', toggleMenu));
})();