const menuContainers = document.querySelectorAll('.menu-container');

menuContainers.forEach((container) => {
  const btn = container.querySelector('.popup-btn');
  const menu = container.querySelector('.popup-menu');
  const menu1 = container.querySelector('.popup-menu1');

  btn.addEventListener('click', function() {
    menu.classList.toggle('show');
  });

  // Close the menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!menu.contains(event.target) && !btn.contains(event.target)) {
      menu.classList.remove('show');
    }
  });

  btn.addEventListener('click', function() {
    menu1.classList.toggle('show');
  });

  // Close the menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!menu1.contains(event.target) && !btn.contains(event.target)) {
      menu1.classList.remove('show');
    }
  });
});