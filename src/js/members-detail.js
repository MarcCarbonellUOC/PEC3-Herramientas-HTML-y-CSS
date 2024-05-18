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