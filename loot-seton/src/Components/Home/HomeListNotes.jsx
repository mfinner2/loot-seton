import { useState, useEffect } from 'react'
import {
    getNotes,
} from "../../Services/NoteImport.jsx"

const HomeListNotes = () => {
    const [notes, setNotes] = useState([]);

      //I used the internet to help me write this
      // Add comments later
    useEffect(() => {
        getNotes().then((notes) => {
            setNotes(notes)
        })
    });

    return (
        <div>
            This is Home List
            <div>
                <ul>
                    {notes.map((item, user) => (
                        <li key={user}>{item.note}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default HomeListNotes