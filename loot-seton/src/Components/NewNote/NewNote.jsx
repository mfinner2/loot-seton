import { useEffect, useState } from "react";
import NoteForm from "./NoteForm.jsx";
import { createNote } from "../../Services/NoteImport.jsx"
import Nav from "../Nav/Nav.jsx";
import { useNavigate } from "react-router-dom"

const NewNote = () => {
    const [add, setAdd] = useState(false);
    const [folder, setFolder] = useState("");
    const [note, setNote] = useState("");

    const navigate = useNavigate();

    // If the button was clicked with a folder and note, a new note will be created
    useEffect(() => {
        if (add && folder && note) {
            createNote(folder, note).then(() => {
                setAdd(false);
                setNote("");
                setFolder("");
                alert("Note Succesfully Created!")
                console.log("created note in folder: ", folder)
                navigate("/home");
            })
        }
    }, [note, add, folder]);

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

    return (
        <div>
            <Nav />
            Create a new note!
            <NoteForm onChangeF={onChangeFHandler} onChangeN={onChangeNHandler} onClick={onClickHandler}/>
        </div>
    )
}

export default NewNote;