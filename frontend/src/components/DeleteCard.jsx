export function DeleteCard({ cards, setCards }){
    return (
        <div>
            <input id="delete-name" type="text" placeholder="enter name"></input>
            <button onClick={function(){
                setCards(cards.filter((card)=>{
                    if (card.name != document.getElementById("delete-name").value){
                        return card
                    }
                }))
            }}>Delete Card</button>
        </div>
    )
}