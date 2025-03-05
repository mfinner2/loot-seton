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