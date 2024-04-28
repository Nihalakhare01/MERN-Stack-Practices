const express = require("express");
const app =  express();
const port = 8000;

app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.get("/register", (req, res) => {
    let {user,password } = req.query;
   res.send(`Standard GET response. Welcome ${user}!`);
});

app.post("/register", (req, res) => {
    let {user,password } = req.body;
   res.send(`Standard GET response. Welcome ${user}!`);
 });

app.listen(port, () => {
    console.log(`Server Running on ${port}`);
});