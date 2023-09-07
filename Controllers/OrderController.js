const moment = require("moment/moment");
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

//get pending orders
const getPendingOrder = async (req, res) => {
    try{
       const singleOrder = await Order.find({  orderStatus: 'pending' }).exec();
        // const singleOrder = Order.where({ 'orderStatus': 'pending' }).exec();
        // const singleOrder = await Order.find({orderStatus: 'pending'}).exec();
    res.json(singleOrder);
    }
    catch{
        res.json('error')
    }
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
        let queryOrder = JSON.stringify(req.query);
        queryOrder = queryOrder.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
        const queryObj = JSON.parse(queryOrder)
        let query =  Order.find(queryObj).sort({createdAt: -1})
        

    // return response with posts, total pages, and current page
        // if(req.query.sort){
        //      query = query.sort(req.query.sort);
        // }
                        // .where('duration')
                        // .gte(req.query.duration)
                        // .where('country')
                        // .gte(req.query.country)

        // const query = {};
        
        // const getOrder = await Order.find(query).sort({createdAt: moment().format().slice(0, 10)}).exec()
        // const getOrder = await Order.find(query).sort({createdAt: -1}).exec();

        // pagination
        // const page = req.query.page*1 || 1;
        // const limit = req.query.limit*1 || 10;
        // const skip = (page -1) * limit;
        // query = query.skip(skip).limit(limit);
        // if(req.query.page){
        //     const orderCount = Order.countDocuments();
        //     if(skip >= orderCount){
        //         throw new Error("This page is not found!")
        //     }
        // }

        const order = await query;
        
    // const count = await Order.countDocuments();
        res.json(order)
        // res.json({order, totalPages: Math.ceil(count / limit),
        // currentPage: page,});
    } catch (error) {
        throw error
    }
}

// find single email service
const getEmailOrder = async (req, res) => {
    const email = req.params.email;
    const getEmail = await Order.find({  userEmail: email }).exec();
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




module.exports = { index, createOrder,  update, getSingleOrder, getEmailOrder, getPendingOrder , dateQuery };