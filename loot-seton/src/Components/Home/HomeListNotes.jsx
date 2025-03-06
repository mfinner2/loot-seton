import {
    getNotes,
    deleteNote,
} from "../../Services/NoteImport.jsx"

const HomeListNotes = ({notes, del}) => {
    

    return (
        <div>
            <ul>
                {notes.map((note) => (
                    <span>
                        <li key={note}>{note.note}</li>
                        <button onClick={(e) => {
                            deleteNote(note.id)
                        }}>Delete</button>
                    </span>
                ))}
            </ul>
        </div>
    )
}

export default HomeListNotes