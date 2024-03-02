const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://admin:Jc6sD0hiR6morjrU@cluster0.aioqxmc.mongodb.net/cards")

const cardSchema = mongoose.Schema({
    name : String,
    description : String,
    interests : String,
    linkedin : String,
    twitter: String
}) 

const Card = mongoose.model("card", cardSchema)

module.exports = { Card }