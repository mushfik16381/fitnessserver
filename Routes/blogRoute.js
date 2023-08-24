const express = require('express');
const { store, getBlog, deleteblog,  updateBlog, getSlugBlog, getSingleBlog  } = require('../Controllers/blogController');
// const { createUser, getUser, singleUser} = require('../Controllers/useController')
const router = express.Router()


// Subscriber


router.post('/', store);
router.get('/', getBlog);
router.delete('/:id', deleteblog);
router.get('/:id', getSingleBlog);
router.get('/blog/:slug', getSlugBlog);
router.patch('/:id', updateBlog);

module.exports = router