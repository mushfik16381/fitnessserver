const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    userid: String,
    orderid: String,
}, { timestamps: true });

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
