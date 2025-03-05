import Parse from 'parse'
// All Things done with Parse

// Get All Notes
export const getNotes = async () => {
    try {
        const query = new Parse.Query("Notes");
        const results = await query.find();
        
        return results.map((item) => ({
          user: item.get("user"),
          note: item.get("note"),
          folder: item.get("folder"),
        }));
      } catch (error) {
        console.error("Error fetching data:", error.message);
        return []; 
      }
};

// Create a note, will need the folder it is going to
export const createNote = (folderName, noteContent) => {
    const Note = Parse.Object.extend("Notes");
    const note = new Note();

    note.set("note", noteContent);
    note.set("folder", folderName)

    return note.save().then((result) => {
        return result;
    })
}

// Delete a Note, Must have id of note
export const deleteNote = (id) => {
    const Note = Parse.Object.extend("Notes");
    const query = new Parse.Query(Note);
    return query.get(id).then((note) => {
        note.destroy();
    })
}

// Edit a specific note
export const editNote = async (id, newNote) => {
    try {
    const Note = Parse.Object.extend("Notes");
    const query = new Parse.Query(Note);

    const note = await query.get(id)
    note.set("note", newNote);
    await note.save();

    return {success: true, message: "Note was Changed"};
    }  catch (error) {
        console.error("Error updating note:", error.message);
        return { success: false, message: error.message };
    }
};
