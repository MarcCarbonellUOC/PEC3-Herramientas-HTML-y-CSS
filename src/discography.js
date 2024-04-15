const primaryColor = '#0A2647';
const mercury = '#9c2227';
const origins = '#346435';
const evolve = '#142629';
const smoke = '#17170f';
const itunes = '#3c3333';
const night = '#58555f';
const continued = '#787186';
const hell = '#343333';
const imagine = '#3e2633';

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseover', function() {
    const cardImage = this.querySelector('.card_image');
    switch(cardImage.id) {
      case 'mercury':
        document.body.style.background = `radial-gradient(circle,  ${mercury} , black)`;
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
      case 'itunes':
        document.body.style.background = `radial-gradient(circle,  ${itunes} , black)`;
        break;
      case 'night':
        document.body.style.background = `radial-gradient(circle,  ${night} , black)`;
        break;
      case 'continued':
        document.body.style.background = `radial-gradient(circle,  ${continued} , black)`;
        break;
      case 'hell':
        document.body.style.background = `radial-gradient(circle,  ${hell} , black)`;
        break;
      case 'imagine':
        document.body.style.background = `radial-gradient(circle,  ${imagine} , black)`;
        break;
    }
    document.body.style.backgroundAttachment = 'fixed';
  });
  card.addEventListener('mouseout', function() {
    document.body.style.background = `radial-gradient(circle, ${primaryColor}, black)`;
    document.body.style.backgroundAttachment = 'fixed';
  });
});

