import "./Note.css"

const NoteForm = ({onChangeF, onChangeN, onChangeU, onClick}) => {
    return (
        <div>
            <form class="form-switch">
                <label >Folder Name:</label>
                <input type="text" id="folderName" onChange={onChangeF} maxLength={15}></input>
                <br />
                <label >Note:</label>
                <input type="text" id="noteContent" onChange={onChangeN} maxLength={200}></input>
                <br />
                <div class="form-check-inline">
                <label>Make Private?</label>
                <input type="checkbox" class="checkbox form-check-input" id="user" onChange={onChangeU}></input>
                </div>
                <br />
                <button type="submit" onClick={onClick}>Create</button>
            </form>
        </div>
    )
}

export default NoteForm