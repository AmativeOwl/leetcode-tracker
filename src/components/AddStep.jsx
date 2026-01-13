import "./AddStep.css"
import { useState } from "react"

export default function AddStep(props) {
    const [stepCount, setStepCount] = useState(0)

    function increment() {
        setStepCount(prev => prev + 1)
    }

    return (
        <div className="add-step-container" onClick={props.onAdd}>
            <div className="add-step-field">
                <p><em>{props.addStepText}</em></p>
            </div>
        </div>
    )
}