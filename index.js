const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const UserRoute = require("./Routes/UserRoute");
const AuthRoute = require('./Routes/AuthRoute');
const subscribeRoute = require('./Routes/subscribeRoute');
const postRoute = require('./Routes/PostRoute')
const menuRouter = require('./Routes/MenuRouter')
const orderRoute = require('./Routes/orderRoute')
const bodyParser = require("body-parser");

// middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
const connectDB = async () => {
  try {
    const conn = await mongoose.connect( process.env.MONGO_URL, {
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
app.use('/post', postRoute);
app.use('/menu', menuRouter);
app.use('/order', orderRoute);

app.get('/', (req, res) => {
  res.send('Hello Fitness Dine!')
})



const server = app.listen(port, () => {
  console.log(`Server is running: ${port}`);
});


module.exports = { app };