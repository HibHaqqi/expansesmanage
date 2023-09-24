const { ExpansesTransaction, sequelize } = require("../models");
const Sequelize = require("sequelize");

class Transaction {
  constructor() {
    this.expansesTransaction = new ExpansesTransaction();
  }
  async transactionByMonth(userId) {
    const result = await this.expansesTransaction.sequelize.query(
      `SELECT
                    DATE_TRUNC('month', date_transaction) AS month,
                    SUM(amount) AS total_amount 
                FROM "ExpansesTransactions"
                WHERE user_id = :userId
                GROUP BY month
                ORDER BY month;`,
      { replacements: { userId: userId },
        type: Sequelize.QueryTypes.SELECT }
    );
    return result;
  }
  async transactionByMonthCategory() {
    const result = await sequelize.query(
      `SELECT
                    expanses_id,
                    DATE_TRUNC('month', date_transaction) AS month,
                    SUM(amount) AS total_amount 
                FROM "ExpansesTransactions"
                GROUP BY expanses_id,month
                ORDER BY month;`
    );
    return result;
  }
  
}

module.exports = Transaction;
