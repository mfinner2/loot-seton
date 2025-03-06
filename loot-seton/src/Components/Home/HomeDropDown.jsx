const HomeDropDown = ({folders, onSelect}) => {

    return (
        <select onChange={onSelect}>
            <option value="">Select a Folder</option>
                {folders.map((folder, index) => (
                    <option key={index} value={folder.name}>
                        {folder.name}
            </option>
      ))}
        </select>
    )
}

export default HomeDropDown