'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Books', 'createdAt', {
      allowNull: false,
      type: Sequelize.DATE
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Books', 'createdAt');
  }
};
