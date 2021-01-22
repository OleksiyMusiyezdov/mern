import changeNoteReducer from './changeNoteReducer';
import addNoteReducer from './addNoteReducer';

// const ADD_NOTE = 'ADD_NOTE';
// const CHANGE_NOTE = 'CHANGE_NOTE';
// const CHANGE_NOTE_TITLE = 'CHANGE_NOTE_TITLE';
// const CHANGE_NOTE_CONTENT = 'CHANGE_NOTE_CONTENT';
// const CHANGE_NOTE_PICTURE = 'CHANGE_NOTE_PICTURE';

// export const addNoteActionCreator = () => {
//     return { type: ADD_NOTE, newNote: store._state.newNote }
// };

// export const changeNoteActionCreator = (form) => {
//     console.log({ type: CHANGE_NOTE, newNote: form }); // prevState
//     return { type: CHANGE_NOTE, newNote: form } // 2+
// };


// export const changeNoteTitleActionCreator = (titleText) => {
//     console.log("action: ", { type: CHANGE_NOTE_TITLE, newTitle: titleText });
//     return { type: CHANGE_NOTE_TITLE, newTitle: titleText }
// };
// export const changeNoteContentActionCreator = (contentText) => {
//     console.log({ type: CHANGE_NOTE_CONTENT, newContent: contentText });
//     return { type: CHANGE_NOTE_CONTENT, newContent: contentText }
// };
// export const changeNotePictureActionCreator = (picture) => {
//     return { type: CHANGE_NOTE_PICTURE, newPicture: picture }
// };

let store = {

    _state: {
        newNote: {
            tmpTitle: "",
            tmpContent: "",
            tmpPicture: ""
        },

        notes: [
            {
                "title": "Qui magna dolore duis culpa est dolore enim velit.",
                "content": "Commodo et aliquip incididunt pariatur labore. Aliquip laborum Lorem mollit ea ea amet laborum. Reprehenderit amet Lorem consequat veniam magna cillum exercitation qui. Officia consectetur incididunt duis consectetur ut proident officia duis non reprehenderit. Velit mollit adipisicing nostrud sint laborum in irure.",
                "picture": "https://unsplash.it/250/250?random&i=0"
            },
            {
                "title": "Incididunt dolore officia voluptate aliqua fugiat laborum elit veniam in ipsum est.",
                "content": "Proident minim ut laborum adipisicing nostrud tempor mollit nulla occaecat sunt. Non eu dolor nulla ex. Ad fugiat aliqua duis eu. Proident ut esse dolor ut mollit occaecat reprehenderit ipsum sunt cillum anim. Ipsum veniam ex ex ullamco.",
                "picture": "https://unsplash.it/250/250?random&i=1"
            },
            {
                "title": "Minim sunt occaecat veniam incididunt esse pariatur cupidatat enim anim adipisicing dolore cupidatat.",
                "content": "Mollit commodo commodo elit nostrud. Do nulla fugiat tempor irure id excepteur sint do do laboris enim. Minim minim laborum voluptate minim cillum ex tempor nostrud duis velit est. Nulla laborum dolor enim ea veniam. Ea amet aliqua eu aliquip dolore ad nostrud cupidatat.",
                "picture": "https://unsplash.it/250/250?random&i=2"
            },
            {
                "title": "Dolor esse fugiat tempor aliqua nostrud pariatur tempor est sunt exercitation tempor excepteur esse ex.",
                "content": "Commodo minim aute sunt elit nisi. Duis ut ullamco culpa laboris consequat do dolor. Reprehenderit sit est ut ullamco. Non ad nulla culpa reprehenderit consequat in. Et qui do do occaecat est ut excepteur eu incididunt laboris veniam.",
                "picture": "https://unsplash.it/250/250?random&i=3"
            },
            {
                "title": "Esse cillum laborum amet enim nulla excepteur.",
                "content": "Quis do in labore labore consequat commodo exercitation. Duis fugiat ad et dolore labore amet consequat irure enim eiusmod dolore dolore. Proident excepteur dolor fugiat eu laborum est adipisicing consequat consequat ea. Qui mollit deserunt officia exercitation tempor culpa aliqua consectetur enim labore enim reprehenderit ea. Non sit culpa proident aute magna duis sit.",
                "picture": "https://unsplash.it/250/250?random&i=4"
            },
            {
                "title": "Sint elit aliqua aute ullamco fugiat cillum proident id enim.",
                "content": "Quis velit est do ex officia. Excepteur occaecat consectetur irure pariatur tempor anim consectetur do cillum reprehenderit adipisicing. Proident aute nisi ut qui. Ipsum reprehenderit ullamco culpa ullamco mollit in aliquip esse sunt eu. Incididunt aute sit aute commodo nulla dolor nostrud consequat.",
                "picture": "https://unsplash.it/250/250?random&i=5"
            }
        ]
    },

    getState() {
        console.log("state: ", this._state.newNote);
        return this._state;
    },

    _callSuscriber() {
        console.log("State has changed");
    },

    subscribe(observer) {
        this._rerender = observer;
    },

    dispatch(action) {
        console.log(action);
        console.log("in the reducer - prevState", this._state.newNote);
        let tmp = changeNoteReducer(this._state.newNote, action);
        console.log("tmp ", tmp);
        this._state.newNote = tmp;
        console.log("in the reducer", this._state.newNote); // 3-
        this._state.notes = addNoteReducer(this._state.notes, action);

        this._callSuscriber(this._state);
        //this._state.newNote = { tmpTitle: "", tmpContent: "", tmpPicture: "" };
    }
}

window.state = store._state.notes;
export default store;