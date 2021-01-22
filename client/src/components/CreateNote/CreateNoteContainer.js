import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import './CreateNote.css';
import { addNoteActionCreator } from '../../redux-style/addNoteReducer';
import { changeNoteTitleActionCreator, changeNoteContentActionCreator } from '../../redux-style/changeNoteReducer';

import { CreateNote } from './CreateNote.1.js';

export const CreateNoteContainer = (props) => {

    const history = useHistory();

    const titleHandler = tmpTitle => {
        props.dispatch(changeNoteTitleActionCreator(tmpTitle));
    }
    const contentHandler = tmpContent => {
        props.dispatch(changeNoteContentActionCreator(tmpContent));
    }
    const registerHandler2 = (newNote) => {
        props.dispatch(addNoteActionCreator(newNote));
        history.push('/');
    }

    return (<CreateNote
        newNote={props.state}
        titleHandler={titleHandler}
        contentHandler={contentHandler}
        registerHandler2={registerHandler2}
    />)
}

export default CreateNoteContainer;