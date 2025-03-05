import Parse from 'parse'

// Get All Notes by user
export const getNotesByUser = (user) => {
    const Notes = Parse.Object.extend("test");
    const query = new Parse.Query(Notes);
    query.equalTo("user", user);
    return query.find().then((results) => {
        return results;
    })
}