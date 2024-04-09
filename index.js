const menuContainers = document.querySelectorAll('.menu-container');

menuContainers.forEach((container) => {
  const btn = container.querySelector('.popup-btn');
  const menu = container.querySelector('.popup-menu');

  btn.addEventListener('click', function() {
    menu.classList.toggle('show');
  });

  // Close the menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!menu.contains(event.target) && !btn.contains(event.target)) {
      menu.classList.remove('show');
    }
  });
});