const restrauntModel = require('../Models/restrauntmodel')

// Add restraunt
const addrestrauntcontroller = async(req, res) => {
      try {
        const {title, foods, pickup, delivery, rating, restrauntcode, coOrd} = req.body;
      
      if (!title || !foods || pickup === undefined || delivery === undefined || !rating || !restrauntcode || !coOrd) {
        return res.status(400).send({ success: "false", message: "Some required fields are not filled" });
    }

      const storerestrauntinDb = await restrauntModel.create({title, foods, pickup, delivery, rating, restrauntcode, coOrd})
       storerestrauntinDb.save()
          return res.status(200).send({"message":"Congrats!! New restraunt is stored in the database " ,storerestrauntinDb})

      } catch (error) {
            console.log("err in the add restraunt controller")
            res.status(500).send({"message" : "some err in the add restraunt controller!!!"})
      }

 }

//  Dispalay all restraunts

const displayrestrauntControllers = async(req, res) => {

  try {
    const displayRestrountsFromDB = await restrauntModel.find({})
    if(!displayRestrountsFromDB){
      return res.status(400).send({ success: "false", message: "data is not present in the database" });

    }
      return res.status(200).send({"success" :"true", "message" : "All the restraunts present in our app are listed as", "total restarunts" : displayRestrountsFromDB.length ,"data" : displayRestrountsFromDB })
    
  } catch (error) {
    console.log("err in the add restraunt controller")
    res.status(500).send({"message" : "some err in the display restraunt controller!!!"})
  }

}

// Display a single restraunt

const displaySingleRestaurantController = async(req, res) => {
      try {
        const RestrauntUniqueid = req.params.id; 
        if(!RestrauntUniqueid){
          return res.status(400).send({ success: "false", message: "restraunt id is missing!!!" });

        }
        const displayRestrnt = await restrauntModel.findById(RestrauntUniqueid)
        if (!displayRestrnt){
          return res.status(400).send({ success: "false", message: "restraunt is not present!!!" });
        }
        return res.status(200).send({"success" :"true", "message" : "All the details of the specific restraunt are given as",displayRestrnt})

      } catch (error) {
        console.log("err in the display single restraunt controller")
        res.status(500).send({"message" : "some err in the display a single restraunt controller!!!"})
      }


}

// delete the restraunt

const deleterestrauntController = async(req, res) => {
     try {
      
       const paramsid = req.params.id
      //  const allRestraunts = await restrauntModel.findOneAndDelete({ _id: paramsid })
             const allRestraunts = await restrauntModel.findByIdandDelete(paramsid)


       if (!allRestraunts){
        return res.status(400).send({ success: "false", message: "restraunt not found" });
       }

       res.status(200).send({"success":"true" , "message" : "restraunt deleted with the id"  ,"data" : allRestraunts })

     } catch (error) {
      console.log("err in the delete restraunt controller")
      res.status(500).send({"message" : "some err in the display a single restraunt controller!!!"})
     }
}

module.exports = {addrestrauntcontroller, displayrestrauntControllers, displaySingleRestaurantController, deleterestrauntController}



