import { useEffect, useState } from "react";
import Parse from "parse";
import NoteForm from "./NoteForm.jsx";
import { createNote } from "../../Services/NoteImport.jsx"
import Nav from "../Nav/Nav.jsx";
import { useNavigate } from "react-router-dom"
import "./Note.css"

const NewNote = () => {
    const [add, setAdd] = useState(false);
    const [folder, setFolder] = useState("");
    const [note, setNote] = useState("");
    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    // If the button was clicked with a folder and note, a new note will be created
    useEffect(() => {
        if (add && folder && note) {
            createNote(folder, note, user).then(() => {
                setAdd(false);
                setNote("");
                setFolder("");
                setUser(null)
                alert("Note Succesfully Created!")
                console.log("created note in folder: ", folder)
                navigate("/home");
            })
        }
    }, [note, add, folder, user]);

    // Checks for if the button was clicked
    const onClickHandler = (e) => {
        e.preventDefault();
        setAdd(true);
    }

    // Checks if Folder name is filled
    const onChangeFHandler = (e) => {
        e.preventDefault()
        setFolder(e.target.value)
    }

    // Checks if new note textbox is filled
    const onChangeNHandler = (e) => {
        e.preventDefault()
        setNote(e.target.value)
    }

    const onChangeUHandler = (e) => {
        //e.preventDefault()
        console.log(e.target.checked)
        if (e.target.checked) {
            setUser(Parse.User.current())
        } else {
            setUser(null)
        }
    }

    return (
        <div class="newNoteMain">
            <div className="titleBox">
                    <div className="title">
                        <h1>loot seton</h1>
                    </div>
                </div>
            <Nav />
            <div className="limitContainer">

            <div className="newNoteContainer">
            <p className="newNoteTitle">Create a new note!</p>
            <NoteForm onChangeF={onChangeFHandler} onChangeN={onChangeNHandler} onChangeU={onChangeUHandler} onClick={onClickHandler}/>
            </div>
            </div>
            <br />
        </div>
    )
}

export default NewNote;