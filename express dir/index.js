const express = require("express");
const app = express();
// console.dir(app);

const port = 8080;

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});


//routing
app.get("/", (req,res) => {
    res.send("hello,  I am root!");
});
 
app.get("/apple", (req,res) => {
    res.send("you contacted apple path");
});

app.get("/orange", (req,res) => {
    res.send("you contacted orange path");
});

app.get("*", (req,res) => {
    res.send("you contacted wrong path");
});

app.get("/:username", (req, res) => {
    console.log(req.query);
    res.send("no rfesult");
});

app.get("/search", (req,res) => {
    res.send("you contacted orange path");
});


// app.post("/", (req,res) => {
//     res.send("you have sent a post request to root");
// });

// app.use((req, res) => {
//     console.log("request received"); 
//     res.send("this is a basi responsse");
//     // let code = " <h1> Hello World! </h1> ";
//     // res.send(code);
// });    
// to listen a request app.use()