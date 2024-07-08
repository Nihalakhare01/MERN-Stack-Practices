const express = require("express");
const app = express();
// const users = require("../EJS/index.js");
// const cookieParser = require("cookie-parser");
const session = require("express-session");

// app.use(cookieParser("secretcode"));

// // Signed cookie

// app.get("/getsignedcookies", (req,res) => {
//     res.cookie("greet","hello", {signed:true});
//     res.send("Signed cookie send");
// });

// // verify signed coookie route
// app.get("/verify", (req,res) => {
//     console.log(req.signedCookies);
//     res.send("verified");
// });

// // Cookies code
// app.get("/getcookies", (req,res) => {
//     res.cookie("greet","hello");
//     res.cookie("madeIn","India");
//     res.send("sent you some cookies!");
// });

// app.get("/", (req,res) => {
//     console.dir(req.cookies);
//     res.send("Hi, I am root");
// });

// app.use("/users", users);


// Session

app.use(session({secret:"mysecret"}));

app.get("/test", (req,res) => {
    res.send("test successful!");
});


app.listen(3000, ()=> { 
    console.log("Server is listening on port 3000");
});