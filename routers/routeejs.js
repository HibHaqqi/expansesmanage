const express =require("express");
const { isAuthenticated } = require("../service/login");
const pages = express.Router();
const {Expanses,Income} =require("../models");




pages.get('/',(req,res)=>{
    res.render('homepage');
});

pages.get('/regis',(req,res)=>{
    res.render('registration');
});
pages.get('/login',(req,res)=>{
    res.render('login');
});

pages.get('/dashboard',isAuthenticated,(req,res)=>{
    res.render('dashboard');
});

pages.get('/dashboard/expanse', isAuthenticated, async (req,res)=>{
    const expanse = await Expanses.findAll();
    res.render('dashboardexpanses',{expanse});
    
});


pages.get('/dashboard/income'/*isAuthenticated,*/,(req,res)=>{
    res.render('dashboardincome');
});


pages.get('/dashboard/wallet',(req,res)=>{
    res.render('dashboard.wallet');
});

pages.get('/profile',(req,res)=>{
    res.render('profile');
});

pages.get('/logout',(req,res) =>{
    req.logout((err) => {
        if (err) {
            // handle the error
            console.log(err);
            return res.status(500).json({error: 'Error logging out'});
        }
        req.flash('success_msg', 'You are logged out');
        res.redirect('/');
    });
})

module.exports = pages;
