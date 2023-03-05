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
      uid: DataTypes.INTEGER,
      category: DataTypes.STRING,
      cost: DataTypes.FLOAT,
      timestamp: DataTypes.DATE,
      status: {
        type: DataTypes.STRING,
        defaultValue: "active",
      },
      statusChangeTimestamp: {
        type: DataTypes.DATE,
        defaultValue: null,
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
