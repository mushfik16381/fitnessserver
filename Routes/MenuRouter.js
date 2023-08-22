const express = require('express');
const { store, getMenu, deleteMenu } = require('../Controllers/MenuController');
// const { createUser, getUser, singleUser} = require('../Controllers/useController')
const router = express.Router()


// Subscriber


router.post('/', store);
router.get('/', getMenu);
router.delete('/:id', deleteMenu);

module.exports = router