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
// delete
const deleteMenu = async (req, res) => {
    const id = req.params.id;
    const dltMenu = await Menu.deleteOne({ _id: id });
    res.send(dltMenu);
};
// find single service
const getSingleMenu = async (req, res) => {
    const singleBlog = await Menu.findById(req.params.id);
    res.json(singleBlog);
  };
const getMenu = async (req, res) => {
    try {
        const query = {};
        const cursor = await Menu.find(query);
        res.send(cursor);
    } catch (error) {
        throw error
    }
}


module.exports = { store, getMenu, deleteMenu, getSingleMenu };