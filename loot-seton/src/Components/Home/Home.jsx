import HomeListNotes from "./HomeListNotes.jsx";
import { useState, useEffect } from 'react'
import {
    getNotes,
    deleteNote,
} from "../../Services/NoteImport.jsx"
import {
    getFolders
} from "../../Services/FolderImport.jsx"
import HomeDropDown from "./HomeDropDown.jsx";

const Home = () => {
    const [notes, setNotes] = useState([]);
    const [folders, setFolders] = useState([]);
    const [remove, setRemove] = useState(false);
    const [selectedFolder, setSelectedFolder] = useState()

      // Get notes and Folders (Needs to be refined since I am only looking at the pointer in notes)
    useEffect(() => {
        getNotes().then((notes) => {
            setNotes(notes)
            const uniqueFolders = [...new Set(notes.map((item) => item.folder))]
            setFolders(uniqueFolders)
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

    const onSelectHandler = (folder) => {
        setSelectedFolder(folder)
    }

    return (
        <div>
            <HomeDropDown folders={folders} onSelect={onSelectHandler}/>
            <HomeListNotes notes={notes} folder={folders}/>
        </div>
    )
}

export default Home;