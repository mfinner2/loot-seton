const HomeListNotes = ({notes, folder}) => {
    //display all notes in a list

    // Eventually create drop down list that will only print the folder based on selected folder
    console.log("folder: ", folder)
    console.log("notes in list ", notes)
    const filteredNotes = notes.filter((note) => note.folder.id === folder);
   // console.log("filtered notes ", filteredNotes)

    return (
        <div>
            <ul class="stickyNote">
                {filteredNotes.map((note) => (
                    <span>
                        <li key={note.id}>{note.note}</li>
                    </span>
                ))}
            </ul>
        </div>
    )
}

export default HomeListNotes