import "./Note.css"

const NoteForm = ({onChangeF, onChangeN, onChangeU, onClick}) => {
    return (
        <div>
            <form className="form-switch">
                <label >Folder Name</label>
                <br />
                <input type="text" id="folderName" onChange={onChangeF} maxLength={15}></input>
                <br />
                <label >Note</label>
                <br />
                <textarea id="noteContent" onChange={onChangeN} maxLength={100}></textarea>
                <br />
                <br />
                <div className="checkboxStyle">
                <label>Make Private?</label>
                <input type="checkbox" className="checkbox form-check-input" id="user" onChange={onChangeU}></input>
                </div>
                <br />
                <button class="submitButton" type="submit" onClick={onClick}>Create</button>
            </form>
        </div>
    )
}

export default NoteForm