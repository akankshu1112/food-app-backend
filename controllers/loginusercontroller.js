const usermodel = require("../Models/usermodels");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')

const loginusercontroller = async (req, res) => {
    try {
        const { email, password, Answer} = req.body;
        if (!email || !password || !Answer) {
            return res.status(500).send({ message: "Some required fields are empty" });
        }
        const existinguser = await usermodel.findOne({ email: email });
        if (!existinguser) {
            return res.status(500).send({ message: "please register your email first" });
        }

        const existingPassword = await bcrypt.compare(password, existinguser.password);
        if (!existingPassword) {
            return res.status(500).send({ message: "password not match, try again" });
        }

        const token = jwt.sign({ "userID": existinguser._id, "Email": existinguser.email }, process.env.JWT_PRIVATE_KEY, { expiresIn: "24h" })


        return res.status(200).send({ message: "login succesfull", "token": token, existinguser });
    } catch (error) {
        return res.status(500).send({ "mesaage": error.message });
    }
};
module.exports = { loginusercontroller };



