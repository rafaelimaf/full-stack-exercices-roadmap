'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Plans', {
      plan_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      coverage: {
        allowNull: false,
        type: Sequelize.STRING
      },
      price: {
        allowNull: false,
        type: Sequelize.DOUBLE
      }
    });
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('Plans');
  }
};
