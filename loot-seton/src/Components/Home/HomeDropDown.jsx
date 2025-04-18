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
                        <span onClick={() => onSelect(folder)} style={{ cursor: 'pointer' }}>
                            {folder.name}
                        </span>
                        { folder.user?
                        <div>
                        <button onClick={() => onEdit(folder)} style={{ marginLeft: '10px' }}>Edit</button>
                        <div>
                        </div>{" "}
                        </div> : <></>}
                        <button value={folder.id} onClick={onDelete} style={{ marginLeft: '10px' }}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
 }
 
 export default HomeDropDown