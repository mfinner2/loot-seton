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
                            Folder Selected: 
                            <br/>
                            {folderTitle}
                        </div>
                        <label htmlFor="folderName">Edit Folder Name Here:</label>
                        <br/>
                        <input type="text"  id="folderName" maxLength={15} onChange={onChangeF}></input>
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
                    <div className="editSubmit">
                        <button type="submit" onClick={onClick}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default HomeEditForm