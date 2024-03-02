const express = require("express")
const { Card } = require("./db.js")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

app.get("/card", async(req,res)=>{
    const cards = await Card.find({})
    res.status(200).json(cards)
})

app.post("/card", async(req,res)=>{
    const name = req.body.name
    const desc = req.body.description
    const interests = req.body.interests
    const linkedin = req.body.linkedin
    const twitter = req.body.twitter
    if(!name || !desc || !interests || !linkedin || !twitter ) {return res.status(400).send('Missing fields')}
    await Card.create({
        name : name,
        description : desc,
        interests : interests,
        linkedin : linkedin,
        twitter: twitter
    })

    res.status(200).json({
        msg : "card created"
    })
})

app.delete("/card", async(req,res)=>{
    const card = await Card.findOneAndDelete({name : req.body.name})
    if(!card){
        return res.status(404).json({
            msg : "card not found"
        })
    }
    res.send("well done")
})

app.listen(3000)