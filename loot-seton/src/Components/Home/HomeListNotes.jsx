const HomeListNotes = ({notes, folder}) => {
    //display all notes in a list

    // Eventually create drop down list that will only print the folder based on selected folder
    console.log("folder: ", folder)
    console.log("notes in list ", notes)
    //const filteredNotes = notes.filter((note) => note.folder.id === folder.id);
   // console.log("filtered notes ", filteredNotes)

    return (
        <div>
            <ul>
                {notes.map((note) => (
                    <span>
                        <li key={note}>{note.note} is in {note.folder.id}. {note.folder.id} is a pointer to the folder</li>
                    </span>
                ))}
            </ul>
        </div>
    )
}

export default HomeListNotes