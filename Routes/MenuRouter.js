const express = require('express');
const { store, getMenu, deleteMenu, getSingleMenu } = require('../Controllers/MenuController');
const { isAuthenticated } = require('../Config/verifyToken');
// const { createUser, getUser, singleUser} = require('../Controllers/useController')
const router = express.Router()


// Subscriber


router.post('/', isAuthenticated, store);
router.get('/', getMenu);
router.get('/:id', isAuthenticated, getSingleMenu);
router.delete('/:id', isAuthenticated, deleteMenu);

module.exports = router