"use strict";
const { Model } = require("sequelize");
const parseNumberWithTwoDecimals = require("../../utils/parse-number-with-two-decimals");
module.exports = (sequelize, DataTypes) => {
  class Shift extends Model {
    static associate(models) {
      Shift.belongsTo(models.User, {
        foreignKey: "uid",
      });
    }

    static calculateFee(value, fee) {
      return parseNumberWithTwoDecimals(value * (fee / 100));
    }

    static calculateVat(value, vat) {
      return parseNumberWithTwoDecimals(value * vat);
    }
  }
  Shift.init(
    {
      uid: DataTypes.INTEGER,
      deliveries: DataTypes.FLOAT,
      deliveriesFee: DataTypes.FLOAT,
      creditTips: DataTypes.FLOAT,
      creditTipsVat: DataTypes.FLOAT,
      creditTipsFee: DataTypes.FLOAT,
      cashTips: DataTypes.FLOAT,
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
