const hamburguerBtn = document.querySelector('.hamburguer_btn');
const closeBtn = document.querySelector('.close_btn');
const sideMenu = document.querySelector('.side_menu');

hamburguerBtn.addEventListener('click', function() {
  sideMenu.classList.toggle('active');
});

closeBtn.addEventListener('click', function() {
  sideMenu.classList.toggle('active');
});

document.addEventListener('click', function(event) {
  const isSideMenuOpen = sideMenu.classList.contains('active');
  const isClickInsideMenu = sideMenu.contains(event.target);
  const isClickOnBurgerButton = hamburguerBtn.contains(event.target);

  if (isSideMenuOpen && !isClickInsideMenu && !isClickOnBurgerButton) {
    sideMenu.classList.toggle('active');
  }
});