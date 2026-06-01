// Intersection Observer — reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
revealEls.forEach((el) => observer.observe(el));

// Nav scroll effect
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIconOpen = document.getElementById('menu-icon-open');
const menuIconClose = document.getElementById('menu-icon-close');

menuBtn.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  menuIconOpen.classList.toggle('hidden', isOpen);
  menuIconClose.classList.toggle('hidden', !isOpen);
});

// Close mobile menu on nav link click
mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    menuIconOpen.classList.remove('hidden');
    menuIconClose.classList.add('hidden');
  });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          link.classList.toggle(
            'text-indigo-600',
            link.getAttribute('href') === `#${id}`
          );
          link.classList.toggle(
            'text-slate-600',
            link.getAttribute('href') !== `#${id}`
          );
        });
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);

sections.forEach((s) => sectionObserver.observe(s));
