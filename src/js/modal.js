(() => {
  const openBtn = document.querySelector('[data-modal-open]');
  const modalOverlay = document.querySelector('[data-modal]');
  const closeBtns = document.querySelectorAll('[data-modal-close]');

  if (!openBtn || !modalOverlay) return; // якщо елементів немає, скрипт не падає

  const toggleModal = () => modalOverlay.classList.toggle('is-open');

  openBtn.addEventListener('click', toggleModal);
  closeBtns.forEach(btn => btn.addEventListener('click', toggleModal));
})();