import "./Card.css"

export default function Card(props) {
    return (
        <div className="card">
            <div className="card-content">
                <h1>{props.title}</h1>
                <p>PLACEHOLDER VALUE HERE</p>
            </div>
        </div>
    )
}