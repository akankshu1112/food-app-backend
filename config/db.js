const express  = require ("express")
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const colors = require('colors')

dotenv.config()
const app = express()

const DbConnectfunc = async () => {
    try {
        await mongoose.connect(process.env.Mongo_Url)
        console.log(`Db connection successfull ${mongoose.connection.host}`.bgGreen.yellow)
    } catch (error) {
        console.log("DB connection error",error)
    }
}

module.exports = DbConnectfunc;

