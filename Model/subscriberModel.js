const mongoose =require ('mongoose')

const subscriberSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true, index: true, unique: true // `email` must be unique
  }
}, { timestamps: true });

const Subscriber = mongoose.model("Subscriber", subscriberSchema);

module.exports = Subscriber;
