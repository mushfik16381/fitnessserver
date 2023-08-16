var bcrypt = require("bcrypt");
var User = require("../Model/userModel");
const SignUp = require("../Model/authModel");
// login 
// const login = async (req, res) => {
//     const user = User.findOne({
//         email: req.body.email
//     });
//     if (!user) {
//         return res.status(404)
//             .send({
//                 success: false,
//                 message: "User Not found."
//             });
//     }

    

//     //comparing passwords
//     const passwordIsValid = bcrypt.compareSync(
//         req.body.password,
//         user.password
//     );
//     // checking if password was valid and send response accordingly
//     if (!passwordIsValid) {
//         return res.status(401)
//             .send({
//                 success: false,
//                 accessToken: null,
//                 message: "Invalid Password!"
//             });
//     }
//     //signing token with user id
//     var token = jwt.sign({
//         id: user.id,
//         email: user.email,
//         role: user.role,
//     }, process.env.API_SECRET, {
//         expiresIn: 86400
//     });

//     //responding to client request with user profile success message and  access token .
//     res.status(200)
//         .send({
//             success: true,
//             user: {
//                 id: user._id,
//                 email: user.email,
//                 role: user.role,
//             },
//             message: "Login successfull",
//             accessToken: token,
//         });
// }
const login = async (req, res) =>{
    const newSignUp = new SignUp(req.body);
    await newSignUp.save();
    res.json(newSignUp);
}
// signup

// const signup = async (req, res) => {
//     const user = new User({
//         name: req.body.name,
//         email: req.body.email,
//         role: 0,
//         password: bcrypt.hashSync(req.body.password, 8)
//     });

//     user.save((err, user) => {
//         if (err) {
//             res.status(500)
//                 .send({
//                     success: false,
//                     message: err,
//                 });
//             return;
//         } else {
//             res.status(200)
//                 .send({
//                     success: true,
//                     message: "User Registered successfully"
//                 })
//         }
//     });
// }
const signup = async (req, res) =>{
    const newSignUp = new SignUp(req.body);
    await newSignUp.save();
    res.json(newSignUp);
}
// forget

const forget = async (req, res) => {
    console.log(req.body);
    return res.json(req.body)
}


module.exports = { login, signup, forget }