import HomeListNotes from "./HomeListNotes.jsx";
import { useState, useEffect } from 'react'
import {
    getNotes,
    deleteNote,
} from "../../Services/NoteImport.jsx"

const Home = () => {
    const [notes, setNotes] = useState([]);
    const [remove, setRemove] = useState(false);

      // Get notes
    useEffect(() => {
        getNotes().then((notes) => {
            setNotes(notes)
        })
    });
    //trying to delete (not currently functional)
    useEffect(() => {
        if (remove.length > 0) {
            deleteNote(remove).then(() => {
                console.log("Removed: ", remove)
            })
        }
    }, [remove])
    //also trying to delete
    const onClickHandler = (e) => {
        e.preventDefault();
        setRemove(true);
    }

    return (
        <div>
            <HomeListNotes notes={notes} onClick={onClickHandler}/>
        </div>
    )
}

export default Home;