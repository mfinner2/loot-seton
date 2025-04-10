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
import Parse from "parse";
import { useNavigate } from "react-router-dom"
import Nav from "../Nav/Nav.jsx";

//import HomeDropDown from "./HomeDropDown.jsx";

const Home = () => {
    const [notes, setNotes] = useState([]);
    const [folders, setFolders] = useState([]);
    const [remove, setRemove] = useState(false);
    const [delTarget, setDelTarget] = useState("")
    const [selectedFolder, setSelectedFolder] = useState()

      // Get notes and Folders (Needs to be refined since I am only looking at the pointer in notes)
    useEffect(() => {
        getNotes().then((notes) => {
            setNotes(notes)
            //console.log("notes: ", notes)
            // const uniqueFolders = [...new Set(notes.map((item) => item.folder))]
            // setFolders(uniqueFolders)
            // console.log("folders: ", uniqueFolders)
        })
    }, []);

    //gets the folders
    useEffect(() => {
        getFolders().then((folders) => {
            setFolders(folders)
            //console.log("folders in home: ", folders)
        })
    }, [])

    //trying to delete (not currently functional)
    useEffect(() => {
        console.log("Trying to delete")
        console.log(delTarget)
        if (remove && delTarget) {
            console.log("calling delete")
            deleteNote(delTarget).then(() => {
                console.log("Removed: ", remove)
            })
        }
        setRemove(false)
        setDelTarget("")
        console.log(remove)
    }, [remove])
    //also trying to delete (not currently functional)
    const onClickHandler = (e) => {
        e.preventDefault();
        setRemove(true);
    }

    const onSelectHandler = (folder) => {
        //alert(folder)
        setSelectedFolder(folder)
        //console.log("selected: ", selectedFolder)
    }

    const onDeleteHandler = (e) => {
        e.preventDefault();
        console.log("delete: ", e.target.value);
        setDelTarget(e.target.value)
        setRemove(true)
    };

    const navigate = useNavigate();
    const logoutHandler = () => {
        Parse.User.logOut();

        navigate("/");
    };
    //console.log("notes in home: ", notes)

    // Homelist notes Waits for a selected folder
    return (
        <div>
            <Nav />
            <button onClick={logoutHandler}>Log Out</button>
            <div className="title">
                <h1>noteS tooL</h1>
            </div>
            <div className="gap" />
            <HomeDropDown folders={folders} onSelect={onSelectHandler} />
            <HomeListNotes notes={notes} folder={selectedFolder} buttonFunc={onDeleteHandler}/>
        </div>
    )
}

export default Home;