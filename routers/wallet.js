const express = require("express");
const wallet = express.Router();
const {Wallet} =require("../models");

//add expanses wallet
wallet.get('/v1/wallet',async (req,res)=>{
    const expanse = await Wallet.findAll();
    try {
         res.status(200).json({
            status : "success",
            data : expanse
    })   
    } catch (error) {
       res.status(400).json({
            status: "failed",
            message: err.message,
            stack:error
            
       })
            
    }
    
})

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


wallet.get('/v1/wallet',async (req,res)=>{
// get wallet by user id
})

module.exports = wallet;