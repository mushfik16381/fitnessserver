const mongoose =require ('mongoose')

const menuSchema = mongoose.Schema({
  name: String,
  title: String,
  price: Number,
  calories: Number,
  protein: Number,
  carb: Number,
  fat: Number,
}, { timestamps: true });

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;
