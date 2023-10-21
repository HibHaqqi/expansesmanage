const express = require("express");
const wallet = express.Router();
const {Wallet} =require("../models");



wallet.post('/v1/wallet',async (req,res)=>{
    const session = req.session;
    const user_id = session.passport.user;
    const {category,description } =req.body;
    try {
    const expanse = await Wallet.create({
       user_id, category,description
    });
    res.status(200).json({
        status: "success",
      
        message:"wallet berhasil ditambahkan"
    })    
    } catch (error) {
    res.status(400).json({
            status: "failed",
            message: error.message,
           
            });
    }
    

})




module.exports = wallet;