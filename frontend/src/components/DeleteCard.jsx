import axios from "axios"
import { useState } from "react"

export function DeleteCard({ cards, setCards, setButtonCount }){
    const [name, setName] = useState("")
    return (
        <div>
            <input id="delete-name" type="text" placeholder="enter name" onChange={(e)=>{
                const value = e.target.value
                setName(value)
            }}></input>
            <button onClick={function(){
                console.log(document.getElementById("delete-name").value)
                axios.delete("https://business-card-generator.onrender.com/card", {
                data : {
                    name : name
                }})
                .then(()=>{
                    setButtonCount((count)=>count+1)
                })
                setButtonCount((count)=>count+1)
            }}>Delete Card</button>
        </div>
    )
}