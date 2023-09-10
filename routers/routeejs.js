const express =require("express");
const pages = express.Router();




pages.get('/',(req,res)=>{
    res.render('home');
});

pages.get('/regis',(req,res)=>{
    res.render('registration');
});
pages.get('/login',(req,res)=>{
    res.render('login');
});

pages.get('/dashboard',(req,res)=>{
    res.render('dashboard');
});

pages.get('/dashboard/expanse',(req,res)=>{
    res.render('dashboardexpanses');
});


pages.get('/dashboard/income',(req,res)=>{
    res.render('dashboardincome');
});


pages.get('/dashboard/wallet',(req,res)=>{
    res.render('dashboardwallet');
});

pages.get('/profile',(req,res)=>{
    res.render('profile');
});

module.exports = pages;
