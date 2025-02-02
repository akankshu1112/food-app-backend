const express = require("express")
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const colors = require('colors')

dotenv.config()
const app = express()

const Userschema = new mongoose.Schema({
    Username: {
        type: String,
        required: [true, "username is required"]

    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: true

    },
    password: {
        type: String,
        required: [true, "password is required"]

    },
    phone: {
        type: String,
        required: [true, "phone number is required"]

    },
    Address: {
        type: Array,
        required: [true, "Address is required"]

    },
    Usertype: {
        type: String,
        required: [true, "user type is required"],
        default: 'Client',
        enum: ["Client", "Admin", "Vendor", "Driver"]
    },
    Profile: {
        type: String,
        default: "https://fastly.picsum.photos/id/184/200/200.jpg?hmac=MflhZikSXVt3rvwnx8_nAvoHdLOwJFA0B2_Mk8vQvms"
    },
    Answer:{
        type: String,
        required : [true, "Answer is required"]
    }
},
    { timestamps: true })

 const usermodel = mongoose.model('User', Userschema);
 module.exports = usermodel