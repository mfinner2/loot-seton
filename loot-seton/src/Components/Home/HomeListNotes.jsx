import { useState, useEffect } from 'react'
import {
    getNotes,
    deleteNote,
} from "../../Services/NoteImport.jsx"

const HomeListNotes = () => {
    const [notes, setNotes] = useState([]);

      // Add comments later
    useEffect(() => {
        getNotes().then((notes) => {
            setNotes(notes)
        })
    });

    return (
        <div>
            <ul>
                {notes.map((note) => (
                    <span>
                        <li key={note.id}>{note.note}</li>
                        <button onClick={(e) => {
                            deleteNote(item.id)
                        }}>Delete</button>
                    </span>
                ))}
            </ul>
        </div>
    )
}

export default HomeListNotes