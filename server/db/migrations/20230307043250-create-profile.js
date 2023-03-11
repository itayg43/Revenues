"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("profiles", {
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
      creditPoints: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      commissionRate: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      insurancePayment: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("profiles");
  },
};
