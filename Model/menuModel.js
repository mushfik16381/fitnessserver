const mongoose =require ('mongoose')

const menuSchema = mongoose.Schema({
  name: String,
  thumbnail: String,
  calories: String,
  protein: String,
  carb: String,
  fat: String,
}, { timestamps: true });

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;
