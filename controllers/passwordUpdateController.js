const usermodel = require("../Models/usermodels")
const bcrypt = require('bcrypt');

const passwordUpdateController = async (req, res) => {
    // res.status(500).send({"message" : "password update function is running"})

    // const idFromAccesstoken =  req.body.userID //id from the accesss token is coming in the req of the 

    const {email, password, Answer} = req.body;
    if (!email || !password || !Answer){
        res.status(500).send({"message" : "All fields are required"})
    }

    const user = await usermodel.findOne({email : email}) 
    if (!user){
        res.status(500).send({"message" : "user not fonund"})
    }
    const salt = 10;
    const hashedpassword  = await bcrypt.hash(password, salt)
    
    user.password  = hashedpassword;
    user.Answer  = Answer
    await user.save()
    res.status(200).send({"mesaage" : "password and the answer are updated  succesfully"})
}





module.exports = passwordUpdateController;