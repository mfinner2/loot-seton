// THIS IS NOT BEING USED AT THE MOMENT

 const HomeDropDown = ({folders, onSelect}) => {
     const handleChange = (e) => {
        //alert(e.target.value)
         onSelect(e.target.value)
     }
         console.log("Folders: " + folders);
 //value="" onChange={onSelect}
     return (
        <div>
            <select onChange={(event) => handleChange(event)}>
            <option value="">Select a folder</option>
                {folders.map((folder) => (
                        <option key={folder.id} value={folder.id}>{folder.name}</option>
                ))}
            </select>
        </div>
     )
 }
 
 export default HomeDropDown