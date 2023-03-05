"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("expenses", {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      uid: Sequelize.INTEGER,
      category: Sequelize.STRING,
      cost: Sequelize.FLOAT,
      comment: Sequelize.STRING,
      purchasedAt: Sequelize.DATE,
      status: Sequelize.STRING,
      statusChangedAt: Sequelize.DATE,
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("expenses");
  },
};
