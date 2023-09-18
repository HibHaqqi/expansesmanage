const express =require("express");
const category = express.Router();
const {Expanses,Income} =require("../models");


//add expanses category
category.get('/v1/category',async (req,res)=>{
        const expanse = await Expanses.findAll();
        try {
             res.status(200).json({
                status : "success",
                data : expanse
                
        })   
        res.render('dashboardexpanses',{expanse})
        } catch (error) {
           res.status(400).json({
                status: "failed",
                message: err.message,
                stack:error
                
           })
                
        }
        
})

category.post('/v1/category',async (req,res)=>{
        const {category,description } =req.body;
        try {
        const expanse = await Expanses.create({
           category,description
        });
        res.status(200).json({
             status: "success",
            data: expanse,
            message:"category berhasil ditambahkan"
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

//add income category
category.get('/v1/income',async (req,res)=>{
        const income = await Income.findAll();
        try {
                res.status(200).json({
                status : "success",
                data : income })
        } catch (error) {
                res.status(400).json({
                status: "failed",
                message: err.message,
                stack:error
        })
                
        }
})

category.post('/v1/income',async (req,res)=>{
        const {name,description } =req.body;
        try {
        const income = await Income.create({
           name,description
        });
        res.status(200).json({
             status: "success",
            data: income,
            message:"category berhasil ditambahkan"
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


module.exports = category;