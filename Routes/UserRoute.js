const express = require('express')
const { createUser, getUser, singleUser, allUser} = require('../Controllers/useController')
const router = express.Router()


// define the home page route

router.post("/", createUser);

router.get("/", getUser);

router.get("/single/:id", singleUser);

router.get('/all', allUser);

module.exports = router