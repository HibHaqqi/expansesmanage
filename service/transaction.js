const { sequelize } = require("../models");
const Sequelize = require("sequelize");

class transaction {
  async transactionByMonth() {
    const result = await sequelize.query(
      `SELECT
                    DATE_TRUNC('month', date_transaction) AS month,
                    SUM(amount) AS total_amount 
                FROM "ExpansesTransactions"
                GROUP BY month
                ORDER BY month;`,
      { type: Sequelize.QueryTypes.SELECT }
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
                ORDER BY month;`,
    );
        return result;
  }
}


class wallet{


}

module.exports = {transaction,wallet};
