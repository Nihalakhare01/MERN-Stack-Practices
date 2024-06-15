const mongoose = require("mongoose");
// mongoose.connect("mongodb://127.0.0.1:27017/test");

main()
    .then((res) => {
        console.log("Connection Successful");
    })
    .catch((err) => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userschema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User", userschema);

// User.findOneAndUpdate({name: "tony"}, {age:18},{new: true})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });


    User.deleteOne({name:"bruce"})
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });


    // User.find({})
    // .then((res) => {
    //     console.log(res);
    // })
    // .catch((err) => {
    //     console.log(err);
    // });

// User.insertMany([
//     {name:"tony", email:"tony@gmail.com",age:50},
//     {name:"bruce", email:"bruce@gmail.com",age:40},
// ]).then((res)=>{
//     console.log(res)
// })
//     .catch((err)=>{
//         console.log(err);
//     });

// const user2 = new User({
//     name: "eve",
//     email:"asdf@gmail.com",
//     age:49,
// });

// user2
//     .save()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });