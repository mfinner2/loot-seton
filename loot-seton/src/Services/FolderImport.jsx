import Parse from 'parse'
import { deleteNote } from './NoteImport';
// All folder functions using parse

export let Folders = {};
Folders.collection = [];

// Get All Folders
export const getFolders = async () => {
    try {
        const query = new Parse.Query("Folder");
        const results = await query.find();
        
        return results.map((item) => ({
          user: item.get("user"),
          name: item.get("name"),
          description: item.get("description"),
          id: item.id || item.get("objectId")
        }));
      } catch (error) {
        console.error("Error fetching data:", error.message);
        return []; 
      }
};

// Edit a specific folder
export const editFolder = async (id, newFolder) => {
    try {
    const Folder = Parse.Object.extend("Folder");
    const query = new Parse.Query(Folder);

    const folder = await query.get(id)
    folder.set("name", newFolder);
    await folder.save();

    return {success: true, message: "Folder was Changed"};
    }  catch (error) {
        console.error("Error updating note:", error.message);
        return { success: false, message: error.message };
    }
};


// Get or create folder based on the folder name
export const getOrCreateFolder = async (folderName) => {
    const Folder = Parse.Object.extend("Folder");
    const query = new Parse.Query(Folder);
    query.equalTo("name", folderName)

    try {
        let folder = await query.first();
        if (!folder) {
          folder = new Folder();
          folder.set("name", folderName);
          await folder.save();
        }
        console.log("folder id: ", folder.id)
        //returns folder object
        return folder
      } catch (error) {
        console.error("Error getting/creating folder:", error);
      }
};

// Finds a specific folder based folder name
export const findFolder = async (folderName) => {
    const Folder = Parse.Object.extend("Folder");
    const query = new Parse.Query(Folder);
    query.equalTo("name", folderName);

    // Return folder if found, otherwise null
    try {
        const folder = await query.first(); 
        return folder ? folder : null;
    } catch (error) {
        console.error("Error getting folder:", error);
        return null;
    }
}

export const deleteFolder = async (id, notes) => {
    const Folder = Parse.Object.extend("Folder");
    const query = new Parse.Query(Folder);
    const filteredNotes = notes.filter((note) => note.folder.id === id);
    for (let i = 0; i < filteredNotes.length; i++) {
      deleteNote(filteredNotes[i].id)
    }
    return query.get(id).then((folder) => {
      folder.destroy();
    })
}