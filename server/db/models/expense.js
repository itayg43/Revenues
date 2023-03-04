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
      type: DataTypes.STRING,
      cost: DataTypes.FLOAT,
      comment: DataTypes.STRING,
      status: DataTypes.STRING,
      statusChangedAt: DataTypes.DATE,
      paidAt: DataTypes.DATE,
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
