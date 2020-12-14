import React, { Component } from 'react';
import './Container.css';
import Note from '../Note/Note';
import 'materialize-css';
//import notes from "../../content/notes.json";

class Container extends Component {

    state = {
        notes: []
    }

    componentDidMount() {

        const registerHandler = async () => {

            try {
                const url = 'http://localhost:8080/api';
                const options = {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json;charset=UTF-8',
                    },
                };

                let data = await fetch(url, options)
                    .then((response) => {
                        return response.json();
                    });
                //console.log(data.notes);
                this.setState({ notes: data.notes });
                //console.log(this.state.notes);

            } catch (e) { console.log(e); }
        };

        registerHandler();

    }

    render() {
        return <div className="Container" >
            <div className="column">
                <a href="/createNote"><button className="btn">Create new note</button></a>
                <div className="NotesContainer">
                    {/* {notes.map((note, key) => { */}
                    {this.state.notes.map((note, key) => {
                        return (<li key={key}>
                            <Note
                                // title={note.title}
                                // content={note.content}
                                // picture={note.picture}
                                title={note.title}
                                content={note.content}
                                picture={note.picture}
                            />
                        </li>)
                    })}
                </div>

            </div>
        </div>;
    }
}


export default Container;