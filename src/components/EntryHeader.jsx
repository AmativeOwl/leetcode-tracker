import "./EntryHeader.css"

export default function EntryHeader(props) {
    return (
        <div className="entry-header">
            <input 
                type="text" 
                value={props.title}
                onChange={(e) => props.setTitle(e.target.value)}
            />
        </div>
    )
}