import "./Header.css"

export default function Header(props) {
    return (
        <section className="header-section">
            <div className="title">
                <h1>{props.title}</h1>
            </div>
            {/* <hr /> */}
        </section>
    )
}