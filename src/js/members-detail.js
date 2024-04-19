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

import reynoldsInstrument from '../img/reynolds-instrument.jpg';
import wayneInstrument from '../img/wayne-instrument.jpg';
import mckeeInstrument from '../img/mckee-instrument.jpg';
import platzmanInstrument from '../img/platzman-instrument.jpg';
import reynoldsPortrait from '../img/reynolds-portrait.jpg';
import waynePortrait from '../img/wayne-portrait.jpg';
import mckeePortrait from '../img/mckee-portrait.jpg';
import platzmanPortrait from '../img/platzman-portrait.jpg';

const cards = document.querySelectorAll('.card');

window.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth >= 1280) {


    cards.forEach(card => {
      card.addEventListener('mouseover', function() {
        const cardImage = this.querySelector('.card_image');
        switch(cardImage.id) {
          case 'reynolds':
            cardImage.src = reynoldsInstrument;
            break;
          case 'wayne':
            cardImage.src = wayneInstrument;
            break;
          case 'mckee':
            cardImage.src = mckeeInstrument;
            break;
          case 'platzman':
            cardImage.src = platzmanInstrument;
            break;
        }
      });
      card.addEventListener('mouseout', function() {
        const cardImage = this.querySelector('.card_image');
        switch(cardImage.id) {
          case 'reynolds':
            cardImage.src = reynoldsPortrait;
            break;
          case 'wayne':
            cardImage.src = waynePortrait;
            break;
          case 'mckee':
            cardImage.src = mckeePortrait;
            break;
          case 'platzman':
            cardImage.src = platzmanPortrait;
            break;
        }
      });
    });
    
  }
});
