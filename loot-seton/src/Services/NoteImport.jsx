import Parse from 'parse'
import { getOrCreateFolder } from './FolderImport.jsx'
// All Things done with Parse

export let Notes = {};
Notes.collection = [];

// Get All Notes
export const getNotes = async () => {
    try {
        const query = new Parse.Query("Notes");
        // turns the pointer into the actual object
        query.include("folder")
        const results = await query.find();
        
        return results.map((item) => ({
          user: item.get("user"),
          note: item.get("note"),
          folder: item.get("folder"),
          id: item.id || item.get("objectId")
        }));
      } catch (error) {
        console.error("Error fetching data:", error.message);
        return []; 
      }
};

// Create a note, will need the folder it is going to
export const createNote = async (folderName, noteContent) => {
    const Note = Parse.Object.extend("Notes");
    const note = new Note();
    const folder = await getOrCreateFolder(folderName)
    // const folderPointer = Parse.Object.createWithoutData(folder.id, "Folder")
    // console.log("folderpointer in createnote: ", folderPointer)

    // console.log("folder in parse: ", folder)

    note.set("note", noteContent);
    note.set("folder", folder)

    return note.save().then((result) => {
        return result;
    })
}

// Delete a Note, Must have id of note
export const deleteNote = async (id) => {
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
