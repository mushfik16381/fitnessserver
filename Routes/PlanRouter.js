const express = require('express');
const { store, getPlan } = require('../Controllers/PlanController');
const { isAuthenticated } = require('../Config/verifyToken');
// const { createUser, getUser, singleUser} = require('../Controllers/useController')
const router = express.Router()


// Subscriber


router.post('/', isAuthenticated, store);
router.get('/', getPlan);
// router.delete('/:id', deleteMenu);

module.exports = router