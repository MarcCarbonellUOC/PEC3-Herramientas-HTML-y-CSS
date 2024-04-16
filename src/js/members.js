import reynoldsInstrument from '../img/reynolds-instrument.jpg';
import wayneInstrument from '../img/wayne-instrument.jpg';
import mckeeInstrument from '../img/mckee-instrument.jpg';
import platzmanInstrument from '../img/platzman-instrument.jpg';
import reynoldsPortrait from '../img/reynolds-portrait.jpg';
import waynePortrait from '../img/wayne-portrait.jpg';
import mckeePortrait from '../img/mckee-portrait.jpg';
import platzmanPortrait from '../img/platzman-portrait.jpg';

const cards = document.querySelectorAll('.card');

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

