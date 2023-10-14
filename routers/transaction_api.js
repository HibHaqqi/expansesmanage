const express = require("express");
const transaction = express.Router();
const { ExpansesTransaction, sequelize } = require("../models");

const Transaction = require("../service/transaction");
const LoginValidator = require("../service/login");

//total expanses filter by month to chart dashboard
transaction.get("/v1/expenses/bymonth", async (req, res) => {
  //total expanses filter by month to chart dashboard
  try {
    const session = req.session;
    const user_id = session.passport.user;
    const transactionService = new Transaction();
    const transactionByMonth = await transactionService.transactionByMonth(
      user_id
    );

    res.status(200).json({
      status: "success",
      data: transactionByMonth,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
      stack: error,
    });
  }
});
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
//total expanses filter by month and category to chart dashboard
transaction.get("/v1/expenses/bycategory",  LoginValidator.isAuthenticated,async (req, res) => {
  //total expanses filter by month and category to chart dashboard
  try {
    const session = req.session;
    const user_id = session.passport.user;
    const transactionService = new Transaction();
    const transactionByMonthCategory =
      await transactionService.transactionByMonthCategory(user_id);
      const categories = {}; // Object to store data by category
      
      transactionByMonthCategory.forEach(item => {
        const categoryId = item.category; // Category ID
        const month = new Date(item.month).getMonth(); // Get the month index (0-11)
  
        if (!categories[categoryId]) {
          categories[categoryId] = {
            label: `${categoryId}`,
            data: Array(12).fill(0), // Initialize an array to store data for each month
            backgroundColor: getRandomColor() // You can define a function to generate random colors
          };
        }
  
        categories[categoryId].data[month] = parseFloat(item.total_amount);
      });
  
      // Prepare the data to be sent to the client
      const labels = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
      ];
  
      const chartData = {
        labels: labels,
        datasets: Object.values(categories)
      };
  
      res.status(200).json({
        status: "success",
        data: chartData,
      });
    
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
      stack: error,
    });
  }
});

//transaction.get('/v1/expenses',async (req,res)=>{
//recent add transanction expanses table on dashboard
//})

transaction.get("/v1/expenses", async (req, res) => {
  const allTransaction = await ExpansesTransaction.findAll();
  try {
    res.status(200).json({
      status: "success",
      data: allTransaction,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: err.message,
      stack: error,
    });
  }
  //total expanses filter by category to stacked chart dashboard
});

transaction.post(
  "/v1/expenses",
  LoginValidator.isAuthenticated,
  async (req, res) => {
    //post transaction on page expanses to post transaction
    const session = req.session;
    const user_id = session.passport.user;
    const {
      
      wallet_id,
      expanses_id,
      amount,
      date_transaction,
      description,
    } = req.body;

    try {
      const expanseTrans = await ExpansesTransaction.create({
        user_id,
        wallet_id,
        expanses_id,
        amount,
        date_transaction,
        description,
      });
      res.status(200).json({
        status: "Success",
        message: "Transaction Berhasil di post",
      });
    } catch (error) {
      res.status(400).json({
        status: "failed",
        data: "req.body",
        message: "data tidak lengkap",
        
      });
    }
  }
);

transaction.get(
  "/v1/expensesbyid",
  LoginValidator.isAuthenticated,
  
  async (req, res) => {
    //get transaction on page expanses to show top expanses by transaction
    try {
      const session = req.session;
      const user_id = session.passport.user;
      const transactionService = new Transaction();
      const recentTransactionByUserId = await transactionService.recentTransactionByUserId(
        user_id
      );
      res.json(recentTransactionByUserId)
    } catch (error) {
      res.status(400).json({
        status: "failed",

        message: error.message,
        stack: error,
      });
    }
  }
);

// edit by id transaction
transaction.put(
  "/v1/expenses/:id",
  LoginValidator.isAuthenticated,
  async (req, res) => {
    const session = req.session;
    const user_id = session.passport.user;
    const {
      wallet_id,
      expanses_id,
      amount,
      date_transaction,
      description,
    } = req.body;

    try {
      const expanseTrans = await ExpansesTransaction.update({
        user_id,
        wallet_id,
        expanses_id,
        amount,
        date_transaction,
        description,
      }, {
        where: { id: req.params.id }
      });

      if (!expanseTrans) {
        return res.status(404).json({
          status: "failed",
          message: "Transaction not found",
        });
      }

      res.status(200).json({
        status: "Success",
        message: "Transaction Berhasil di update",
      });
    } catch (error) {
      res.status(400).json({
        status: "failed",
        data: "req.body",
        message: "data tidak lengkap",
        
      });
    }
  }
);
//get transaction by id
transaction.get(
  "/v1/expenses/:id",
  LoginValidator.isAuthenticated,
  async (req, res) => {
    try {
      const expanseTrans = await ExpansesTransaction.findOne({
        where: { id: req.params.id }
      });

      if (!expanseTrans) {
        return res.status(404).json({
          status: "failed",
          message: "Transaction not found",
        });
      }
      res.render('modal.expanseedit',{expanseTrans})
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
);

transaction.delete('/v1/delete-expanse/:id', async (req, res) => {
  try {
    const deletedExpanse = await ExpansesTransaction.destroy({
      where: { id: req.params.id } // Match by the 'id' field
    });

    if (deletedExpanse === 0) {
      return res.status(404).json({ error: 'Transaction not found' }); // Transaction not found
    }

    return res.status(204).send(); // Transaction deleted successfully
  } catch (error) {
    return res.status(500).json({ error: 'Error deleting transaction' }); // Handle database error
  }
});

//add income transaction
//transaction.get('/v1/transaction/income',async (req,res)=>{
//total Income filter by month to chart dashboard
//})

//transaction.post('/v1/transaction/income',async (req,res)=>{
//post transaction on page income
//})

module.exports = transaction;

