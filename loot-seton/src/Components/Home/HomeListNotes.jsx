const HomeListNotes = ({notes, folder}) => {
    //display all notes in a list
    console.log("folder: ", folder)
    const filteredNotes = notes.filter((note) => note.folder.id === folder.id);
    console.log("filtered notes ", filteredNotes)

    return (
        <div>
            <ul>
                {filteredNotes.map((note) => (
                    <span>
                        <li key={note}>{note.note}</li>
                    </span>
                ))}
            </ul>
        </div>
    )
}

export default HomeListNotes