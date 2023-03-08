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
      deliveries: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      deliveriesFee: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      creditTips: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      creditTipsVat: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      creditTipsFee: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      cashTips: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      timestamp: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("shifts");
  },
};
