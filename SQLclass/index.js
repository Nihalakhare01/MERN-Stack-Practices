const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

var connection = mysql.createConnection({
    host     : "localhost",
    user     : "root",
    password : "",
    database : "deltasql"
  });

  

  try {
    connection.query("SHOW TABLES", (err, results) => {
        if(err) throw err;
        console.log(results);
    });
  } catch (err) {
    console.log(err);
  }


let getRandomUser = () =>  {
  return {
    id: faker.datatype.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}

console.log(getRandomUser());
