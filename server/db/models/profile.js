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
      creditPoints: DataTypes.FLOAT,
      commissionRate: DataTypes.FLOAT,
      insurancePayment: DataTypes.FLOAT,
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
