'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Books', 'updatedAt', {
      allowNull: false,
      type: Sequelize.DATE
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Books', 'updatedAt');
  }
};
