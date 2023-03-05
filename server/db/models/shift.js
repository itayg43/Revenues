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
      deliveriesPaymentReceived: DataTypes.FLOAT,
      creditTipsReceived: DataTypes.FLOAT,
      cashTipsReceived: DataTypes.FLOAT,
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
      modelName: "Shift",
      tableName: "shifts",
      timestamps: false,
    }
  );
  return Shift;
};
