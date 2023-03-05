"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Expense extends Model {
    static associate(models) {
      Expense.belongsTo(models.User, {
        foreignKey: "uid",
      });
    }
  }
  Expense.init(
    {
      uid: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      category: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      cost: {
        allowNull: false,
        type: DataTypes.FLOAT,
      },
      comment: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: "",
      },
      status: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: "regular",
      },
      statusChangedAt: {
        type: DataTypes.DATE,
        defaultValue: null,
      },
      purchasedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Expense",
      tableName: "expenses",
      timestamps: false,
    }
  );
  return Expense;
};
