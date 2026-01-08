import "./EntryTop.css"
import minimiseIcon from "../assets/dash-lg.svg"
import exitIcon from "../assets/x-lg.svg"

export default function EntryTop(props) {
    return (
        <div className="entry-top">
            <img className="minimise-icon" 
                src={minimiseIcon} 
                alt="minimise icon" 
                aria-label="minimise icon" />
            <img className="exit-icon"
                onClick={props.exitEntry}
                src={exitIcon} 
                alt="exit icon" 
                aria-label="exit icon" />
        </div>
    )
}