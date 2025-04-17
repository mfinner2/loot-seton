import HomeListNotes from "./HomeListNotes.jsx";
import HomeDropDown from "./HomeDropDown.jsx";
import HomeEditForm from "./HomeEditForm.jsx";
import { useState, useEffect } from 'react'
import {
    getNotes,
    deleteNote,
    editNote,
} from "../../Services/NoteImport.jsx"
import {
    getFolders,
    editFolder,
    deleteFolder
} from "../../Services/FolderImport.jsx"
import Parse from "parse";
import { useNavigate } from "react-router-dom"
import Nav from "../Nav/Nav.jsx";
import "./Home.css"

//import HomeDropDown from "./HomeDropDown.jsx";

const Home = () => {
    const [notes, setNotes] = useState([]);
    const [folders, setFolders] = useState([]);
    const [remove, setRemove] = useState(false);
    const [removeFolder, setRemoveFolder] = useState(false);
    const [delTarget, setDelTarget] = useState("")
    const [delFolderTarget, setDelFolderTarget] = useState("")
    const [selectedFolder, setSelectedFolder] = useState()
    const [selectEditFolder, setSelectEditFolder] = useState(false)
    const [selectEditNote, setSelectEditNote] = useState(false)
    const [edit, setEdit] = useState(false)
    const [editNotes, setEditNote] = useState("")
    const [editFolders, setEditFolder] = useState("")
    const [oldNote, setOldNote] = useState("")
    const [oldFolder, setOldFolder] = useState("")

      // Get notes and Folders (Needs to be refined since I am only looking at the pointer in notes)
    useEffect(() => {
        getNotes().then((notes) => {
            setNotes(notes)
            //console.log("notes: ", notes)
            //const uniqueFolders = [...new Set(notes.map((item) => item.folder))]
            //setFolders(uniqueFolders)
            //console.log("folders: ", uniqueFolders)
        })
    }, []);

    //gets the folders
    useEffect(() => {
        getFolders().then((folders) => {
            setFolders(folders)
            //console.log("folders in home: ", folders)
        })
    }, [])


    //delete note
    useEffect(() => {
        console.log("Trying to delete")
        console.log(delTarget)
        if (remove && delTarget) {
            console.log("calling delete")
            deleteNote(delTarget).then(() => {
                console.log("Removed: ", remove)
                const newNotes = notes.filter((note) => note.id !== delTarget);
                setNotes(newNotes);
            })
        }
        setRemove(false)
        setDelTarget("")
        console.log(remove)
    }, [remove])

    // edit note
    useEffect(() => {
        if (edit && editNotes && oldNote) {
            editNote(oldNote, editNotes).then((result) => {
                if (result.success){
                    setNotes(prevNotes =>
                        prevNotes.map(note =>
                            note.id === oldNote ? { ...note, note: editNotes } : note
                        )
                    );
                    //alert("Note Succesfully Edited!")
                }
                setEdit(false);
                setEditNote("");
                setSelectEditNote(false);
                alert("Note Succesfully Edited!")
            })
        }
    }, [edit, editNotes, oldNote]);

    // edit folder
    useEffect(() => {
        if (edit && editFolders && oldFolder) {
            // console.log("editFolders: ", editFolders)
            // console.log("Old: ", oldFolder)
            editFolder(oldFolder, editFolders).then((result) => {
                if (result.success){
                    setFolders(prevFolders =>
                        prevFolders.map(folder =>
                            folder.id === oldFolder ? { ...folder, name: editFolders } : folder
                        )
                    );
                    //alert("Note Succesfully Edited!")
                }
                setEdit(false);
                setEditFolder("");
                setSelectEditFolder(false);
                alert("Folder Succesfully Edited!")
            })
        }
    }, [edit, editFolders, oldFolder]);

    //delete folder
    useEffect(() => {
        console.log("Trying to delete folder")
        console.log(delFolderTarget)
        if (removeFolder && delFolderTarget) {
            console.log("calling delete")
            deleteFolder(delFolderTarget, notes).then(() => {
                console.log("Removed: ", remove)
                const newFolders = folders.filter((folder) => folder.id !== delFolderTarget);
                setFolders(newFolders);
                const newNotes = notes.filter((note) => note.folder.id !== delFolderTarget);
                setNotes(newNotes);
            })
        }
        setRemoveFolder(false)
        setDelFolderTarget("")
        console.log(removeFolder)
    }, [removeFolder, delFolderTarget])

    
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
        console.log(e)
        e.preventDefault();
        console.log("delete: ", e.target.value);
        setDelTarget(e.target.value)
        setRemove(true)
    };

    const onDeleteFolderHandler = (e) => {
        console.log(e)
        e.preventDefault();
        console.log("delete: ", e.target.value);
        setDelFolderTarget(e.target.value)
        setRemoveFolder(true)
    };
    

    // edit folder handler
    const onEditFolderHandler = (e) => {
        //console.log("edit folder: ", e.id)
        setSelectEditFolder(true)
        setOldFolder(e.id)
    }

    // edit shows edit form and sets the note id
    const onEditNoteHandler = (e) => {
        // console.log("edit note: ", e.target.value)
        setSelectEditNote(true)
        setOldNote(e.target.value)
    }

    // get rid of edit form
    const onSelectBack = () => {
        setSelectEditFolder(false)
        setSelectEditNote(false)
    }

    // check if edit submit was clicked
    const onClicked = (e) => {
        e.preventDefault();
        setEdit(true)
    }

    // note edit form filled
    const onEditNote = (e) => {
        e.preventDefault();
        setEditNote(e.target.value)
    }

    // folder edit form filled
    const onEditFolder = (e) => {
        e.preventDefault();
        setEditFolder(e.target.value)
    }
/*    const deleteFolderHandler = (e) => {
        e.preventDefault();
        console.log("delete: ", e.target.value);
        //setDelTarget(e.target.value)
        //setRemove(true)
    };*/

    const navigate = useNavigate();
    const logoutHandler = () => {
        Parse.User.logOut();

        navigate("/");
    };
    //console.log("notes in home: ", notes)

    // Homelist notes Waits for a selected folder
    return (
        <div className="homeMain">
            <div className="title">
                <h1>noteS tooL</h1>
            </div>
            <Nav />
            <button onClick={logoutHandler}>Log Out</button>
            <div className="gap" />
            {!selectEditFolder && !selectEditNote ? <HomeDropDown folders={folders} onSelect={onSelectHandler} onEdit={onEditFolderHandler} onDelete={onDeleteFolderHandler}/>: <></>}
            {!selectEditFolder && !selectEditNote ? <HomeListNotes notes={notes} folder={selectedFolder} buttonFunc={onDeleteHandler} onEdit={onEditNoteHandler}/> : <></>}
            {selectEditFolder ? <HomeEditForm onBack={onSelectBack} onSelectF={selectEditFolder} onClick={onClicked} onChangeF={onEditFolder}/> : <></>}
            {selectEditNote ? <HomeEditForm onBack={onSelectBack} onSelectN={selectEditNote} onClick={onClicked} onChangeN={onEditNote}/> : <></>}
        </div>
    )
}

export default Home;