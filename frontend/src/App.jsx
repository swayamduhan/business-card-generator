import { useState } from 'react'
import './App.css'
import { CreateCard } from './components/CreateCard'
import { Cards } from './components/Cards'
import { DeleteCard } from './components/DeleteCard'

function App() {

  const [cards, setCards] = useState([])
  return (
    <div>
      <CreateCard cards={cards} setCards={setCards}/>
      <DeleteCard cards={cards} setCards={setCards}></DeleteCard>
      <Cards cards={cards}></Cards>
    </div>
  )
}

export default App
