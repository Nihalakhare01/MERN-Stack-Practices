const express = require("express");
const app =  express();
const port = 8200;
const path = require("path");

app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

let posts = [
    {
        username : " nihal ",
        content : " java "       
    },
    {
            username : " suyash ",
            content : " BKL"
    },
    {
            username : " kshitij ",
            content : " bkl "
    }
];


app.get("/posts", (req,res)=> {
    res.render("index.ejs",{ posts }); 
});

app.get("/posts/new", (req,res)=> {
    res.render("new.ejs"); 
});

app.post("/posts", (req,res)=> {
    res.send("newjs"); 
});

app.listen(port, () => {
    console.log(`Server Running on ${port}`);
});