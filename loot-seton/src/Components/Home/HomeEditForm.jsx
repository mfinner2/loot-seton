const HomeEditForm = ({onChangeF, onChangeN, onClick, onBack, onSelectF, onSelectN}) => {
    return (
        <div className="editPage">
            <div className="editTitle">
                <h2>Edit</h2>
            </div>
            <div>
                <form>
                    {onSelectF ? 
                    <div>
                        <label htmlFor="folderName">Folder Name:</label>
                        <br/>
                        <input type="text" id="folderName" maxLength={20} onChange={onChangeF}></input>
                    </div>: <></>}
                    {onSelectN ? 
                    <div>
                        <label htmlFor="noteContent">Note:</label>
                        <br/>
                        <textarea
                          id="noteContent"
                          maxLength={200}
                          onChange={onChangeN}
                          className="note-textbox"
                        ></textarea>
                    </div> : <></>}
                    <div>
                        <button type="submit" onClick={onClick}>Submit</button>
                    </div>
                </form>
            </div>
            <div>
                <button onClick={onBack}>Close</button>
            </div>
        </div>
    )
}

export default HomeEditForm