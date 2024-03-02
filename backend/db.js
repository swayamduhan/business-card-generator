const mongoose = require("mongoose")
require('dotenv').config()

mongoose.connect(process.env.MONGOOSE_URL)

const cardSchema = mongoose.Schema({
    name : String,
    description : String,
    interests : String,
    linkedin : String,
    twitter: String
}) 

const Card = mongoose.model("card", cardSchema)

module.exports = { Card }