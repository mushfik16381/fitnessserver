const express = require('express');
const { index, create, update, show, deletePost } = require('../Controllers/PostController');
// const { createUser, getUser, singleUser} = require('../Controllers/useController')
const router = express.Router()


// posts show index
// post create 
// update 
// get single


router.get('/', index);
router.get('/:slug', show);
router.post('/', create);
router.patch('/', update);
router.delete('/', deletePost);

module.exports = router