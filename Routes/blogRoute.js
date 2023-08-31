const express = require('express');
const { store, getBlog, deleteBlog,  updateBlog, getSlugBlog, getSingleBlog  } = require('../Controllers/blogController');
const { isAuthenticated } = require('../Config/verifyToken');
const router = express.Router()


// Subscriber


router.post('/', isAuthenticated ,store);
router.get('/', getBlog);
router.delete('/:id', isAuthenticated, deleteBlog);
router.get('/:id', getSingleBlog);
router.get('/blog/:slug', getSlugBlog);
router.patch('/:id', isAuthenticated, updateBlog);

module.exports = router