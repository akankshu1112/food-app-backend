const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({
     title:{
        type:String,
        required:true
     },
     description:{
        type:String,
        required:true
     },
     foodtags : {
        type:Array,
        required:true
     },
     price : {
        type:String,
        required:true
     },
     imageUrl: {
        type : String,
      imageUrl : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.medicalnewstoday.com%2Farticles%2F325253&psig=AOvVaw1RyM2rewbKi8N8m0TYsY_V&ust=1736855238571000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJjA5I3Q8ooDFQAAAAAdAAAAABAE"
     },
     code : {
        type: String
     },
     isAvailable : {
        type : Boolean
     },
     restaurant : {
        type:String,
        required:true
     },
     rating : {
        type : Number,
        default : 0,
        min : 0,
        max : 5
     }

},{timestamps : true}) 

const foodmodel = new mongoose.model("food" , foodSchema) 
module.exports  = foodmodel;
