import "./Home.css"

 const HomeDropDown = ({folders, onSelect, onEdit}) => {
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
        <div>
            <ul>
                {folders.map((folder) => (
                    <li key={folder.id}>
                        <span onClick={() => onSelect(folder.id)} style={{ cursor: 'pointer' }}>
                            {folder.name}
                        </span>
                        <button onClick={() => onEdit(folder)} style={{ marginLeft: '10px' }}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
 }
 
 export default HomeDropDown