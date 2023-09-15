'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.ExpansesTransaction, {
        foreignKey : "user_id"
      })
      this.hasMany(models.IncomeTransaction, {
        foreignKey : "user_id"
      })
      this.hasMany(models.Wallet, {
        foreignKey : "user_id"
      })
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    refresh_token:DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};