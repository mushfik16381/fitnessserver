const Subscriber = require("../Model/subscriberModel");
const store = async (req, res) =>{
    const newSubscriber = new Subscriber(req.body);
    await newSubscriber.save();
    res.json(newSubscriber);
}
// const store = async (req, res) => {
//     const email = req.body.email;
//     const user = new Subscriber(email);
//     Subscriber.save().then(() => console.log(user))
//     return res.json(user)
// }
const getSubscribe = async (req, res) => {
    try {
        const query = {};
        const cursor = await Subscriber.find(query);
        res.send(cursor);
    } catch (error) {
        throw error
    }
}


module.exports = { store, getSubscribe };