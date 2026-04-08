// Small script: nav toggle and footer year
document.addEventListener('DOMContentLoaded', function () {
  var navToggle = document.getElementById('navToggle');
  var header = document.querySelector('.site-header');
  navToggle.addEventListener('click', function () {
    var expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    header.classList.toggle('open');
  });

  document.addEventListener('DOMContentLoaded', function () {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.querySelector('.lightbox-img');
  const closeBtn = document.querySelector('.lightbox-close');

  document.querySelectorAll('.gallery a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // STOP opening new tab
      lightbox.style.display = 'flex';
      lightboxImg.src = this.href;
    });
  });

  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
      lightbox.style.display = 'none';
    }
  });
});
  
  // Insert current year
  var yEl = document.getElementById('year');
  if (yEl) yEl.textContent = new Date().getFullYear();
});
