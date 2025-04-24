import "./Note.css"

const NoteForm = ({onChangeF, onChangeN, onChangeU, onClick}) => {
    return (
        <div>
            <form className="form-switch newNoteForm">
                <label className="newNoteLabel">Folder Name</label>
                <br />
                <input type="text" className="newNoteInput" id="folderName" onChange={onChangeF} maxLength={15}></input>
                <br />
                <label className="newNoteLabel">Note</label>
                <br />
                <textarea id="noteContent" className="newNoteNote" onChange={onChangeN} maxLength={100}></textarea>
                <br />
                <br />
                <div className="checkboxStyle">
                <label className="newNoteLabel">Make Private?</label>
                <input type="checkbox" className="newNoteInput checkbox form-check-input" id="user" onChange={onChangeU}></input>
                </div>
                <br />
                <button class="submitButton" type="submit" onClick={onClick}>Create</button>
            </form>
        </div>
    )
}

export default NoteForm