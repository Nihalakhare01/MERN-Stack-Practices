const mongoose = require("mongoose");
const {Schema} = mongoose;

// One to Squillions implementation

main()
    .then((res) => {
        console.log("Connection Successful");
    })
    .catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationdemo");
}

const UserSchema = new Schema({
    username : String,
    email : String,
});

const postSchema = new Schema({
    content : String,
    likes : Number,
    user: {
        type: Schema.Types.ObjectId,
        ref:"User"
    }
});

const User = mongoose.model("User", UserSchema);
const Post = mongoose.model("Post", postSchema);

// const addData = async () => {
//     let user = await User.findOne({username:"rahulkumar"});
//     // let user1 = new User({
//     //     username:"rahulkumar",
//     //     email:"rahul@gmail.com"
//     // });

//     let post2 = new Post({
//         content:"Bye Bye :)",
//         likes:23,
//     });

//     post2.user = user;
//     await post2.save();

//     // await user.save();
    
// }

// addData();

const del = async() => {
    await Post.findByIdAndDelete("6679c289d312ba1688606920");
};

del();