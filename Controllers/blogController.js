const Blog = require("../Model/blogModel");
const store = async (req, res) =>{
    const newBlog = new Blog(req.body);
    await newBlog.save();
    res.json(newBlog);
}
// const store = async (req, res) => {
//     const email = req.body.email;
//     const user = new Subscriber(email);
//     Subscriber.save().then(() => console.log(user))
//     return res.json(user)
// }
const getBlog = async (req, res) => {
    try {
        const query = {};
        const cursor = await Blog.find(query);
        res.send(cursor);
    } catch (error) {
        throw error
    }
}


module.exports = { store, getBlog };