"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Shift extends Model {
    static associate(models) {
      Shift.belongsTo(models.User, {
        foreignKey: "uid",
      });
    }

    calculateVat() {
      const vatRate = 0.17;
      return this.creditTips * vatRate;
    }

    calculateCommission(rate) {
      const vat = this.calculateVat();
      return (this.deliveries + this.creditTips - vat) * rate;
    }
  }
  Shift.init(
    {
      uid: DataTypes.INTEGER,
      deliveries: DataTypes.FLOAT,
      creditTips: DataTypes.FLOAT,
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
