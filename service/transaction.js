const {
  ExpansesTransaction,
  Expanses,
  Wallet,
  sequelize
  
} = require("../models");
const {Sequelize, Op} = require("sequelize");

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
  async transactionByMonthCategory(userId) {
    const result = await sequelize.query(
      `SELECT
      E.category AS category,  -- Include the category from Expanse
      DATE_TRUNC('month', ET.date_transaction) AS month,
      SUM(ET.amount) AS total_amount
    FROM "ExpansesTransactions" AS ET
    JOIN "Expanses" AS E ON ET.expanses_id = E.id
    WHERE ET.user_id = :userId
    GROUP BY E.category, month
    ORDER BY month;`,
      { replacements: { userId: userId }, type: Sequelize.QueryTypes.SELECT }
    );
    return result;
  }

  async getAvailableMonthsAndYears(userId) {
    try {
      // Find the minimum and maximum date_transaction values for the user
      const minMaxDate = await ExpansesTransaction.findOne({
        where: {
          user_id: userId,
        },
        attributes: [
          [sequelize.fn('min', sequelize.col('date_transaction')), 'min_date'],
          [sequelize.fn('max', sequelize.col('date_transaction')), 'max_date'],
        ],
      });
  
      // Extract the minimum and maximum dates
      const minDate = minMaxDate.getDataValue('min_date');
      const maxDate = minMaxDate.getDataValue('max_date');
  
      // Create an array to store the available months and years
      const availableMonths = [];
      const availableYears = [];
  
      // Loop through the dates and populate the arrays
      let currentDate = new Date(minDate); // Start from the minimum date
      while (currentDate <= maxDate) {
        const month = currentDate.getMonth() + 1; // Months are 0-based
        const year = currentDate.getFullYear();
  
        // Add the month and year to the arrays if not already added
        if (!availableMonths.includes(month)) {
          availableMonths.push(month);
        }
        if (!availableYears.includes(year)) {
          availableYears.push(year);
        }
  
        // Move to the next month
        currentDate.setMonth(currentDate.getMonth() + 1);
      }
  
      return {
        months: availableMonths,
        years: availableYears,
      };
    } catch (error) {
      throw error;
    }
  }
  async recentTransactionByUserId(userId, res) {
    const transactions = await ExpansesTransaction.findAll({
      where: { user_id: userId },
      limit: 5,
      order: [["date_transaction", "DESC"]],
      attributes: ["id", "amount", "date_transaction"],
      include: [
        { model: Expanses, attribute: ["category"] },
        { model: Wallet, attribute: ["category"] },
      ],
    });

    const formattedTransactions = transactions.map((transaction) => {
      const formattedDate = new Intl.DateTimeFormat("en-US", {
        day: "2-digit",
        month: "short",
        year: "2-digit",
      }).format(transaction.date_transaction);

      return {
        id: transaction.id,
        expanses_id: transaction.Expanse.category,
        amount: transaction.amount,
        date_transaction: formattedDate,
        wallet: transaction.Wallet.category,
      };
    });
    return formattedTransactions;
  }
  async getTransactionById(req, res) {
    try {
      const expanseTrans = await ExpansesTransaction.findOne({
        where: { id: req.params.id },
      });

      if (!expanseTrans) {
        return res.status(404).json({
          status: "failed",
          message: "Transaction not found",
        });
      }

      res.status(200).json({
        status: "Success",
        data: expanseTrans,
        message: "Transaction Berhasil diambil",
      });
    } catch (error) {
      res.status(400).json({
        status: "failed",
        message: "Error retrieving transaction",
      });
    }
  }
}

module.exports = Transaction;
