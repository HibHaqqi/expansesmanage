const express = require("express");
const transaction = express.Router();
const { ExpansesTransaction ,sequelize } = require("../models");
const Sequelize = require("sequelize");


//add expanses transaction
transaction.get("/v1/expenses/bymonth", async (req, res) => {
  //total expanses filter by month to chart dashboard \
  const result = await sequelize.query(
    `SELECT
        DATE_TRUNC('month', date_transaction) AS month,
        SUM(amount) AS total_amount
    FROM "ExpansesTransactions"
    GROUP BY month
    ORDER BY month;`,
    { type: Sequelize.QueryTypes.SELECT }
  );

  res.status(200).json({
    status: "success",
    data: result,});
  
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

transaction.post("/v1/expenses", async (req, res) => {
  //post transaction on page expanses to post transaction
  const {
    user_id,
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
      data: expanseTrans,
      message: "Transaction Berhasil di post",
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      data: "req.body",
      message: error.message,
      stack: error,
    });
  }
});
//transaction.get('/v1/expenses',async (req,res)=>{
//get transaction on page expanses to show top expanses by transaction
//})

//add income transaction
//transaction.get('/v1/transaction/income',async (req,res)=>{
//total Income filter by month to chart dashboard
//})

//transaction.post('/v1/transaction/income',async (req,res)=>{
//post transaction on page income
//})

module.exports = transaction;
