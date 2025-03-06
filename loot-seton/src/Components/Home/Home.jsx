import HomeListNotes from "./HomeListNotes.jsx";
import { useState, useEffect } from 'react'
import {
    getNotes,
    deleteNote,
} from "../../Services/NoteImport.jsx"

const Home = () => {
    const [notes, setNotes] = useState([]);

      // Add comments later
    useEffect(() => {
        getNotes().then((notes) => {
            setNotes(notes)
        })
    });

    return (
        <div>
            <HomeListNotes notes={notes} del={deleteNote}/>
        </div>
    )
}

export default Home;