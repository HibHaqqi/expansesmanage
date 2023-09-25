const { ExpansesTransaction, Expanses, sequelize } = require("../models");
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
      { replacements: { userId: userId }, type: Sequelize.QueryTypes.SELECT }
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

  async recentTransactionByUserId(userId, res) {
    const transactions = await ExpansesTransaction.findAll({
      where: { user_id: userId },
      limit: 5,
      order: [["date_transaction", "DESC"]],
      attributes: ["amount", "date_transaction"],
      include: { model: Expanses, attribute: ['category'] },
    });
    
    const formattedTransactions = transactions.map((transaction) => {
      const formattedDate = new Intl.DateTimeFormat("en-US", {
        day: "2-digit",
        month: "short",
        year: "2-digit",
      }).format(transaction.date_transaction);
    
      return {
        expanses_id: transaction.Expanse.category,
        amount: transaction.amount,
        date_transaction: formattedDate,
      };
    });
    return formattedTransactions;
  }
  
}

module.exports = Transaction;
