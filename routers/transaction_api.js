const express =require("express");
const transaction = express.Router();

//add expanses transaction
transaction.get('/v1/transaction/expenses',async (req,res)=>{
    //info by user id - wallet - expanses category 
})

transaction.post('/v1/transaction/expenses',async (req,res)=>{
    //post transaction
})

//add income transaction
transaction.get('/v1/transaction/income',async (req,res)=>{
    //info by user id - wallet - expanses category 
})

transaction.post('/v1/transaction/income',async (req,res)=>{
    //post transaction
})



module.exports =transaction;