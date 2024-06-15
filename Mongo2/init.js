const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");

app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");

main()
    .then((res) => {
        console.log("Connection Successful");
    })
    .catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
    {
  from: "neha",
  to:"priya",
  msg: "Send me your exam sheet",
  created_at: new Date(), 
},
{
  from: "rohit",
  to:"mohit",
  msg: "teach me js callbacks",
  created_at: new Date()
},
];

Chat.insertMany(allChats);

chat1.save().then((res) => { 
    console.log(res);
}).catch((err) => {
    console.log(err);
});