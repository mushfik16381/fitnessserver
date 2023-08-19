const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    userid: String,
    orderid: String,
    plan: Number,
    duration: Number,
    meal: Number,
    price: Number,
    basePrice: Number,
    snacks: String,
    breakFastLight: String,
    breakFastFull:String,
    firstName: String,
    lastName: String,
    email: String,
    phone: Number,
    nationality: String,
    date: String,
    city: String,
    address: String,
    apartment: String,
    gmap: String,
    deliveryinstruction: String,
}, { timestamps: true });

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
