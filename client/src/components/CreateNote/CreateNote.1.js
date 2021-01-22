import React from 'react';
import { Link } from "react-router-dom";

import './CreateNote.css';

export const CreateNote = (props) => {

    console.log(props);

    const titleChanger = event => {
        let tmpTitle = event.target.value;
        props.titleHandler(tmpTitle);
    }
    const contentChanger = event => {
        props.contentHandler(event.target.value);
    }
    const registerHandler3 = (e) => {
        e.preventDefault();
        let newNote = props.newNote;
        props.registerHandler2(newNote);
    }

    return (
        <form className="CreateNote" onSubmit={registerHandler3}>
            <h5>Create note</h5>
            <div className="input-field col s6">
                <label htmlFor="title">Input title</label><br />
                <input
                    // tabindex="0"
                    id="title"
                    placeholder="Add title"
                    type="text"
                    name="tmpTitle"
                    onChange={titleChanger}
                />
            </div>
            <div className="input-field col s6">
                <label htmlFor="content">Input text</label><br /><br />
                <textarea
                    id="content"
                    placeholder="Add text"
                    type="text"
                    name="tmpContent"
                    onChange={contentChanger}
                />
            </div>
            <button type="submit" onClick={registerHandler3}>Submit</button>
            <Link to="/"><button type="button" value="Home">Home</button></Link>
        </form>
    )
}
