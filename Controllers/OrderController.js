const Order = require("../Model/OrderModel");
var nodemailer = require("nodemailer");

// Create Post

const createOrder = async (req, res) => {
    try {
        const order = req.body;
        order.paymentType = 'cod';
        const newOrder = new Order(order);
        const orderData = await newOrder.save();
        if (orderData) {
            res.json({
                success: true,
                id: orderData._id,
            })
        }
        
    } catch (error) {
        res.json({
            success: false,
            message: error
        });
    }
}
// find single service
const getSingleOrder = async (req, res) => {
    const singleOrder = await Order.findById(req.params.id);
    res.json(singleOrder);
  };
// find single service
// const getSingleOrder =  (req, res) => {
    
//     try{
        
//         const singleOrder =  Order.findById(req.params.id);
//         console.log(singleOrder)
//         if (singleOrder) {
//            return res.json({
//                 success: true,
//                 data: singleOrder,
//             })
//         }
//     }
//     catch (error) {
//         return res.json({
//             success: false,
//             message: error
//         });
//     }

// };

// show all data
const index = async (req, res) => {
    try {
        const query = {};
        const getOrder = await Order.find(query);
        res.send(getOrder);
    } catch (error) {
        throw error
    }
}

// find single email service
const getEmailOrder = async (req, res) => {
    const email = req.params.email;
    const getEmail = await Order.find({  email: email }).exec();
      res.json(getEmail);
};

// filter by date / query
const dateQuery = async (req, res) => {
    const date = req.params.createdAt;
    const getDate = await Order.find({  date: date }).exec();
      res.json(getDate);
    // const date = await Order.find({ createdAt: { $lt: req.params.createdAt } });
    // res.send(date);
};

// update 
const update = async (req, res) => {
    console.log(req.body);
    return res.json(req.body)
}




module.exports = { index, createOrder,  update, getSingleOrder, getEmailOrder, dateQuery };