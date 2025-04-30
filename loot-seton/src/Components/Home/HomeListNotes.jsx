const HomeListNotes = ({notes, folder, folderName, buttonFunc, onEdit, onCloseFolder, allFolders}) => {
    //display all notes in a list

    // Eventually create drop down list that will only print the folder based on selected folder
    //console.log("folder: ", folder)
    //console.log("notes in list ", notes)
    const filteredNotes = notes.filter((note) => note.folder && note.folder.id === folder);
    //console.log("filtered notes ", filteredNotes)
    const folderObj = allFolders.find(f => f.id === folder);

    return (
        folder && folderName ? 
            <div className="noteDisplay">
                <div className="noteTop">
                    <div className="folderNameNoteDisplay">
                        <h2>{folderName}</h2>
                    </div>
                    <div className="closeFolder">
                        <button onClick={onCloseFolder}>Close Folder</button>
                    </div>
                </div>
                <div className="description">
                    Description: {folderObj?.user ? "Private Folder" : "Public Folder"}
                </div>
                <div className="stickyNote">
                    <ul>
                        {filteredNotes.map((note, i) => (
                            <span>
                                <li key={i}>{note.note}</li>
                                <button value={note.id} onClick={onEdit}>Edit</button>
                                <button value={note.id} onClick={buttonFunc}>Delete</button>
                            </span>
                        ))}
                    </ul>
                </div>
            </div>
        : <div className="noteDisplay"></div>
    )
}

export default HomeListNotes
