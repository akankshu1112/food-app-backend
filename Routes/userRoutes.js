const express = require('express');
const { usercontroller, updateuserdetailcontroller, deleteUserProfileController } = require('../controllers/userController');
const usermiddleware = require('../middlewares/usermiddleware');
const passwordUpdateController = require('../controllers/passwordUpdateController');
const router = express.Router()


router.get("/display-user" ,usermiddleware, usercontroller)

router.put("/updateuserdetails", usermiddleware, updateuserdetailcontroller)

router.put("/updatePassword" , usermiddleware, passwordUpdateController )

router.delete("/deleteUserProfile/:id", usermiddleware, deleteUserProfileController )


module.exports = router;