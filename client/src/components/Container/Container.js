import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Container.css';
import { NotesContainer } from '../NotesContainer/NotesContainer';
import 'materialize-css';

class Container extends Component {

    state = {
        notes: [],
        currentPage: 1,
        pageSize: 5,
        pagesCount: 0,
        pages: [],
    }

    componentDidMount() {

        const registerHandler = async () => {

            try {
                const url = `http://localhost:8080/api?page=${this.state.currentPage}&pageSize=${this.state.pageSize}`;
                //const url = `http://localhost:8080/api`;
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
                        //return response;
                    });
                this.setState({ notes: data.notes });
                this.setState({ pagesCount: Math.ceil(data.totalCount / this.state.pageSize) });

                console.log(data.totalCount);
                console.log(data.notes);
                console.log(this.state.pagesCount);

                let pagesOfCount = [];
                for (let i = 1; i <= this.state.pagesCount; i++) {
                    pagesOfCount.push(i);
                }
                this.setState({ pages: pagesOfCount });

            } catch (e) { console.log("Failed to get notes from database ", e); }
        };

        registerHandler();
    }

    render() {
        return <div className="Container" >
            <div className="column">

                <h6>There are {this.state.totalCount} items in the list.</h6>

                {this.state.notes.length === 0 &&
                    <div className="EmptyNotes">
                        <h6>There are {this.state.notes.length} notes in the list. Would you like to add a note?</h6><br />
                    </div>
                }

                <Link to="/createNote"><button className="btn">Create new note</button></Link>

                <div className="Pages">
                    {this.state.pages.map((p, key) => {
                        return <span key={key}> {p} </span>
                    })}
                </div>

                {this.state.notes.length !== 0 && <NotesContainer notes={this.state.notes} />}

            </div>
        </div>;
    }
}

export default Container;