const mongoose =require ('mongoose')

const planSchema = mongoose.Schema({
  name: String,
  bffull: Number,
  bflight: Number,
  baseprice : Number,
  snacks: Number,
  img: String

}, { timestamps: true });

const Plan = mongoose.model("Plan", planSchema);

module.exports = Plan;
