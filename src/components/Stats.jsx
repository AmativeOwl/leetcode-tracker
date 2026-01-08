import "./Stats.css"
import Card from "./Card"
import cardData from "../statsData.json"

export default function Stats() {
    return (
        <section className="stats-section">
            {cardData.map((card) => (<Card key={card.id} title={card.title.toUpperCase()}/>))}
        </section>
    )
}