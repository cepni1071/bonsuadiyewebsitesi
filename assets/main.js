// Bon Suadiye — paylaşılan etkileşimler

document.addEventListener('DOMContentLoaded', function () {
  // 1) Mobil menü aç/kapat
  const toggle = document.querySelector('[data-menu-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  if (toggle && mobileMenu) {
    toggle.addEventListener('click', function () {
      mobileMenu.classList.toggle('open');
      const icon = toggle.querySelector('.material-symbols-outlined');
      if (icon) icon.textContent = mobileMenu.classList.contains('open') ? 'close' : 'menu';
    });
  }

  // 2) Footer'daki yıl
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // 3) Menü kenar çubuğu scroll-spy (varsa)
  const sections = document.querySelectorAll('main section[id], main div[id].scroll-spy');
  const navLinks = document.querySelectorAll('[data-menu-nav] a');
  if (navLinks.length) {
    const spySections = document.querySelectorAll('[id].scroll-mt-32, [id].scroll-spy, main [id]');
    window.addEventListener('scroll', function () {
      let current = '';
      document.querySelectorAll('main [id]').forEach(function (section) {
        const top = section.offsetTop;
        if (window.scrollY >= top - 160) current = section.getAttribute('id');
      });
      navLinks.forEach(function (link) {
        const href = link.getAttribute('href') || '';
        const active = current && href.endsWith('#' + current);
        link.classList.toggle('text-primary', active);
        link.classList.toggle('font-bold', active);
        link.classList.toggle('text-secondary', !active);
      });
    });
  }

  // 4) Rezervasyon formu (demo gönderim — backend yok)
  const form = document.querySelector('[data-reservation-form]');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const ok = document.querySelector('[data-reservation-success]');
      if (ok) {
        ok.classList.remove('hidden');
        ok.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      form.reset();
    });
  }

  // 5) İletişim formu (demo gönderim — backend yok)
  const contactForm = document.querySelector('[data-contact-form]');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const ok = document.querySelector('[data-contact-success]');
      if (ok) {
        ok.classList.remove('hidden');
        ok.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      contactForm.reset();
    });
  }
});
