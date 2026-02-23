import "./SubmitButton.css"

export default function SubmitButton(props) {
    return (
        <div className="submit-button-container">
            <div className="submit-button">
                <button type="submit" onClick={props.onSubmit}>Submit</button>
            </div>
        </div>
    )
}