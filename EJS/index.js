const express = require("express");
const app = express();
const path = require("path");
const port = 7000;

// app.use(express.static("public"));
app.use(express.static(path.join(__dirname,"/public")));
app.set("view engine","ejs");
app.set("views", path.join(__dirname,"/views"));
  
app.get("/ ", (req,res)=> {
    res.render("home.ejs"); 
});

// app.get("/rolldice", (req,res)=> {
//     res.render("rolldice.ejs"); 
// });

app.get("/rolldice", (req,res)=> {
    let dice = Math.floor(Math.random() * 6)+1;
    res.render("rolldice.ejs", { dice }); 
});

// app.get("/ig/:username", (req,res) => {
//     let { username } = req.params;
//     console.log(username); 
// });

// app.get("/ig/:username", (req,res) => {
//     let { username } = req.params;
//     res.render("ig.ejs", { uname:username });
// });

// app.get("/ig/:username", (req,res) => {
//     const followers = ["ajay","vijay","raju","kaju"];
//     let { username } = req.params;
//     res.render("ig.ejs", { username, followers });
// });


app.get("/ig/:username", (req,res) => {
    const instadata = require("./data.json");
    const followers = ["ajay","vijay","raju","kaju"];
    let { username } = req.params;
    const data = instadata[username];
    if(data){
        console.log(data); 
        res.render("ig.ejs" , { username, followers , data});
    }else{
        res.render("error.ejs");
    }
}); 


app.get("/", (req, res) => {
   res.send("aditya");
});
app.listen(port, () => {
    console.log(`Server is ruunig on ${port}`);
});

