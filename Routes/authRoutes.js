const express = require('express');
const { registerUser } = require('../controllers/registerusercontroller');
const { loginusercontroller } = require('../controllers/loginusercontroller');
const router = express.Router()

router.post("/register" , registerUser )
router.post("/login", loginusercontroller)

module.exports = router;