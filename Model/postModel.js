const mongoose =require ('mongoose')

const postSchema = mongoose.Schema({
  title: String,
  slug: String,
  description: String,
  thumbnail: String,
}, { timestamps: true });

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
