'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Books', [
      {
        title: 'O homem que era quinta-feira',
        author: 'G.K Chesterton',
        pageQuantity: 120,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'O Hobbit',
        author: 'J.R.R Tolkien',
        pageQuantity: 250,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Books', null, {});
  }
};
