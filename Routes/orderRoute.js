const express = require('express');
const { index, update, createOrder, getSingleOrder, getEmailOrder, dateQuery } = require('../Controllers/OrderController');
const { isAuthenticated } = require('../Config/verifyToken');
const { isAdmin } = require('../Config/isAdmin');


const router = express.Router()


// Show orders
// Single Order show
// Create Order
// Update Order

router.get('/',  index);
router.get('/order/:email', isAuthenticated, getEmailOrder);
router.get("/datequery/:date", isAuthenticated, dateQuery);
router.get('/:id', isAuthenticated, getSingleOrder);
router.post('/', createOrder);
router.patch('/', isAuthenticated, update);

module.exports = router