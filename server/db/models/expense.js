"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Expense extends Model {
    static associate(models) {
      Expense.belongsTo(models.User);
    }
  }
  Expense.init(
    {
      uid: DataTypes.INTEGER,
      category: DataTypes.STRING,
      cost: DataTypes.FLOAT,
      comment: DataTypes.STRING,
      status: DataTypes.STRING,
      statusChangedAt: DataTypes.DATE,
      purchasedAt: DataTypes.DATE,
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
