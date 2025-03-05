import Parse from 'parse'

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