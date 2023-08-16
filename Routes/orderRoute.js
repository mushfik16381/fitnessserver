const express = require('express');
const { index, show, create, update } = require('../Controllers/OrderController');


const router = express.Router()


// Show orders
// Single Order show
// Create Order
// Update Order

router.get('/', index);
router.get('/:id', show);
router.post('/', create);
router.patch('/', update);

module.exports = router