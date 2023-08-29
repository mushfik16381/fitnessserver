const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const UserRoute = require("./Routes/UserRoute");
const AuthRoute = require('./Routes/AuthRoute');
const subscribeRoute = require('./Routes/subscribeRoute');
const BlogRoute = require('./Routes/blogRoute');
const postRoute = require('./Routes/PostRoute')
const menuRouter = require('./Routes/MenuRouter')
const orderRoute = require('./Routes/orderRoute')
const PlanRouter = require('./Routes/PlanRouter')
const bodyParser = require("body-parser");
const Order = require("./Model/OrderModel");

// middleware
app.use(cors(

));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      // useCreateIndex: true,
      useUnifiedTopology: true,
      // useFindAndModify: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }

};
connectDB();
async function main() {
  await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}
main();

app.use('/user', UserRoute)
app.use('/auth', AuthRoute)
app.use('/subscribe', subscribeRoute);
app.use('/blog', BlogRoute);
app.use('/post', postRoute);
app.use('/menu', menuRouter);
app.use('/order', orderRoute);
app.use('/plan', PlanRouter);

app.get('/', (req, res) => {
  res.send('Hello Fitness Dine!')
})

// Stripe

const stripe = require("stripe")(process.env.PAYMENT_SECRET_KEY)

// app.post("/create-checkout-session", async (req, res)=>{
//     try{
//         const session = await stripe.checkout.sessions.create({
//             payment_method_types:["card"],
//             mode:"payment",
//             line_items: req.body.items.map(item => {
//                 return{
//                     price_data:{
//                         currency:"AED",
//                         product_data:{
//                             name: item.name
//                         },
//                         unit_amount: (item.price)*100,

//                     },
//                     quantity: item.quantity
//                 }
//             }),
//             success_url: 'https://fitnessdine.com/success',
//             cancel_url: 'https://fitnessdine.com/cancel'
//         })
//         console.log(session.payment_status)
//         res.json({url: session.url})

//     }catch(e){
//      res.status(500).json({error:e.message})
//     }
// })

app.post("/create-checkout-session", async (req, res) => {
  const { plan, price } = req.body;
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "aed",
          product_data: {
            name: plan,
          },
          unit_amount: price * 100,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${process.env.Frontend_URL}/success`,
    cancel_url: `${process.env.Frontend_URL}/cancel`,
  });

  const order = req.body;
  order.paymentType = 'stripe';
  const newOrder = new Order(order);
 await newOrder.save();

res.json({ id: session.id }); 
});



const server = app.listen(port, () => {
  console.log(`Server is running: ${port}`);
});


module.exports = { app };