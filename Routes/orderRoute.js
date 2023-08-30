const express = require('express');
const { index, update, createOrder, getSingleOrder, getEmailOrder, dateQuery } = require('../Controllers/OrderController');


const router = express.Router()


// Show orders
// Single Order show
// Create Order
// Update Order

router.get('/', index);
router.get('/order/:email', getEmailOrder);
router.get("/datequery/:date", dateQuery);
router.get('/:id', getSingleOrder);
router.post('/', createOrder);
router.patch('/', update);

module.exports = router