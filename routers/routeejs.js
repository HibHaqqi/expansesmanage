const express =require("express");
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

pages.get('/dashboard',(req,res)=>{
    res.render('dashboardcss');
});

pages.get('/dashboard/expanse',(req,res)=>{
    res.render('dashboard.expanses');
});


pages.get('/dashboard/income',(req,res)=>{
    res.render('dashboard.income');
});


pages.get('/dashboard/wallet',(req,res)=>{
    res.render('dashboard.wallet');
});

pages.get('/profile',(req,res)=>{
    res.render('profile');
});

module.exports = pages;
