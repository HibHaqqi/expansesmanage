'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class IncomeTransaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  IncomeTransaction.init({
    user_id: DataTypes.INTEGER,
    wallet_id: DataTypes.INTEGER,
    income_id: DataTypes.INTEGER,
    expanses_id: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    date_transaction: DataTypes.DATE,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'IncomeTransaction',
  });
  return IncomeTransaction;
};