const HomeEditForm = ({onChangeF, onChangeN, onClick, onBack, onSelectF, onSelectN, folderTitle, noteStuff}) => {
    return (
        <div className="editPage">
            <div className="editTitle">
                <h2>Edit</h2>
            </div>
            <div>
                <form>
                    {onSelectF ? 
                    <div>
                        <div>
                            Folder Selected: 
                            <br/>
                            {folderTitle}
                        </div>
                        <label htmlFor="folderName">Edit Folder Name Here:</label>
                        <br/>
                        <input type="text"  id="folderName" maxLength={20} onChange={onChangeF}></input>
                    </div>: <></>}
                    {onSelectN ? 
                    <div>
                        <div>
                            Note Selected: 
                            <br/>
                            <div className="prevNote">
                                {noteStuff}
                            </div>
                        </div>
                        <label htmlFor="noteContent">Edit Note Here:</label>
                        <br/>
                        <textarea
                          id="noteContent"
                          maxLength={200}
                        //   defaultValue={noteStuff}
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