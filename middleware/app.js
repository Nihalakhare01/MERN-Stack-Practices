const express = require("express");
const app = express();

// app.use((req,res,next) =>{
//     console.log("Hii, I am middleware");
//     next();
// });

app.use((req,res,next) =>{
    req.time = new Date(Date.now()).toString;
    console.log(req.method, req.hostname, req.path, req.time);
    next();
});

const checktoken = (req,res, next) => {
    let {token} = req.query;
    if(token === "giveaccess"){
        next();
    }
    res.send();
};

app.get("/api", checktoken, (req,res) => {
    res.send("data");
});

app.get("/", (req,res) =>{
    console.log("Hii, I am root");
});

app.get("/random", (req,res) =>{
    console.log("random page");
});

app.listen(8080, () => {
    console.log("Server is listening to port 8080");
});

 