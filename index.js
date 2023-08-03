const express = require("express");


const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({
    extended:false
}));

app.get("/",(req,res)=>{
    res.send("server up");
})

app.listen(port, (res,req)=>{
    console.log(`server up on server ${port}`);
});


