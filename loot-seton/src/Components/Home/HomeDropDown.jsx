import "./Home.css"

 const HomeDropDown = ({folders, onSelect, onEdit, onDelete}) => {
    //  const handleChange = (e) => {
    //     //alert(e.target.value)
    //      onSelect(e.target.value)
    //  }
        //  console.log("Folders: " + folders);
 //value="" onChange={onSelect}
    //  return (
    //     <div>
    //         <select onChange={(event) => handleChange(event)}>
    //         <option value="">Select a folder</option>
    //             {folders.map((folder) => (
    //                     <option key={folder.id} value={folder.id}>{folder.name}</option>
    //             ))}
    //         </select>
    //     </div>
    //  )
    return (
        <div className="folderList">
            <ul>
                {folders.map((folder) => (
                    <li key={folder.id}>
                        <button className="folderName" onClick={() => onSelect(folder)}>
                            {folder.name}
                        </button>
                        {/* { folder.user?
                        <div>
                        <button onClick={() => onEdit(folder)} style={{ marginLeft: '10px' }}>Edit</button>
                        <div>
                        </div>{" "}
                        </div> : <></>} */}
                        <div className="folderButtons">
                            <button onClick={() => onEdit(folder)}>Edit</button>
                            <button value={folder.id} onClick={onDelete}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
 }
 
 export default HomeDropDown