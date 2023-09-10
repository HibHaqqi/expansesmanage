const express = require("express");
const transaction = express.Router();
const { ExpansesTransaction, sequelize } = require("../models");

const Transaction = require("../service/transaction");

//total expanses filter by month to chart dashboard
transaction.get("/v1/expenses/bymonth", async (req, res) => {
  //total expanses filter by month to chart dashboard 
  try {
    const bodyJson = req.body;
    const transactionService = new Transaction();
    const transactionByMonth = await transactionService.transactionByMonth(
      bodyJson
    );

    res.status(200).json({
      status: "success",
      data: transactionByMonth,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: err.message,
      stack: error,
    });
  }
});

  //total expanses filter by month and category to chart dashboard 
transaction.get("/v1/expenses/bycategory", async (req, res) => {
  //total expanses filter by month and category to chart dashboard 
  try {
    const bodyJson = req.body;
    const transactionService = new Transaction();
    const transactionByMonthCategory = await transactionService.transactionByMonthCategory(
      bodyJson
    );

    res.status(200).json({
      status: "success",
      data: transactionByMonthCategory,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: err.message,
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
