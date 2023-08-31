const express = require('express');
const { store, getSubscribe } = require('../Controllers/SubscriberController');
const { isAuthenticated } = require('../Config/verifyToken');
// const { createUser, getUser, singleUser} = require('../Controllers/useController')
const router = express.Router()


// Subscriber


router.post('/', store);
router.get('/', isAuthenticated, getSubscribe);

module.exports = router