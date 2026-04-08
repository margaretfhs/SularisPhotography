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
const links = document.querySelectorAll('.gallery a');
let currentIndex = 0;

links.forEach((link, index) => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    currentIndex = index;
    showImage();
  });
});

const prevBtn = document.querySelector('.lightbox-prev');
const nextBtn = document.querySelector('.lightbox-next');

function showImage() {
  lightbox.style.display = 'flex';
  lightboxImg.src = links[currentIndex].href;
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + links.length) % links.length;
  showImage();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % links.length;
  showImage();
});

   // Mobile ligthbox 

  let startX = 0;

lightbox.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

lightbox.addEventListener('touchend', (e) => {
  let endX = e.changedTouches[0].clientX;
  let diff = startX - endX;

  if (diff > 50) {
    // swipe left → next
    currentIndex = (currentIndex + 1) % links.length;
    showImage();
  } else if (diff < -50) {
    // swipe right → prev
    currentIndex = (currentIndex - 1 + links.length) % links.length;
    showImage();
  }
});
  
  // Insert current year
  var yEl = document.getElementById('year');
  if (yEl) yEl.textContent = new Date().getFullYear();
});
