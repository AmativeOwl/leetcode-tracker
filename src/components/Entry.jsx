import "./Entry.css"
import EntryTop from "./EntryTop"
import EntryHeader from "./EntryHeader"
import AddStep from "./AddStep"
import Step from "./Step"
import SubmitButton from "./SubmitButton"
import { useState } from "react"

export default function Entry(props) {
    const addStepText = "+ Add New Step"
    const [steps, setSteps] = useState([])

    function addStep() {
        setSteps(prev => [...prev, {}])
    }

    return (
        <div className="entry-container">
            <div className="entry-field">
                <EntryTop exitEntry={props.onClose}/>
                <EntryHeader />
                <div className="steps-workspace">
                    {steps.map((step, index) => <Step key={index} />)}
                </div>
                <AddStep addStepText={addStepText} onAdd={addStep}/>
                <SubmitButton />
            </div>
        </div>
    )
}