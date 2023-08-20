const express = require('express');
const { store, getMenu } = require('../Controllers/MenuController');
// const { createUser, getUser, singleUser} = require('../Controllers/useController')
const router = express.Router()


// Subscriber


router.post('/', store);
router.get('/', getMenu);

module.exports = router