const express = require("express");
const app = express();
const path = require("path");
const port = 7000;

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"/views"));
app.get("/home", (req,res)=> {
    res.render("home.ejs"); 
});

app.get("/", (req, res) => {
    res.send("aditya");
});
app.listen(port, () => {
    console.log(`Server is ruunig on ${port}`);
});

