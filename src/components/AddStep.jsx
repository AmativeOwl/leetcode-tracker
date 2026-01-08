import "./AddStep.css"

export default function AddStep(props) {
    return (
        <div className="add-step-container">
            <div className="add-step-field">
                <p><em>{props.addStepText}</em></p>
            </div>
        </div>
    )
}