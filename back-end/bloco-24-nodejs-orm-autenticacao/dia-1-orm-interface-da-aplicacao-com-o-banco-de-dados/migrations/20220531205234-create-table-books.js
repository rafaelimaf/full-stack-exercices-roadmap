'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const Books = queryInterface.createTable('Books', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      author: {
        type: Sequelize.STRING,
        allowNull: false
      },
      pageQuantity: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
    return Books;
  },

  async down (queryInterface, Sequelize) {
    queryInterface.deleteTable('Books', null, {});
  }
};
