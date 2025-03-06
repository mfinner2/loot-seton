import HomeListNotes from "./HomeListNotes.jsx";
import { useState, useEffect } from 'react'
import {
    getNotes,
    deleteNote,
} from "../../Services/NoteImport.jsx"

const Home = () => {
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
            <HomeListNotes notes={notes} remove={remove} setRemove={setRemove}/>
        </div>
    )
}

export default Home;