const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

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
  

  let q =  "INSERT INTO user (id, username, email, password) values ?";
  //    let user = [
  //     ["123b","123_userb", "ab@gmail.comb","abcb"],
  //     ["123c","123_userc", "ab@gmail.comc","abcc"],
  //    ];


// data insering in bulk
let data = [];
for(i=0; i<50 ; i++){
    data.push(getRandomUser());
}

  try {
    connection.query(q, [data], (err, results) => {
        if(err) throw err;
        console.log(results);
    });
  } catch (err) {
    console.log(err);
  }

  connection.end();


console.log(getRandomUser());
