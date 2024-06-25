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

// customerSchema.pre("findOneAndDelete", async() => {
//     console.log("PRE Middleware");
// });

customerSchema.post("findOneAndDelete", async(customer) => {
    if(customer.orders.length) {
      let res = await Order.deleteMany({ _id: { $in: customer.orders}}); 
      console.log(res);
    }   
});
  
const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

// Find Customer

// const finCustomer = async () => {
//    let result = await Customer.find({}).populate("orders");
//     console.log(result[0]);
// };
// finCustomer();

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


const addCust = async() => {
    let newCust = new Customer({
        name:"Karan Arjun",
    });

    let newOrder = new Order({
        item: "Burger1",
        price:250
    });

    newCust.orders.push(newOrder);

    await newOrder.save();
    await newCust.save();

    console.log("added new customer");
};

const delCust = async() => {
    let data = await Customer.findByIdAndDelete("667abaf8d41ea5d44ac68672");
    console.log(data);
};

// addCust();
delCust();