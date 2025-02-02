const express = require('express');
const userForTesting = require('../controllers/testController');


const router = express.Router()



router.get("/test-user" , userForTesting )



module.exports = router;