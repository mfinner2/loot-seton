const HomeListNotes = ({notes}) => {
    return (
        <div>
            <ul>
                {notes.map((note) => (
                    <span>
                        <li key={note}>{note.note}</li>
                    </span>
                ))}
            </ul>
        </div>
    )
}

export default HomeListNotes