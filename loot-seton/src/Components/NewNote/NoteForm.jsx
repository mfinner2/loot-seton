const NoteForm = ({onChangeF, onChangeN, onClick}) => {
    return (
        <div>
            <form>
                <label for="folderName">Folder Name:</label>
                <input type="text" id="folderName" onChange={onChangeF}></input>
                <br />
                <label for="noteContent">Note:</label>
                <input type="text" id="noteContent" onChange={onChangeN}></input>
                <br />
                <button type="submit" onClick={onClick}>Create</button>
            </form>
        </div>
    )
}

export default NoteForm