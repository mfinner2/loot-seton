import { useState, useEffect } from 'react'
import {
    getNotes,
    deleteNote,
} from "../../Services/NoteImport.jsx"

const HomeListNotes = () => {
    const [notes, setNotes] = useState([]);
    const [remove, setRemove] = useState("");

      // Add comments later
    useEffect(() => {
        getNotes().then((notes) => {
            setNotes(notes)
        })
        
    });

    useEffect(() => {
        if (remove.length > 0) {
            deleteNote(remove).then(() => {
                console.log("Removed: ", remove)
            })
        }
    }, [remove])

    return (
        <div>
            <ul>
                {notes.map((note) => (
                    <span>
                        <li key={note.id}>{note.note}</li>
                        <button onClick={(e) => {
                            setRemove(note.id);
                        }}>Delete</button>
                    </span>
                ))}
            </ul>
        </div>
    )
}

export default HomeListNotes