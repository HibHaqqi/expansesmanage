const express =require("express");
const transaction = express.Router();
const {ExpansesTransactions} =require("../models");
const sequelize = require("sequelize");

//add expanses transaction
transaction.get('/v1/transaction/expenses',async (req,res)=>{
    //total expanses filter by month to chart dashboard \
    let fromMonth = req.query.month;
    // find all expenses transactions where month of createdAt equals to fromMonth
    const transactionMonthly = await ExpansesTransactions.findAll({
    where: {
        date_transaction: {
          $eq: [sequelize.fn('month', sequelize.col('createdAt')), fromMonth],
        },
      },
      // sum the amount column of all transactions
      attributes: [
        [sequelize.fn('sum', sequelize.col('amount')), 'total_expenses'],
      ],
    });
  
    // send the result as response
    res.json(transactionMonthly);


})

transaction.get('/v1/transaction/expenses',async (req,res)=>{
    //recent add transanction expanses table on dashboard 
})

transaction.get('/v1/transaction/expenses',async (req,res)=>{
    //total expanses filter by category to stacked chart dashboard 
})

transaction.post('/v1/transaction/expenses',async (req,res)=>{
    //post transaction on page expanses to post transaction 
    const {user_id, wallet_id, expanses_id,amaount,date_transaction,description} =req.body;
    try {
        const expanseTrans = await ExpansesTransactions.create({
            user_id , wallet_id, expanses_id, amaount,date_transaction,description
        });
        res.status(200).json({
            status: "Success",
            data : expanseTrans,
            message: "Transaction Berhasil di post"
        }) ;
    } catch (error) {
        res.status(400).json({
            status:"failed",
            data:"req.body",
            message : error.message,
            stack:error
        });

    }

})
transaction.get('/v1/transaction/expenses',async (req,res)=>{
    //get transaction on page expanses to show top expanses by transaction 
})

//add income transaction
transaction.get('/v1/transaction/income',async (req,res)=>{
        //total Income filter by month to chart dashboard
})

transaction.post('/v1/transaction/income',async (req,res)=>{
    //post transaction on page income 
})



module.exports =transaction;