const HomeEditForm = ({onChangeF, onChangeN, onClick, onBack, onSelectF, onSelectN}) => {
    return (
        <div>
            <div>
                <h2>Edit</h2>
            </div>
            <div>
                <form>
                    {onSelectF ? 
                    <div>
                        <label>Folder Name:</label>
                        <input type="text" id="folderName" onChange={onChangeF}></input>
                    </div>: <></>}
                    {onSelectN ? 
                    <div>
                        <label>Note:</label>
                        <input type="text" id="noteContent" onChange={onChangeN}></input>
                    </div> : <></>}
                    <div>
                        <button type="submit" onClick={onClick}>Submit</button>
                    </div>
                </form>
            </div>
            <div>
                <button onClick={onBack}>Close</button>
            </div>
        </div>
    )
}

export default HomeEditForm