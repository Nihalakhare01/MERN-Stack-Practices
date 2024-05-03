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
        id: "1a",
        username : " nihal ",
        content : " java "       
    },
    {
            id: "2b",
            username : " suyash ",
            content : " BKL"
    },
    {
            id:"3c",
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
    let {username , content} = req.body;
    posts.push({ username, content});
    res.redirect("/posts"); 
});

app.get("/posts/:id", (req,res)=> {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs"); 
});

app.listen(port, () => {
    console.log(`Server Running on ${port}`);
});