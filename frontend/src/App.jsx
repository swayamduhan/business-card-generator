import { useEffect, useState } from 'react'
import axios from "axios"
import './App.css'
import { CreateCard } from './components/CreateCard'
import { Cards } from './components/Cards'
import { DeleteCard } from './components/DeleteCard'

function App() {

  const [cards, setCards] = useState([])
  const [buttonCount, setButtonCount] = useState(0)
  console.log(buttonCount)

  useEffect(()=>{
    axios.get("https://business-card-generator.onrender.com/card")
      .then((res)=>{
        setCards(res.data)
      })
  }, [buttonCount])

  return (
    <div>
      <CreateCard cards={cards} setCards={setCards} setButtonCount = {setButtonCount}/>
      <DeleteCard cards={cards} setCards={setCards} setButtonCount = {setButtonCount}></DeleteCard>
      <Cards cards={cards}></Cards>
    </div>
  )
}

export default App
