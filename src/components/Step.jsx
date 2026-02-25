import "./Step.css"
import { useState } from "react"

export default function Step(props) {
    return (
        <div className="step-container">
            <textarea className="step-field"
                      value={props.value}
                      onChange={(e) => props.onChange(e.target.value)}>
            </textarea>
        </div>
    )
}