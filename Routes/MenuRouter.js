const express = require('express');
const { index, create, update, deleteMenu } = require('../Controllers/MenuController');

const router = express.Router()


// Login , Register , forget 

router.get('/', index);
router.post('/', create);
router.patch('/', update);
router.delete('/', deleteMenu);

module.exports = router