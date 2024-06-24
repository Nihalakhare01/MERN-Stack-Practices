const mongoose = require("mongoose");
const {Schema} = mongoose;

// One to many implementation

main()
    .then((res) => {
        console.log("Connection Successful");
    })
    .catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationdemo");
}

const orderSchema = new Schema({
    item : String,
    price : Number,
});

const customerSchema = new Schema({
    name : String,
    orders : [{
        type: Schema.Types.ObjectId,
         ref: "Order",
        },
    ],
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);


const finCustomer = async () => {
   let result = await Customer.find({}).populate("orders");
    console.log(result);
};
finCustomer();

// const addCustomer = async () => {
//    let del = await Customer.deleteMany({});
//    console.log(del);
//     let cust1 = new Customer({
//         name: "Rahul Kumar",
//     });

//     let order1 = await Order.findOne( {item:"Chips"});
//     let order2 = await Order.findOne({item:"Chocolate"});
// console.log(order1);
// console.log(order2);

//     cust1.orders.push(order1);
//     cust1.orders.push(order2);


//     let result = await cust1.save();
//     console.log(result);
// };

// addCustomer(); 

// const addorder = async () => {
//     await Order.deleteMany({});
//     let res = await Order.insertMany([
//         {item: "Samosa", price: 12},
//         {item:"Chips", price:10},
//         {item: "Chocolate", price:40},
//     ]);
//     console.log(res);
// };
// addorder();