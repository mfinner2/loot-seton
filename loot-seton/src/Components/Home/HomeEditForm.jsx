const HomeEditForm = ({onChangeF, onChangeN, onClick, onBack, onSelectF, onSelectN, folderTitle, noteStuff}) => {
    return (
        <div className="editPage">
            <div className="editTop">
                <div className="editTitle">
                    <h2>Edit</h2>
                </div>
                <div className="closeEdit">
                    <button onClick={onBack}>Close</button>
                </div>
            </div>
            <div>
                <form>
                    {onSelectF ? 
                    <div className="editFolder">
                        <div className="prevFolder">
                            <div className="folderSelectBack">
                                Folder Selected:
                            </div>
                            {folderTitle}
                        </div>
                        <div className="newFolder">
                            <label htmlFor="folderName">Edit Folder Name Here:</label>
                            <br/>
                            <input type="text"  id="folderName" maxLength={15} onChange={onChangeF} placeholder="Start Typing..." required></input>
                        </div>
                    </div>: <></>}
                    {onSelectN ? 
                    <div className="editNote">
                        <div>
                            <div className="noteSelectText">
                                Note Selected: 
                            </div>
                            <div className="prevNote">
                                {noteStuff}
                            </div>
                        </div>
                        <div className="editedNoteArea">
                            <label htmlFor="noteContent">Edit Note Here:</label>
                            <br/>
                            <textarea
                              id="noteContent"
                              maxLength={100}
                            //   defaultValue={noteStuff}
                              onChange={onChangeN}
                              className="note-textbox"
                              placeholder="Start Typing..."
                              required
                            ></textarea>
                        </div>
                    </div> : <></>}
                    <div className="editSubmit">
                        <button type="submit" onClick={onClick}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default HomeEditForm