const express = require ('express');
const { storeDataCategoryController, updateDataCategoryController } = require('../controllers/categoryControllers');

const usermiddleware = require("../middlewares/usermiddleware")
const router = express.Router();
const app = express();



router.post("/savecategory" , storeDataCategoryController)

router.put("/updatecategory/:id", updateDataCategoryController)


module.exports = router;

