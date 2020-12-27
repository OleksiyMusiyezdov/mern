import React, { useState } from 'react';
import { useHistory, Link } from "react-router-dom";

import './CreateNote.css';
import 'materialize-css';

export const CreateNote = () => {
    const history = useHistory();

    const [form, setForm] = useState({
        title: '', content: ''
    });

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    const registerHandler = async (e) => {
        e.preventDefault();

        console.log({ ...form });

        try {
            const url = 'http://localhost:8080/api/createNote';
            const options = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8',
                },
                body: JSON.stringify({ ...form })
            };

            const data = await fetch(url, options);

            history.push('/');

            console.log(data);

        } catch (e) { console.log(e); }
    };

    return (
        <form className="CreateNote">
            <h5>Create note</h5>
            <div className="input-field col s6">
                <label>Input title</label><br />
                <input
                    id="title"
                    placeholder="Add title"
                    type="text"
                    name="title"
                    value={form.value}
                    onChange={changeHandler}
                />
            </div>
            <div className="input-field col s6">
                <label>Input text</label><br /><br />
                <textarea
                    id="content"
                    placeholder="Add text"
                    type="text"
                    name="content"
                    value={form.value}
                    onChange={changeHandler}
                // disabled={loading}
                />
            </div>
            <input type="submit" value="Submit" onClick={registerHandler} />
            <Link to="/"><button type="button" value="Home">Home</button></Link>
        </form>
    )
}
