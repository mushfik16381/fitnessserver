const Subscriber = require("../Model/subscriberModel");

// post subscribe
const store = async (req, res) => {
    const { email } = req.body;
    const checkEmail = await Subscriber.find({ email }).exec();
    if (checkEmail.length > 0) {
        return res.json({ success: false, message: 'Subscriber already in the list' });
    }
    else {
        const newSubscriber = new Subscriber(req.body);
        await newSubscriber.save();
        return res.json({ success: true, message: 'Subscribed Successfully' });

    }
}
// get subscribe
const getSubscribe = async (req, res) => {
    try {
        console.log(req.role)
        const query = {};
        const cursor = await Subscriber.find(query).sort({createdAt: -1}).exec();
        res.send(cursor);
    } catch (error) {
        throw error
    }
}


module.exports = { store, getSubscribe };