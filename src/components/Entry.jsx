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
    const [title, setTitle] = useState("")

    function addStep() {
        setSteps(prev => [...prev, { stepDescription: "" }])
    }

    function updateStep(index, value) {
        setSteps(prev => prev.map((step, i) => 
            i === index ? { stepDescription: value } : step
        ))
    }
    
    async function submitEntry() {
        const data = {
            "problemTitle": title, 
            "problemSteps": steps, 
            "revisionCount": steps.length
        }

        const response = await fetch(
            "https://xtd1jk8069.execute-api.ap-southeast-2.amazonaws.com/prod/revisions",
            {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
        );

        const info = await response.json();
        console.log(info)
    }

    return (
        <div className="entry-container">
            <div className="entry-field">
                <EntryTop exitEntry={props.onClose}/>
                <EntryHeader title={title} setTitle={setTitle}/>
                <div className="steps-workspace">
                    {steps.map((step, index) => 
                        <Step key={index} 
                              value={step.stepDescription}
                              onChange={(val) => updateStep(index, val)}
                        />)
                    }
                </div>
                <AddStep addStepText={addStepText} onAdd={addStep}/>
                <SubmitButton onSubmit={submitEntry}/>
            </div>
        </div>
    )
}