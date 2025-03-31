import HomeListNotes from "./HomeListNotes.jsx";
import HomeDropDown from "./HomeDropDown.jsx";
import { useState, useEffect } from 'react'
import {
    getNotes,
    deleteNote,
} from "../../Services/NoteImport.jsx"
import {
    getFolders
} from "../../Services/FolderImport.jsx"
//import HomeDropDown from "./HomeDropDown.jsx";

const Home = () => {
    const [notes, setNotes] = useState([]);
    const [folders, setFolders] = useState([]);
    const [remove, setRemove] = useState(false);
    const [selectedFolder, setSelectedFolder] = useState()

      // Get notes and Folders (Needs to be refined since I am only looking at the pointer in notes)
    useEffect(() => {
        getNotes().then((notes) => {
            setNotes(notes)
            console.log("notes: ", notes)
            // const uniqueFolders = [...new Set(notes.map((item) => item.folder))]
            // setFolders(uniqueFolders)
            // console.log("folders: ", uniqueFolders)
        })
    }, []);

    //gets the folders
    useEffect(() => {
        getFolders().then((folders) => {
            setFolders(folders)
            console.log("folders in home: ", folders)
        })
    }, [])

    //trying to delete (not currently functional)
    useEffect(() => {
        if (remove.length > 0) {
            deleteNote(remove).then(() => {
                console.log("Removed: ", remove)
            })
        }
    }, [remove])
    //also trying to delete (not currently functional)
    const onClickHandler = (e) => {
        e.preventDefault();
        setRemove(true);
    }

    const onSelectHandler = (folder) => {
        //alert(folder)
        setSelectedFolder(folder)
        console.log("selected: ", selectedFolder)
    }
    console.log("notes in home: ", notes)

    // Homelist notes Waits for a selected folder
    return (
        <div>
            <div className="title">
                <h1>noteS tooL</h1>
            </div>
            <div className="gap" />
            <HomeDropDown folders={folders} onSelect={onSelectHandler} />
            <HomeListNotes notes={notes} folder={selectedFolder}/>
        </div>
    )
}

export default Home;