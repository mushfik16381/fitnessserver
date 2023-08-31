var bcrypt = require("bcrypt");
var User = require("../Model/userModel");
const jwt = require('jsonwebtoken')
// login 
const login = async (req, res) => {

    const user = await User.findOne({
        email: req.body.email
    });
    if (!user?.role) {
        return res.json({
                success: false,
                message: "User Not found."
            });
    }

    //comparing passwords
    const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
    );
    // checking if password was valid and send response accordingly
    if (!passwordIsValid) {
        return res.json({
                success: false,
                accessToken: null,
                message: "Invalid Email Or Password!"
            });
    }
    //signing token with user id
    var token = jwt.sign({
        id: user.id,
        email: user.email,
        role: user.role,
    }, process.env.API_SECRET, {
        expiresIn: 86400
    });

    //responding to client request with user profile success message and  access token .
    res.status(200)
        .send({
            success: true,
            user: {
                id: user._id,
                email: user.email,
                role: user.role,
            },
            message: "Login successful",
            accessToken: token,
        });

}
const signup = async (req, res) => {
    const { email, name, password } = req.body;
    const checkEmail = await User.find({ email }).exec();

    console.log(checkEmail)

    if (checkEmail.length > 0) {
        return res.json({ success: false, message: 'User Already Exists' });
    }
    else {
        const loggedin = await User.create({
            name,
            email,
            role: 'user',
            password: bcrypt.hashSync(password, 8)
        });

        return res.json({ success: true, message: 'Registration Successful' });

    }


}


// forget
const forget = async (req, res) => {
    const { email } = req.body;
    console.log(email)
    try {
      const oldUser = await User.findOne({ email });
      if (!oldUser) {
        return res.json({ status: "User Not Exists!!" });
      }
    } catch (error) { }
  };



module.exports = { login, signup, forget }