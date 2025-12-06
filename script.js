// Interactive behavior: menu, modal, animations, form handling
document.addEventListener('DOMContentLoaded', () => {
  // year
  document.getElementById('year').textContent = new Date().getFullYear();

  // hamburger toggle
  const hamburger = document.getElementById('hamburger');
  const nav = document.querySelector('.nav');
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
    hamburger.classList.toggle('active');
  });

  // modal
  const modal = document.getElementById('modal');
  const bookBtn = document.getElementById('bookBtn');
  const modalClose = document.getElementById('modalClose');
  const modalForm = document.getElementById('modalForm');

  bookBtn.addEventListener('click', () => {
    modal.setAttribute('aria-hidden', 'false');
  });
  modalClose.addEventListener('click', () => {
    modal.setAttribute('aria-hidden', 'true');
  });
  modal.addEventListener('click', (e) => {
    if(e.target === modal) modal.setAttribute('aria-hidden','true');
  });

  modalForm && modalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Pedido de agendamento enviado — obrigado! (formulário simulado)');
    modal.setAttribute('aria-hidden','true');
    modalForm.reset();
  });

  // Booking form
  const bookingForm = document.getElementById('bookingForm');
  bookingForm && bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Obrigado! Recebemos sua solicitação de agendamento (simulado).');
    bookingForm.reset();
  });

  // simple reveal animations
  const animEls = document.querySelectorAll('[data-anim]');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting) {
        e.target.classList.add('inview');
        io.unobserve(e.target);
      }
    });
  }, {threshold: 0.15});
  animEls.forEach(el => io.observe(el));

  // tiny parallax effect on mouse move for hero
  const hero = document.querySelector('.hero-visual');
  if(hero){
    hero.addEventListener('mousemove', (ev) => {
      const rect = hero.getBoundingClientRect();
      const x = (ev.clientX - rect.left) / rect.width - 0.5;
      const y = (ev.clientY - rect.top) / rect.height - 0.5;
      const card = hero.querySelector('.card-floating');
      if(card) card.style.transform = `translate3d(${x * 14}px, ${y * -10}px, 0) rotate(${x * -2}deg)`;
    });
    hero.addEventListener('mouseleave', () => {
      const card = hero.querySelector('.card-floating');
      if(card) card.style.transform = '';
    });
  }
});
