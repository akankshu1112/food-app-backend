const express = require("express")
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const colors = require('colors')

dotenv.config()
const app = express()

const restrauntSchema  =  new mongoose.Schema({
    title :{
        type:String
    },
    imageURl:{
        type:String
    },
    foods:{
        type:Array
    },
    pickup:{
        type:Boolean,
        default:true
    },
    delivery:{
        type:Boolean,
        default: true
    },
    isOpen : {
        type:Boolean,
        default: true
    },
    logoURl: {
        type:String
    },
    rating : {
        type:Number
    },
    restrauntcode : {
        type:String
    },
    coOrd : {
        id:{
            type:String
        },
        address :{
            type:String
        },
        title : {
            type:String
        }
    }

},{timestamps:true})

const restrauntmodel = new mongoose.model('restraunt', restrauntSchema)

module.exports = restrauntmodel;