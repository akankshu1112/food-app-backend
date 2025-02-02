const usermodel = require("../Models/usermodels");

const usercontroller = async (req, res) => {
    const userIdInReq = req.body.userID

    try {
        //   res.status(200).send("user route runing");

        if (!userIdInReq) {
            return res.status(400).send({ "message": "userId is required in the request body" });
        }

        const user = await usermodel.findById(userIdInReq)
        if (!user) {
            return res.status(500).send({ "message": "user with the user id generated by the token is not found" })
        }
        return res.status(200).send({ "message": "YAY id found!!! hence display the user as", user })
    } catch (error) {
        res.status(200).send({ "message": "error occured in display user controller", error })
    }

}

const updateuserdetailcontroller = async (req, res) => {
    try {
         const {Username, phone} = req.body
         if (!Username || !phone) {
            return res.status(400).send({ message: "username and phone are required" });
        }
        const userIdInReq = req.body.userID
        // console.log("userIdInReq", userIdInReq)

        if (!userIdInReq) {
            return res.status(400).send({ "message": "userId is required in the request body in update API" })
        }
        const user = await usermodel.findById(userIdInReq);
        if (!user) {
            return res.status(500).send({ "message": "user with the user id generated by the token is not found" })
        }
        user.Username = Username;
        user.phone = phone
        await user.save();
        return res.status(200).send({ "message": "YAY id found in update!!! hence display the user as", user })

    } catch (error) {
        res.status(200).send({ "message": "error occured in update user controller", error })
    }
}


const deleteUserProfileController = async(req, res) => {
    // res.status(200).send({"message": "the delete user controller is running!!! "})
    // console.log("request ==> ",req)
    try {
        const idfromrequest = req.params.id
        await usermodel.findByIdAndDelete(idfromrequest)
        res.status(200).send({"message": "the delete user controller is running!!!"} , idfromrequest )
        
    } catch (error) {
        res.status(500).send({"success": "false", "message": "some error in the delete user profile controller or this document does not exist at all..."})
    }
}

module.exports = { usercontroller, updateuserdetailcontroller, deleteUserProfileController }