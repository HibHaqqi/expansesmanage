const express =require("express");
const { isAuthenticated } = require("../service/login");
const pages = express.Router();




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
    res.render('dashboardcss');
});

pages.get('/dashboard/expanse',/*isAuthenticated,*/(req,res)=>{
    res.render('dashboardexpanse');
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

module.exports = pages;
