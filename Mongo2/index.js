const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");

app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({ extended : true}));
app.use(methodOverride("_method"));



main()
    .then((res) => {
        console.log("Connection Successful");
    })
    .catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

//Index Route
app.get("/chats", async (req, res) => {
   let chats = await Chat.find();
   console.log(chats);
   res.render("index.ejs", {chats});
});

// New Route
app.get("/chats/new", (req,res) =>{
    res.render("new.ejs");
}); 

// create post
app.post("/chats", (req,res) =>{
    let {from ,to, msg } = req.body;
    let newchat = new Chat({
        from :  from,
        to: to,
        msg : msg,
        created_at: new Date(),
    });
    newchat
        .save()
        .then((res)=>{
            console.log("chat saved");
        })
        .catch((err) => {
            console.log(err);
        });
    res.redirect("/chats");
});


// edit Msg/route
app.get("/chats/:id/edit", async (req,res) => {
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", {chat});
});

// Update route
app.put("/chats/:id", async (req,res) => {
    let {id} = req.params;
    let {msg : newmsg} = req.body;
    let updatedchat = await Chat.findByIdAndUpdate(id, 
        {msg: newmsg},
        {runValidators: true, new : true}
    );
    console.log(updatedchat);
    res.redirect("/chats");
}) ;

// Destroy route
app.delete("/chats/:id",  (req,res) => {
    let {id} = req.params;
    let deletedchat = Chat.findByIdAndDelete(id);
    console.log(deletedchat);
    res.redirect("/chats");
})


app.get("/", (req, res) => {
    res.send("root is working");
});

app.listen(8080, () => {
   console.log("server is listening on port 8080"); 
});