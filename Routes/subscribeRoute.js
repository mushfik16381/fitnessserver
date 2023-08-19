const express = require('express');
const { store, getSubscribe } = require('../Controllers/SubscriberController');
// const { createUser, getUser, singleUser} = require('../Controllers/useController')
const router = express.Router()


// Subscriber


router.post('/', store);
router.get('/', getSubscribe);

module.exports = router