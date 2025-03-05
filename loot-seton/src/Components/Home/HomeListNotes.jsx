import { useState, useEffect } from 'react'
import Parse from 'parse'
import {
    getNotesByUser,
} from "../../Services/NoteImport.jsx"

const HomeListNotes = () => {
    const [notes, setNotes] = useState([]);

      //I used the internet to help me write this
      // Add comments later
    useEffect(() => {
      async function fetchItems() {
        const query = new Parse.Query("Notes");
        try {
          const results = await query.find();
          setNotes(
            results.map((item) => ({
              user: item.get("user"),
              note: item.get("note"),
              folder: item.get("folder")
            }))
          );
        } catch (error) {
          console.error("Error fetching data:", error.message);
        }
      }
      fetchItems();
    });

    return (
        <div>
            This is Home List
            <div>
                <ul>
                    {notes.map((item, user) => (
                        <li key={user}>{item.note}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default HomeListNotes