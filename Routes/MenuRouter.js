const express = require('express');
const { store, getMenu, deleteMenu, getSingleMenu } = require('../Controllers/MenuController');
// const { createUser, getUser, singleUser} = require('../Controllers/useController')
const router = express.Router()


// Subscriber


router.post('/', store);
router.get('/', getMenu);
router.get('/:id', getSingleMenu);
router.delete('/:id', deleteMenu);

module.exports = router