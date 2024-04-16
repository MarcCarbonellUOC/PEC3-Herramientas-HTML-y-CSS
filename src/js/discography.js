const primaryColor = '#0A2647';
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
      case 'mercury2':
        document.body.style.background = `radial-gradient(circle,  ${mercury2} , black)`;
        break;
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
    document.body.style.background = `radial-gradient(circle, ${primaryColor}, black)`;
    document.body.style.backgroundAttachment = 'fixed';
  });
});

