const Blog = require("../Model/blogModel");
const store = async (req, res) =>{
    const newBlog = new Blog(req.body);
    await newBlog.save();
    res.json(newBlog);
}
// delete
const deleteblog = async (req, res) => {
    const id = req.params.id;
    const dltblog = await Blog.deleteOne({ _id: id });
    res.send(dltblog);
  };
const getBlog = async (req, res) => {
    try {
        const query = {};
        const cursor = await Blog.find(query);
        res.send(cursor);
    } catch (error) {
        throw error
    }
}
// find single service
const getSingleBlog = async (req, res) => {
    const singleBlog = await Blog.findById(req.params.id);
    res.json(singleBlog);
  };

module.exports = { store, getBlog, deleteblog, getSingleBlog };