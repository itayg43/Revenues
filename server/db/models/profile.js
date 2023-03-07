"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    static associate(models) {
      Profile.belongsTo(models.User, {
        foreignKey: "uid",
      });
    }
  }
  Profile.init(
    {
      uid: DataTypes.INTEGER,
      incomeTaxCreditPoints: DataTypes.FLOAT,
      monthlyEmployerCompanyFee: DataTypes.FLOAT,
      monthlyInsurancePayments: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "Profile",
      tableName: "profiles",
      timestamps: false,
    }
  );
  return Profile;
};
