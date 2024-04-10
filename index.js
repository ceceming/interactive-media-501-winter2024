const menuContainers = document.querySelectorAll('.menu-container');

menuContainers.forEach((container) => {
  const btn = container.querySelector('.popup-btn');
  const menu = container.querySelector('.popup-menu');
  const menu1 = container.querySelector('.popup-menu1');

  btn.addEventListener('click', function() {
    menu.classList.toggle('show');
  });

  document.addEventListener('click', function(event) {
    if (!menu.contains(event.target) && !btn.contains(event.target)) {
      menu.classList.remove('show');
    }
  });

  btn.addEventListener('click', function() {
    menu1.classList.toggle('show');
  });

  document.addEventListener('click', function(event) {
    if (!menu1.contains(event.target) && !btn.contains(event.target)) {
      menu1.classList.remove('show');
    }
  });
});

const image1 = document.getElementById('tile1');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    // Update image source based on cursor position
    if (x < 0.5 && y < 0.5) {
        image1.src = 'tile1.png';
    } else if (x >= 0.5 && y < 0.5) {
        image1.src = 'tile1-2.png';
    } else if (x < 0.5 && y >= 0.5) {
        image1.src = 'tile1-3.png';
    } else {
        image1.src = 'tile1-4.png';
    }
});

const image2 = document.getElementById('tile2');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    // Update image source based on cursor position
    if (x < 0.3 && y < 0.3) {
        image2.src = 'tile2.png';
    } else if (x >= 0.3 && y < 0.3) {
        image2.src = 'tile2-2.png';
    } else if (x < 0.3 && y >= 0.3) {
        image2.src = 'tile2-3.png';
    } else {
        image2.src = 'tile2-4.png';
    }
});

const image3 = document.getElementById('tile3');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    // Update image source based on cursor position
    if (x < 0.8 && y < 0.8) {
        image3.src = 'tile3.png';
    } else if (x >= 0.8 && y < 0.8) {
        image3.src = 'tile3-2.png';
    } else if (x < 0.8 && y >= 0.8) {
        image3.src = 'tile3-3.png';
    } else {
        image3.src = 'tile3-4.png';
    }
});