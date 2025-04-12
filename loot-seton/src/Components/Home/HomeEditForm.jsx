const HomeEditForm = ({onChangeF, onChangeN, onClick, onBack}) => {
    return (
        <div>
            <div>
                <h2>Edit</h2>
            </div>
            <div>
                <form>
                    <label >Folder Name:</label>
                    <input type="text" id="folderName" onChange={onChangeF}></input>
                    <br />
                    <label >Note:</label>
                    <input type="text" id="noteContent" onChange={onChangeN}></input>
                    <br />
                    <button type="submit" onClick={onClick}>Edit</button>
                </form>
            </div>
            <div>
                <button onClick={onBack}>Close</button>
            </div>
        </div>
    )
}

export default HomeEditForm