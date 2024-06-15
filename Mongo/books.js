const mongoose = require("mongoose");

main()
    .then((res) => {
        console.log("Connection Successful");
    })
    .catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}


const bookschema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 20,
    },
    author: {
        type: String,
    },
    price: {
        type:Number, 
        min: [1, "price is too low "],  
    },
    discount:{
        type:Number,
        default:0,
    },
    genre: [String]
});

const Book = mongoose.model("Book", bookschema);

// let book1 = new Book({
//     title:"Science",
//     author:"RD Sharma",
//     price:1299
// });

// book1
// .save()
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });


Book.findByIdAndUpdate('666d749792b21f3db882aa9d', {price:2220}, {runValidators:true})
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })