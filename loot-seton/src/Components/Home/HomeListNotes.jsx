import {
    getNotes,
    deleteNote,
} from "../../Services/NoteImport.jsx"


const HomeListNotes = ({notes, remove, setRemove}) => {
    //const [notes, setNotes] = useState([]);
    

      // Add comments later
    //useEffect(() => {
    //    getNotes().then((notes) => {
    //        setNotes(notes)
    //   })
        
    //});
    

    

    return (
        <div>
            <ul>
                {notes.map((note) => (
                    <span>
                        <li key={note}>{note.note}</li>
                        <button onClick={(e) => {
                            setRemove(note.id);
                        }}>Delete</button>
                    </span>
                ))}
            </ul>
        </div>
    )
}

export default HomeListNotes