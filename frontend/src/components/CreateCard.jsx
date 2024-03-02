import { useState } from "react"
import axios from "axios"

export function CreateCard({ cards, setCards, setButtonCount }){

    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")
    const [interest, setInterest] = useState("")
    const [twitter, setTwitter] = useState("")
    const [linkedin, setLinkedin] = useState("")

    const cardObj = {
        name : name,
        desc : desc,
        interest : interest,
        twitter : twitter,
        linkedin : linkedin
    }
    return (
        <div>
            <input type="text" id="name" placeholder="enter name" onChange={function(e){
                let value = e.target.value
                setName(value)
            }}></input>
            <input type="text" id="desc" placeholder="enter description" onChange={function(e){
                let value = e.target.value
                setDesc(value)
            }}></input>
            <input type="text" id="interest" placeholder="enter interests" onChange={function(e){
                let value = e.target.value
                setInterest(value)
            }}></input>
            <input type="text" id="twitter" placeholder="enter twitter link" onChange={function(e){
                let value = e.target.value
                setTwitter(value)
            }}></input>
            <input type="text" id="linkedin" placeholder="enter linkedin link" onChange={function(e){
                let value = e.target.value
                setLinkedin(value)
            }}></input>
            <button onClick={function (){
                axios.post('https://business-card-generator.onrender.com/card', {
                    name : name,
                    description : desc,
                    interests : interest,
                    linkedin : linkedin,
                    twitter : twitter
                })
                .then(function (response) {
                    console.log(response);
                    setButtonCount((count)=>count+1)
                })
            }}>Create Card</button>
        </div>
    )
}

