const express = require('express');
const { signup, login, forget, getSignup, getSingleSignup} = require('../Controllers/AuthController');
// const { createUser, getUser, singleUser} = require('../Controllers/useController')
const router = express.Router()


// Login , Register , forget 


router.post('/login', login);
router.post('/signup', signup);
router.post('/forgot', forget);
router.get('/signup', getSignup);
router.get('/signup/:id', getSingleSignup);

module.exports = router