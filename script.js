// filchan.fun — scripts

// mobile menu
const burger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
if (burger) {
  burger.addEventListener('click', () => {
    const open = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', (!open).toString());
    nav.classList.toggle('open');
  });
}

// smooth scroll for internal anchors
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      nav.classList.remove('open');
      burger.setAttribute('aria-expanded','false');
    }
  });
});

// year
document.getElementById('year').textContent = new Date().getFullYear();

// fake run button
document.querySelectorAll('[data-action="run"]').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('This would open your online REPL. Replace the button action with your integration.');
  });
});
