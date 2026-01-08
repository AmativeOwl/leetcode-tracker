import "./Entry.css"
import EntryTop from "./EntryTop"
import EntryHeader from "./EntryHeader"
import AddStep from "./AddStep"

export default function Entry(props) {
    const addStepText = "+ Add New Step"

    return (
        <div className="entry-container">
            <div className="entry-field">
                <EntryTop exitEntry={props.onClose}/>
                <EntryHeader />
                <AddStep addStepText={addStepText}/>
            </div>
        </div>
    )
}