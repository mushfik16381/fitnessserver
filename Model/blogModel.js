const mongoose =require ('mongoose')

const blogSchema = new mongoose.Schema({
  title: String,
  slug: {
    type : String,
    unique: true
  },
  image: String,
  description: String,
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
