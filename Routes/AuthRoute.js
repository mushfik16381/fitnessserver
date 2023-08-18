const express = require('express');
const { signup, login, forget, getSignup, getSingleSignup } = require('../Controllers/AuthController');
// const { createUser, getUser, singleUser} = require('../Controllers/useController')
const router = express.Router()


// Login , Register , forget 


router.post('/login', login);
router.post('/signup', signup);
router.get('/signup', getSignup);
router.get('/signup/:id', getSingleSignup);
router.post('/forget', forget);

module.exports = router