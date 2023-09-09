const express = require("express");
const router = require("./routers/routers");
const ejs = require("ejs");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({
    extended:false
}));


app.set('view engine', 'ejs')
app.set('views', "./pages")

app.get("/",(req,res)=>{
    res.render('home');
})

app.use("/",router);

app.listen(port, (res,req)=>{
    console.log(`server up on server ${port}`);
});


