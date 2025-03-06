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