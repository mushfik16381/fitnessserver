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
// find single service
const getSlugBlog = async (req, res) => {
  const slug = req.params.slug;
  const getSlug = await Blog.findOne({  slug: slug }).exec();
    res.json(getSlug);
  };

//single blog edit
const updateBlog = async (req, res) => {
    const id = req.params.id;
    const updatevalue = req.body;
    const filter = { _id: id };
    const upblog = await Blog.findOneAndUpdate(filter, updatevalue, {
      new: true,
    });
    res.send(upblog);
  };

module.exports = { store, getBlog, deleteblog,  updateBlog, getSlugBlog, getSingleBlog };


// const slug = req.params.slug;
// const query = { slug: slug};
// const cursor = Blog.find(query);
// console.log(cursor)