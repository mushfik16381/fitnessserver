const Menu = require("../Model/menuModel");
const store = async (req, res) =>{
    const newMenu = new Menu(req.body);
    await newMenu.save();
    res.json(newMenu);
}
// const store = async (req, res) => {
//     const email = req.body.email;
//     const user = new Subscriber(email);
//     Subscriber.save().then(() => console.log(user))
//     return res.json(user)
// }
const getMenu = async (req, res) => {
    try {
        const query = {};
        const cursor = await Menu.find(query);
        res.send(cursor);
    } catch (error) {
        throw error
    }
}


module.exports = { store, getMenu };