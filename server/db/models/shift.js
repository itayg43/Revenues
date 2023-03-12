"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Shift extends Model {
    static associate(models) {
      Shift.belongsTo(models.User, {
        foreignKey: "uid",
      });
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
