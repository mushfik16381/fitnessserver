const express = require('express')
const { createUser, getUser, singleUser} = require('../Controllers/useController')
const router = express.Router()


// define the home page route

router.post("/", createUser);

router.get("/", getUser);

router.get("/:id", singleUser);

module.exports = router