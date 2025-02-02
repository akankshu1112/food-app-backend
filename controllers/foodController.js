const foodmodel = require("../Models/foodmodel");
const FoodModel = require("../Models/foodmodel")


// store food
const storeFoodController = async(req, res) => {
    //  res.status(200).send({"message" : "the store food controller is running!!!"})

   try {
    const {title, description, foodtags, price, code, restaurant, rating}  = req.body;
    if(!title || !description || !foodtags || !price || !code || !restaurant || !rating){
        res.status(400).send({"success": false,"message" : "please fill up all the required fields!!"})
    }
    
    const storeFood = await FoodModel.create({title, description, foodtags, price, code, restaurant, rating})

    storeFood.save()
       res.status(200).send({ "success": true, "message" : "The food item is stored in the DB succesfully","data" :  storeFood})

    
   } catch (error) {
    console.error("Error in storeFood controller:", error);
    return res.status(500).send({
        success: false,
        message: "An error occurred while storing the food item.",
        error: error.message, 
    });
   }
}


// update food 

const updateFoodController = async (req,res) => {
        try {
            const foodUpdateId =  req.params.id;
            if (!foodUpdateId) {
                res.status(400).send({"success" : "false", "message" : "please provide the food ID via params"})
            }
            const upadteFood = await foodmodel.findByIdAndUpdate(foodUpdateId)
            
            
            const {title, description, foodtags, price, code, restaurant, rating}  = req.body;
            if(!title || !description || !foodtags || !price || !code || !restaurant || !rating){
                res.status(400).send({"success": false,"message" : "please fill up all the required fields!!"})
            }

            upadteFood.title = title;
            upadteFood.description = description;
            upadteFood.foodtags = foodtags;
            upadteFood.price = price;
            upadteFood.code = code;
            upadteFood.restaurant = restaurant;
            upadteFood.rating = rating;


            upadteFood.save()
            res.status(201).send({"success" : true, "message" : "the food is upadted succesfully!!"})


        } catch (error) {
            console.error("Error in updateFood controller:", error);
            return res.status(500).send({
                success: false,
                message: "An error occurred while updating the food item.",
                error: error.message, 
            }); 
        }
}

// display All Foods

const displayAllFoodControler = async (req, res) => {
     try {
         
        const displayAllFood = await foodmodel.find()
         if (!displayAllFood ) {
            res.status(400).send({"success": false,"message" : "Error in display all fields!!"})
         }
         res.status(201).send({"success" : true, "message" : "Display All foods are now displayed!!", displayAllFood})

         
     } catch (error) {
        console.error("Error in display all Food controller:", error);
        return res.status(500).send({
            success: false,
            message: "An error occurred while displaying all the food item.",
            error: error.message, 
        });  
     }
}


const deleteFoodController = async (req, res) => {
    try {
        const foodUpdateId =  req.params.id;
        if (!foodUpdateId) {
            res.status(400).send({"success" : "false", "message" : "please provide the food ID via params"})
        }
        const upadteFood = await foodmodel.findByIdAndDelete(foodUpdateId);

        upadteFood.save()
        res.status(200).send({"success" : true, "message" : "the food item got deleted succesfully!!"})

    }
     catch (error) {
        console.error("Error in delete Food controller:", error);
        return res.status(500).send({
            success: false,
            message: "An error occurred while deleting food item it is due to that item that you want to delete is got deletd previously.",
            error: error.message, 
        });  
    }
}





module.exports = {storeFoodController, updateFoodController, displayAllFoodControler, deleteFoodController}