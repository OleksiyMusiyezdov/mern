import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import './Container.css';
import styles from './Container.module.css';
import { NotesContainer } from '../NotesContainer/NotesContainer';
import 'materialize-css';

class Container extends Component {

    constructor() {
        super();
        this.state = {
            notes: [],
            currentPage: 1,
            pageSize: 5,
            pagesCount: 0,
            pages: [],
        };
        this.setCurrentPage = this.setCurrentPage.bind(this);
        this.registerHandler = this.registerHandler.bind(this);
    }

    // setCurrentPage = async (event) => {
    //     try {
    //         console.log("Page before change: ", this.state.currentPage);
    //         console.log("Page clicked: ", event.currentTarget.textContent);
    //         await this.setState({ currentPage: event.currentTarget.textContent });
    //         console.log("Updated current page: ", this.state.currentPage);
    //         this.registerHandler();
    //     } catch (e) { console.log("Failed to get page until it is set ", e); }
    // }

    setCurrentPage = p => e => this.setState({ currentPage: p }, this.registerHandler);

    registerHandler = async () => {

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
                });
            this.setState({ notes: data.notes });
            this.setState({ pagesCount: Math.ceil(data.totalCount / this.state.pageSize) });

            // console.log(data.totalCount);
            console.log(data.notes);
            // console.log(this.state.pagesCount);

            let pagesOfCount = [];
            for (let i = 1; i <= this.state.pagesCount; i++) {
                pagesOfCount.push(i);
            }
            this.setState({ pages: pagesOfCount });

        } catch (e) { console.log("Failed to get notes from database ", e); }
    };

    componentDidMount() {
        this.registerHandler();
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

                <div className={styles.pages}>
                    {this.state.pages.map((p, key) => {
                        return <span
                            className={parseInt(this.state.currentPage) === p ? styles.selectedPage : ''}
                            key={key}
                            onClick={this.setCurrentPage(p)}>{p}</span>
                    })}
                </div>

                {this.state.notes.length !== 0 && <NotesContainer notes={this.state.notes} />}

            </div>
        </div>;
    }
}

export default Container;