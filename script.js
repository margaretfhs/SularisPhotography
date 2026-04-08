document.addEventListener('DOMContentLoaded', function () {

  // ===== NAV TOGGLE (your existing code) =====
  var navToggle = document.getElementById('navToggle');
  var header = document.querySelector('.site-header');

  navToggle.addEventListener('click', function () {
    var expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    header.classList.toggle('open');
  });


  // ===== LIGHTBOX CODE (THIS IS THE IMPORTANT PART) =====
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.querySelector('.lightbox-img');
  const closeBtn = document.querySelector('.lightbox-close');

  document.querySelectorAll('.gallery a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // 🚨 THIS stops new tab behavior
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
