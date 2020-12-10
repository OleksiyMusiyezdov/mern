import React, { useState } from 'react';
import './CreateNote.css';
import 'materialize-css';
//import { useHTTP } from '../../hooks/http.hook';

export const CreateNote = () => {

    //const { loading, request, error, clearError } = useHTTP();
    const [form, setForm] = useState({
        title: '', content: ''
    });

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    const registerHandler = async () => {

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
            console.log(data);
            // .then(response => {
            //     console.log("My response:", response.status);
            // });

        } catch (e) { console.log(e); }
    };

    // const registerHandler2 = async () => {
    //     console.log({ ...form });
    //     try {
    //         const data = await request('http://localhost:8080/api/createNote', 'POST', { ...form })
    //             .then(response => {
    //                 console.log("My response:", response.status);
    //             });
    //         console.log(data);
    //         //(data.message)
    //     } catch (e) { }
    // }

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
            <a href="/"><button type="button" value="Home">Home</button></a>
        </form>
    )
}
