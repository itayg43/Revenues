"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("expenses", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      uid: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      category: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      cost: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      comment: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: "",
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: "active",
      },
      statusChangedAt: {
        type: Sequelize.DATE,
      },
      purchasedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("expenses");
  },
};
