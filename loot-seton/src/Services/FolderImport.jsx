import Parse from 'parse'
// All folder functions using parse

// Get All Folders
export const getFolders = async () => {
    try {
        const query = new Parse.Query("Folder");
        const results = await query.find();
        
        return results.map((item) => ({
          user: item.get("user"),
          name: item.get("name"),
          description: item.get("description"),
          id: item.get("objectId")
        }));
      } catch (error) {
        console.error("Error fetching data:", error.message);
        return []; 
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
        return folder;
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