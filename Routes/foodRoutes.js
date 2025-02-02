const express = require ('express');
const { storeFoodController, updateFoodController, displayAllFoodControler, deleteFoodController} = require('../controllers/foodController');

const router = express.Router();

router.post("/storefood", storeFoodController);

router.put("/updateFood/:id", updateFoodController);

router.get("/displayAllFoods" , displayAllFoodControler)

router.delete("/deleteFood/:id" , deleteFoodController)


module.exports = router;


