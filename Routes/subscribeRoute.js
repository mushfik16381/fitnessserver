const express = require('express');
const { store } = require('../Controllers/SubscriberController');
// const { createUser, getUser, singleUser} = require('../Controllers/useController')
const router = express.Router()


// Subscriber


router.post('/', store);

module.exports = router