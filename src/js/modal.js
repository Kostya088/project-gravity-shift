(() => {
  const form = document.querySelector('.pole'); // твоя форма
  const emailInput = document.querySelector('#email'); // інпут
  const modalOverlay = document.querySelector('[data-modal]'); // сама модалка
  const closeBtns = document.querySelectorAll('[data-modal-close]'); // кнопки закриття
  if (!form || !emailInput || !modalOverlay) return;
  const toggleModal = () => modalOverlay.classList.toggle('is-open');
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // блокуємо перехід/оновлення сторінки
    const emailValue = emailInput.value.trim();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
    if (isValidEmail) {
      toggleModal();
      emailInput.value = ''; // очистимо поле після успішного вводу
    } else {
      alert('Будь ласка, введіть коректний email');
    }
  });
  closeBtns.forEach(btn => btn.addEventListener('click', toggleModal));
})();