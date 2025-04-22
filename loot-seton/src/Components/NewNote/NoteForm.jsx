const NoteForm = ({onChangeF, onChangeN, onChangeU, onClick}) => {
    return (
        <div>
            <form>
                <label >Folder Name:</label>
                <input type="text" id="folderName" onChange={onChangeF}></input>
                <br />
                <label >Note:</label>
                <input type="text" id="noteContent" onChange={onChangeN}></input>
                <br />
                <label >Make Private?</label>
                <input type="checkbox" id="user" onChange={onChangeU}></input>
                <br />
                <button type="submit" onClick={onClick}>Create</button>
            </form>
        </div>
    )
}

export default NoteForm