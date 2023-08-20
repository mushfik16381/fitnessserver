const express = require('express');
const { store, getBlog, deleteblog, getSingleBlog,  } = require('../Controllers/blogController');
// const { createUser, getUser, singleUser} = require('../Controllers/useController')
const router = express.Router()


// Subscriber


router.post('/', store);
router.get('/', getBlog);
router.delete('/:id', deleteblog);
router.get('/:id', getSingleBlog);

module.exports = router