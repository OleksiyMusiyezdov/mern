const ADD_NOTE = 'ADD_NOTE';

const addNoteReducer = (state = { value: 0 }, action) => {
    switch (action.type) {
        case ADD_NOTE:
            console.log("action.newNote ", action.newNote);
            const noteToArray = {
                "title": action.newNote.tmpTitle,
                "content": action.newNote.tmpContent,
                "picture": action.newNote.tmpPicture
            };
            state.push(noteToArray);
            console.log("new array", state);
            return state;
        default:
            return state;
    }
}

export const addNoteActionCreator = (newNote) => {
    return { type: ADD_NOTE, newNote: newNote } // store._state.newNote
};

export default addNoteReducer;