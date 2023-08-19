const User = require("../Model/userModel");

const allUser = async (req, res) => {
    
}

const getUser = async (req, res) => {
    try {
        const query = {};
        const cursor = await User.find(query);
        res.send(cursor);
    } catch (error) {
        throw error
    }
}
const singleUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
}

const createUser = async (req, res) => {
    const newUser = new User(req.body);
    await newUser.save();
    res.json(newUser);
}

module.exports = { createUser, getUser, singleUser, allUser }