// Small script: nav toggle and footer year
document.addEventListener('DOMContentLoaded', function () {
  var navToggle = document.getElementById('navToggle');
  var header = document.querySelector('.site-header');
  navToggle.addEventListener('click', function () {
    var expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    header.classList.toggle('open');
  });

  // Insert current year
  var yEl = document.getElementById('year');
  if (yEl) yEl.textContent = new Date().getFullYear();
});