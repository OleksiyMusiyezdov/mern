import React, { useState } from 'react';
import { useHistory, Link } from "react-router-dom";

import './CreateNote.css';
//import 'materialize-css';
//import { addNoteActionCreator, changeNoteActionCreator, changeNoteTitleActionCreator, changeNoteContentActionCreator } from '../../redux-style/store';
//import { changeNoteActionCreator } from '../../redux-style/changeNoteReducer';
import { addNoteActionCreator } from '../../redux-style/addNoteReducer';
import { changeNoteTitleActionCreator, changeNoteContentActionCreator } from '../../redux-style/changeNoteReducer';


export const CreateNote = (props) => {

    const history = useHistory();

    const [form, setForm] = useState(
        //title: '', content: ''
        props.state.newNote
    );

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    // Redux-style changeHandler:
    // const changeHandler2 = event => {
    //     console.log("props ", props);
    //     console.log("...form1 ", { ...form }); // prevState - OK
    //     console.log("event.target ", event.target.name, event.target.value); // actual input
    //     setForm({ ...form, [event.target.name]: event.target.value });
    //     console.log("...form2 ", { ...form }); // prevState - WHY?
    //     props.dispatch(changeNoteActionCreator({ ...form })); // 1+
    // }

    const titleHandler = event => {
        console.log("props.state.newNote", props.state);
        console.log("event.target ", event.target.name, event.target.value);
        props.dispatch(changeNoteTitleActionCreator(event.target.value));
    }
    const contentHandler = event => {
        console.log("props.state.newNote", props.state);
        console.log("event.target ", event.target.name, event.target.value);
        props.dispatch(changeNoteContentActionCreator(event.target.value));
    }
    const registerHandler2 = (e) => {
        e.preventDefault();
        console.log("props.state.newNote", props.state);
        props.dispatch(addNoteActionCreator(props.state)); // delete props.state.newNote
        //history.push('/');
    }


    const registerHandler = async (e) => {
        e.preventDefault();

        console.log({ ...form });

        try {
            const url = 'http://localhost:8080/api/createNote';
            const options = {
                method: 'POST',
                headers: {
                    'Accept': 'text/html',
                    // 'Content-Type': 'application/json;charset=UTF-8',
                    'Content-Type': 'text/html; charset=utf-8',
                },
                body: JSON.stringify({ ...form })
            };

            const data = await fetch(url, options);

            fetch(url, options)
                .then((response) => {
                    return response.body;
                })
                .then((body) => {
                    console.log(body);
                });

            console.log(data.body);

            //history.push('/');

        } catch (e) { console.log("Failed to add a note: ", e); }
    };

    return (
        <form className="CreateNote" onSubmit={registerHandler}>
            <h5>Create note</h5>
            <div className="input-field col s6">
                <label htmlFor="title">Input title</label><br />
                <input
                    // tabindex="0"
                    id="title"
                    placeholder="Add title"
                    type="text"
                    name="tmpTitle"
                    //onChange={changeHandler2}
                    onChange={titleHandler}
                />
            </div>
            <div className="input-field col s6">
                <label htmlFor="content">Input text</label><br /><br />
                <textarea
                    id="content"
                    placeholder="Add text"
                    type="text"
                    name="tmpContent"
                    //onChange={changeHandler2}
                    onChange={contentHandler}
                />
            </div>
            <button type="submit" onClick={registerHandler2}>Submit</button>
            <Link to="/"><button type="button" value="Home">Home</button></Link>
        </form>
    )
}
