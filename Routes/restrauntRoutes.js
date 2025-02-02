const express = require ('express');
// const usermiddleware = require('../middlewares/usermiddleware');
const { addrestrauntcontroller, displayrestrauntControllers, displaySingleRestaurantController, deleterestrauntController } = require('../controllers/restrauntController');

const app  = express();

const router  = express.Router()

router.post("/addrestraunt", addrestrauntcontroller)

router.get("/displayAllrestraunts", displayrestrauntControllers)

router.get("/displaysinglerestraunts/:id", displaySingleRestaurantController )

router.delete("/deleterestraunt/:id", deleterestrauntController )


module.exports = router;


