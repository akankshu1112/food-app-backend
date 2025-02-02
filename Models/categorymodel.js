const express = require("express")
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const colors = require('colors')


dotenv.config()
const app = express()

const CategorySchema = new mongoose.Schema({
    title : {
        type : String,
        required  : [true, "title is required"]
    },
    imageURL : {
        type : String,
        default : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdribbble.com%2Fshots%2F5318174-Icons-Food-Categories&psig=AOvVaw2Kh04-ok7_zzG3pojS0iSk&ust=1736405196688000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNi088vD5YoDFQAAAAAdAAAAABAE"
    }
},
    { timestamps: true })

 const categorymodel = mongoose.model('Category', CategorySchema);
 module.exports = categorymodel;