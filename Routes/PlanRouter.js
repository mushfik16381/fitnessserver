const express = require('express');
const { store, getPlan } = require('../Controllers/PlanController');
// const { createUser, getUser, singleUser} = require('../Controllers/useController')
const router = express.Router()


// Subscriber


router.post('/', store);
router.get('/', getPlan);
// router.delete('/:id', deleteMenu);

module.exports = router