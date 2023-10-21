const express = require("express");
const wallet = express.Router();
const {Wallet} =require("../models");



wallet.post('/v1/wallet',async (req,res)=>{
    const {user_id,category,description } =req.body;
    try {
    const expanse = await Wallet.create({
       user_id, category,description
    });
    res.status(200).json({
         status: "success",
        data: expanse,
        message:"wallet berhasil ditambahkan"
    })    
    } catch (error) {
    res.status(400).json({
            status: "failed",
            data: "req.body",
            message: error.message,
            stack:error
            });
    }
    

})




module.exports = wallet;