'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Surgeries', {
      surgery_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      specialty: {
        allowNull: false,
        type: Sequelize.STRING
      },
      doctor: {
        allowNull: false,
        type: Sequelize.STRING
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Surgeries');
  }
};
