const CHANGE_NOTE_TITLE = 'CHANGE_NOTE_TITLE';
const CHANGE_NOTE_CONTENT = 'CHANGE_NOTE_CONTENT';
const CHANGE_NOTE_PICTURE = 'CHANGE_NOTE_PICTURE';
const CHANGE_NOTE = 'CHANGE_NOTE';


const changeNoteReducer = (state = { value: 0 }, action) => { // action.newNote: form
    switch (action.type) {
        // case CHANGE_NOTE:
        //     state.newNote = action.newNote;
        //     console.log("state.newNote", state.newNote); // prevState
        //     return state;

        case CHANGE_NOTE_TITLE:
            state.tmpTitle = action.newTitle;
            console.log('state.tmpTitle = action.newTitle', state.tmpTitle, action.newTitle);
            return state;
        case CHANGE_NOTE_CONTENT:
            state.tmpContent = action.newContent;
            console.log('state.tmpContent = action.newContent', state.tmpContent, action.newContent);
            return state;
        case CHANGE_NOTE_PICTURE:
            state.tmpPicture = action.newPicture;
            return state;
        default:
            return state;
    }
}

export const changeNoteActionCreator = (form) => {
    console.log({ type: CHANGE_NOTE, newNote: form }); // prevState
    return { type: CHANGE_NOTE, newNote: form } // 2+
};


export const changeNoteTitleActionCreator = (titleText) => {
    console.log("action: ", { type: CHANGE_NOTE_TITLE, newTitle: titleText });
    return { type: CHANGE_NOTE_TITLE, newTitle: titleText }
};
export const changeNoteContentActionCreator = (contentText) => {
    console.log({ type: CHANGE_NOTE_CONTENT, newContent: contentText });
    return { type: CHANGE_NOTE_CONTENT, newContent: contentText }
};
export const changeNotePictureActionCreator = (picture) => {
    return { type: CHANGE_NOTE_PICTURE, newPicture: picture }
};

export default changeNoteReducer;