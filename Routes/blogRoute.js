const express = require('express');
const { store, getBlog } = require('../Controllers/blogController');
// const { createUser, getUser, singleUser} = require('../Controllers/useController')
const router = express.Router()


// Subscriber


router.post('/', store);
router.get('/', getBlog);

module.exports = router