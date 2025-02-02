const categorymodel = require("../Models/categorymodel")


// store data
const storeDataCategoryController = async (req, res) => {
    
    try {
        
        const {title, imageURL} = req.body;

        if(!title || !imageURL) { 
            res.status(400).send({"success" : "false", "message" : "some field is missing"})
        }

        const storedatainDB = await categorymodel.create({title, imageURL})

        if (!storedatainDB){
            res.status(400).send({"success" : "false", "message" : "DB not found"})
        }
        storedatainDB.save();

        res.status(200).send({"success" : "true", "message" : "YAY! data saved successfully!!"})
    } catch (error) {
        return res.status(500).send({ "mesaage": error.message });
    }
}


// update data

const updateDataCategoryController = async(req, res) => {
        try {
            //  console.log(req.body)
            const {title} = req.body;
            if(!title){
                res.status(400).send({"success" : "false", "message" : "please pass the updated title!!"})

            }

            const idFromFrontend = req.params.id;
            if(!idFromFrontend){
                res.status(400).send({"success" : "false", "message" : "id cannot get through params"})
            }

            const category = await categorymodel.findByIdAndUpdate(idFromFrontend);
                if(!category){
                    res.status(400).send({"success" : "false", "message" : "id is not present in DB"})

                }

             category.title = title;
            category.save()
             
             res.status(200).send({"success" : "true", "message" : "YAY! data updated successfully!!"})
            
        } catch (error) {
            return res.status(500).send({ "mesaage": error.message });
        }
}


module.exports = {storeDataCategoryController, updateDataCategoryController }