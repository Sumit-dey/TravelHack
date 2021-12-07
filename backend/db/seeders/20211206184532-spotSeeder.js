'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Spots', [
      {
        userId: 2,
        city: 'Atlanta',
        state: 'Georgia',
        country: 'United States',
        title: 'Clean Studio  New Furniture',
        details: '2 guests, Studio, 1 bath',
        aboutThePlace: 'Bright, cute and airy studio unit with plenty of cabinetry. With top-of-the-line appliances from Miele including cooktop, oven, and dishwasher make this a mini-gourmet kitchen. The built-in murphy bed inspires the best use of the space. Fully furnished including flat-screen TV, work desk, sofa, bed. Just imagine yourself home.',
        price: 85,
      },
      {
        userId: 3,
        city: 'Motilal',
        state: 'Alabama',
        country: 'United States',
        title: 'Basement Studio',
        details: '2 guests, Studio, 2 beds, 1 bath',
        aboutThePlace: 'Modern art-filled studio with polished cement floors right in the heart of downtown San Francisco. Conveniently located next to Whole Foods Market. The bay, ferry building, restaurants, and shopping are walking distance. The building has a beautiful rooftop patio with breath-taking views, plenty of seating and BBQ grills. Get ready to enjoy San Francisco like a local.',
        price: 83,
      },
      {
        userId: 4,
        city: 'San Francisco',
        state: 'California',
        country: 'United States',
        title: 'Garden level private apartment near Dolores Park',
        details: '2 guests, Studio, 1 bed, 1 bath',
        aboutThePlace: 'We have a private, fully furnished suite available on the garden level of our condo with private entrance in a beautiful Victorian house two blocks from Dolores Park. Price includes utilities and Internet. You can walk to the J line Metro within 2 minutes, or to the 24th Street or 16th Street BART within 12 minutes. Valencia street is right near by, with shops, restaurants, and everything else.',
        price: 73,
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {



    return queryInterface.bulkDelete('Spots', null, {});

  }
};
