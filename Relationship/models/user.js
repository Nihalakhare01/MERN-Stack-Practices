const mongoose = require("mongoose");
const {Schema} = mongoose;


// One to few implementation

main()
    .then((res) => {
        console.log("Connection Successful");
    })
    .catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationdemo");
}

const userSchema = new Schema({
    Username : String,
    addresses :[{
        _id:false,
        location: String,
        city: String,
        },
    ],
});

const User = mongoose.model("User", userSchema);

const addUsers = async() => {
     let res1 = await User.deleteMany({});
        console.log(res1);
    let user1 = new User({
        Username: "sherlockholmes",
        addresses: [{
            location: "221B Baker Street",
            city:"London",
        }]
    });
    
    user1.addresses.push({location: "P31 WallStreet", city: "London"});
    let result = await user1.save();
    console.log(result);
}

addUsers();