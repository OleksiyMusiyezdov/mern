import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Container.css';
import { NotesContainer } from '../NotesContainer/NotesContainer';
import 'materialize-css';

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
                this.setState({ notes: data.notes });

            } catch (e) { console.log("Failed to get notes from database ", e); }
        };

        registerHandler();
    }

    render() {
        return <div className="Container" >
            <div className="column">

                {this.state.notes.length === 0 &&
                    <div className="EmptyNotes">
                        <h6>There are {this.state.notes.length} notes in the list. Would you like to add a note?</h6><br />
                    </div>
                }

                <Link to="/createNote"><button className="btn">Create new note</button></Link>

                {this.state.notes.length !== 0 && <NotesContainer notes={this.state.notes} />}

            </div>
        </div>;
    }
}

export default Container;