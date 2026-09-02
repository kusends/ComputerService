// ===== SMOOTH SCROLL FOR NAV ANCHORS =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = document.getElementById('header').offsetHeight + 12;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// ===== ACTIVE NAV HIGHLIGHT ON SCROLL =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

function onScroll() {
  const scrollY = window.scrollY + document.getElementById('header').offsetHeight + 40;
  sections.forEach(sec => {
    if (scrollY >= sec.offsetTop && scrollY < sec.offsetTop + sec.offsetHeight) {
      navLinks.forEach(a => {
        a.style.background = '';
        a.style.color = '';
      });
      const active = document.querySelector('nav a[href="#' + sec.id + '"]');
      if (active) {
        active.style.background = 'rgba(255,255,255,.18)';
        active.style.color = '#fff';
      }
    }
  });
}

window.addEventListener('scroll', onScroll, { passive: true });
