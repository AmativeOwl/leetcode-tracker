import "./AddEntry.css"
import { useState } from "react"

export default function AddEntry(props) {

    const [mouseEnter, setMouseEnter] = useState(false);
    const styles = {
        backgroundColor: (mouseEnter) ? "#D3D3D3" : "white"
    }

    return ( 
        <>
            <div className="add-entry-container">
                <div className="add-entry-field" 
                    onMouseEnter={() => setMouseEnter(true)} 
                    onMouseLeave={() => setMouseEnter(false)} 
                    onClick={props.handleAddEntry}
                    style={styles}>
                <p><em>{props.addEntryText}</em></p>
                </div>
            </div>
        </>
    )
}