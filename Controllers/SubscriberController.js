const Subscriber = require("../Model/subscriberModel");
var nodemailer = require("nodemailer");



const store = async (req, res) =>{
    const newSubscriber = new Subscriber(req.body);
    console.log(newSubscriber);
    try {

        const transporter = nodemailer.createTestAccount ({
            service: "gmail",
            auth: {
                user: "ahmedmushfik7@gmail.com",
              pass: "ftaxcthzcufgztos",
            }
        });

        const mailOptions = {
            from: "ahmedmushfik7@gmail.com",
            to: "ahmed.mushfik16381@gmail.com",
            subject: "Sending Email With React And Nodejs",
            html: '<h1>Congratulation</h1> <h1> You successfully sent Email </h2>'
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log("Error" + error)
            } else {
                console.log("Email sent:" + info.response);
                res.status(201).json({status:201,info})
            }
        })

    } catch (error) {
        console.log("Error" + error);
        res.status(401).json({status:401,error})
    }
    await newSubscriber.save();
    res.json(newSubscriber);
}



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