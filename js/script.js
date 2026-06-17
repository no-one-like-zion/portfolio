// === GALLERY LIGHTBOX ===
const imgModal = document.getElementById('imgModal');
if (imgModal) {
  imgModal.addEventListener('show.bs.modal', function (e) {
    const trigger = e.relatedTarget;
    document.getElementById('modalImg').src     = trigger.dataset.img;
    document.getElementById('modalImg').alt     = trigger.dataset.title;
    document.getElementById('modalTitle').textContent   = trigger.dataset.title;
    document.getElementById('modalCaption').textContent = trigger.dataset.caption;
  });

  imgModal.addEventListener('hidden.bs.modal', function () {
    document.getElementById('modalImg').src = '';
  });
}

// === SCROLL REVEAL ===
const revealTargets = document.querySelectorAll(
  '.skill-card, .gallery-item, .about-text, .about-tags, .about-links'
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealTargets.forEach((el) => {
  el.classList.add('to-reveal');
  revealObserver.observe(el);
});

// === NAVBAR TRANSPARENCY ON SCROLL ===
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.style.boxShadow = '0 2px 20px rgba(180, 140, 210, 0.15)';
  } else {
    nav.style.boxShadow = 'none';
  }
}, { passive: true });
