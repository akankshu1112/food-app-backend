const express = require('express')
const app = express();
const morgan = require('morgan')
const colors = require('colors')
const cors  = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const DbConnectfunc = require('./config/db');

DbConnectfunc();
dotenv.config()
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())


app.use("/api", require("./Routes/testRoutes"))
app.use("/v1/auth", require("./Routes/authRoutes"))
app.use("/v1/auth", require("./Routes/authRoutes"))
app.use("/v1/auth", require("./Routes/userRoutes"))
app.use("/v1/restraunt", require("./Routes/restrauntRoutes"))

app.use("/api/v1/restraunt", require("./Routes/categoryRoutes"))

app.use("/api/v1/food" , require("./Routes/foodRoutes"))


app.get('/' , (req, res) =>{
    res.status(200).send('<h1>Hello from server</h1>')
})


const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`server is running at ${PORT}`.red.black)
})