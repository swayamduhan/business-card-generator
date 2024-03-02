export function Cards({ cards }){
    return (
        <div className="outer-div">
            {cards.map((card)=>{
                return (
                    <div className="card">
                        <h2>{card.name}</h2> 
                        <p>{card.desc}</p>
                        <h3>Interests</h3>
                        <p>{card.interest}</p>
                        <div>
                            <a href={card.linkedin} target="_blank"><button className="link">Linkedin</button></a>
                            <a href={card.twitter} target="_blank"><button className="link">Twitter</button></a>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}