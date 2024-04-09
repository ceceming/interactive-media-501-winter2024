const popupBtn = document.getElementById('popup-btn');
const popupMenu = document.getElementById('popup-menu');

popupBtn.addEventListener('click', function() {
  popupMenu.classList.toggle('show');
});

// Close the menu when clicking outside
document.addEventListener('click', function(event) {
  if (!popupMenu.contains(event.target) && !popupBtn.contains(event.target)) {
    popupMenu.classList.remove('show');
  }
});