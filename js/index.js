const menuBtn = document.querySelector('.mobile-nav-btn');
const mobileNav = document.querySelector('.mobile-nav');
const navIcon = document.querySelector('.nav-icon');

menuBtn.addEventListener('click', () => {
  mobileNav.classList.toggle('mobile-nav--open');
  navIcon.classList.toggle('nav-icon--active');
  document.body.classList.toggle('no-scroll');
});
