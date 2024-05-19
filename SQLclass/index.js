const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended : true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

var connection = mysql.createConnection({
    host     : "localhost",
    user     : "root",
    password : "",
    database : "deltasql"
  });


let getRandomUser = () =>  {
    return [
    faker.datatype.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
    ];
  }
  

  //home route
app.get("/" , (req,res) => {
  let q = `SELECT count(*) FROM user`; 
  try{
     connection.query(q,(err, result) =>{
      if(err) throw err;
        let count = result[0]["count(*)"];   
        res.render("home.ejs", {count});
      });  
    }catch (err){
         console.log(err);
         res.send("some error in DB");
    } 
});


// show Route
app.get("/user" , (req,res) => {
  let q = `SELECT * FROM user`; 
  try{
     connection.query(q,(err, users) =>{
      if(err) throw err;
        res.render("showuser.ejs" ,{users});
      });  
    }catch (err){
         console.log(err);
         res.send("some error in DB");
    } 
});


// Edit Route
app.get("/user/:id/edit" , (req,res) => {
  let {id} = req.params;
  let q = `SELECT * FROM user WHERE id = '${id}'`; 
  try{
     connection.query(q,(err, result) =>{
      if(err) throw err;
      let user = result[0];
        res.render("edit.ejs", {user});
      });  
    }catch (err){
         console.log(err);
         res.send("some error in DB");
    } 
});


//UPDATE ROUTE
app.patch("/user/:id", (req,res) => {
  let {id} = req.params;
  let { password : formpass, username : newUsername } = req.body;
  let q = `SELECT * FROM user WHERE id = '${id}'`; 
  try{
     connection.query(q,(err, result) =>{
       if(err) throw err;
        let user = result[0];
        if(formpass != user.password){
        res.send("wrong password");
      }else{
        let q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
          connection.query(q2 , (err,result) => {
          if(err) throw err; 
          res.send(result);

        })
      }
      res.send(user);
        // res.render("edit.ejs", {user});
      });  
    }catch (err){
         console.log(err);
         res.send("some error in DB");
    } 
});



app.listen(8080 , () => {
  console.log("Server is running on port 8080");
});

 // data inserting in bulk
// let data = [];
// for(i=0; i<50 ; i++){
//     data.push(getRandomUser());
// }

//   let q =  "INSERT INTO user (id, username, email, password) values ?";
//   //    let user = [
//   //     ["123b","123_userb", "ab@gmail.comb","abcb"],
//   //     ["123c","123_userc", "ab@gmail.comc","abcc"],
//   //    ];
 

//   try {
//     connection.query(q, [data], (err, results) => {
//         if(err) throw err;
//         console.log(results);
//     });
//   } catch (err) {
//     console.log(err);
//   }

//   connection.end();

// console.log(getRandomUser());