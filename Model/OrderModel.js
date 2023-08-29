const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    plan: String,
    step: Number,
    duration: Number,
    meal: Number,
    price: Number,
    basePrice: Number,
    snacks: {
        price: Number,
        added: String
    },
    breakFastLight: {
        price: Number,
        added: String
    },
    breakFastFull: {
        price: Number,
        added: String
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    deliveryinstruction: {
        type: String,
        required: true
    },
    gmap: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    apartment: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    paymentType: String,
    orderStatus: { type: String, default: 'pending' }
}, { timestamps: true });

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;