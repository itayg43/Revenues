"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Shift extends Model {
    static associate(models) {
      Shift.belongsTo(models.User, {
        foreignKey: "uid",
      });
    }

    static calculateVat(value) {
      const vatRate = 0.17;
      return value * vatRate;
    }

    static calculateCommission(value, rate) {
      return value * rate;
    }
  }
  Shift.init(
    {
      uid: DataTypes.INTEGER,
      deliveries: DataTypes.FLOAT,
      creditTips: DataTypes.FLOAT,
      cashTips: DataTypes.FLOAT,
      vat: DataTypes.FLOAT,
      commission: DataTypes.FLOAT,
      timestamp: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Shift",
      tableName: "shifts",
      timestamps: false,
    }
  );
  return Shift;
};
