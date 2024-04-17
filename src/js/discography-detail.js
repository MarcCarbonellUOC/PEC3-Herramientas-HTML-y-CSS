import Swiper from 'swiper/swiper-bundle.min.mjs';

import 'swiper/swiper-bundle.css';

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    784: {
      slidesPerView: 2
    },
    1164: {
      slidesPerView: 3
    },
  },
});

const mercury2 = '#9c2227';
const mercury1 = '#ae8957';
const origins = '#346435';
const evolve = '#142629';
const smoke = '#17170f';
const night = '#58555f';

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseover', function() {
    const cardImage = this.querySelector('.card_image');
    switch(cardImage.id) {
      case 'mercury1':
        document.body.style.background = `radial-gradient(circle,  ${mercury1} , black)`;
        break;
      case 'origins':
        document.body.style.background = `radial-gradient(circle,  ${origins} , black)`;
        break;
      case 'evolve':
        document.body.style.background = `radial-gradient(circle,  ${evolve} , black)`;
        break;
      case 'smoke':
        document.body.style.background = `radial-gradient(circle,  ${smoke} , black)`;
        break;
      case 'night':
        document.body.style.background = `radial-gradient(circle,  ${night} , black)`;
        break;
    }
    document.body.style.backgroundAttachment = 'fixed';
  });
  card.addEventListener('mouseout', function() {
    document.body.style.background = `radial-gradient(circle, ${mercury2}, black)`;
    document.body.style.backgroundAttachment = 'fixed';
  });
});
