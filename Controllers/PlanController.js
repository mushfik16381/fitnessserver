const Plan = require("../Model/planModel");
const store = async (req, res) =>{
    const newPlan = new Plan(req.body);
    await newPlan.save();
    res.json(newPlan);
}
// const store = async (req, res) => {
//     const email = req.body.email;
//     const user = new Subscriber(email);
//     Subscriber.save().then(() => console.log(user))
//     return res.json(user)
// }
// delete
// const deleteMenu = async (req, res) => {
//     const id = req.params.id;
//     const dltMenu = await Menu.deleteOne({ _id: id });
//     res.send(dltMenu);
// };
const getPlan = async (req, res) => {
    try {
        const query = {};
        const cursor = await Plan.find(query);
        res.send(cursor);
    } catch (error) {
        throw error
    }
}


module.exports = { store, getPlan };