'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Images', [
      { url: 'https://media.discordapp.net/attachments/906632677304709120/906739848885444608/7f927b46-3d48-4b67-9d79-2d163fc39375.png?width=1029&height=686', spotId: 1 },
      { url: 'https://media.discordapp.net/attachments/906632677304709120/906739936491888671/6a2be88e-b535-4b12-8e85-123a06d7abed.png?width=514&height=686', spotId: 1 },
      { url: 'https://media.discordapp.net/attachments/906632677304709120/906739955408203786/5b74d248-76bf-431f-be62-71646c69f472.png?width=915&height=686', spotId: 1 },
      { url: 'https://media.discordapp.net/attachments/906632677304709120/906739991684722688/a2fb1893-2fdd-472b-a448-0730a3c7d047.png?width=514&height=686', spotId: 1 },
      
    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Images', null, {});

  }
};
