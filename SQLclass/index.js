const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const app = express();

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
  
app.get("/" , (req,res) => {
  let q = `SELECT count(*) FROM user`; 
  try{
     connection.query(q,(err, result) =>{
      if(err) throw err;
        console.log(result[0]["count(*)"]);   
        res.send("home.ejs");
      });  
    }catch (err){
         console.log(err);
         res.send("some error in DB");
    } 
    //  res.send("welcome to home page");
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