"use strict";
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static async hashPassword(password) {
      const salt = await bcryptjs.genSalt(10);
      return await bcryptjs.hash(password, salt);
    }

    async validatePassword(password) {
      return await bcryptjs.compare(password, this.password);
    }

    generateToken() {
      return jwt.sign({ id: this.id }, process.env.JWT_PRIVATE_KEY);
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
      timestamps: false,
    }
  );
  return User;
};
