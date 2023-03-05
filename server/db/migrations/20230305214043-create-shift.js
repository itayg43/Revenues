"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("shifts", {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      uid: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      deliveriesPaymentReceived: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      creditTipsReceived: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      cashTipsReceived: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      timestamp: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      statusChangeTimestamp: Sequelize.DATE,
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("shifts");
  },
};
