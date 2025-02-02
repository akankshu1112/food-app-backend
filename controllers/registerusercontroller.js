const usermodel = require("../Models/usermodels");
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
    try {
        const { Username, email, password, phone, Address, Answer } = req.body;
        if (!Username || !email || !password || !phone || !Address || !Answer) {
            return res.status(500).send({ "message": "please provide all fields" })
        }
        const existingUser = await usermodel.findOne({"email": email })
        if (existingUser) {
            return res.status(500).send({ "message": "the user is already registered" })
        }
        const saltRounds = 10;
       const hashedpassword = await bcrypt.hash(password, saltRounds)
        const userStoredInDB = await usermodel.create({ Username, email, password : hashedpassword, phone, Address, Answer })
        return res.status(200).send({ "success": "true", "message": "user register in DB" ,userStoredInDB})

    }
    catch (error) {
        console.error("Error during user registration:", error.message || error);
        return res.status(500).send({
            "message": "An error occurred during user registration",
            "error": error.message || "Internal server error"
        });
    }

}
module.exports = { registerUser };