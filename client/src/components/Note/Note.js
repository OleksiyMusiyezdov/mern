import React, { Component } from 'react';
import './Note.css';
import 'materialize-css';

class Note extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            content: props.content,
            picture: props.picture,
        }
    }

    render() {
        return <div className="Note card blue-grey darken-1">

            <div className="row">
                <div className="card-content white-text">
                    <span className="card-title">{this.state.title}</span>
                    <p>{this.state.content}</p>
                </div>

                <div className="picture"
                    style={{ backgroundImage: `url(${this.state.picture})` }}>
                </div>
            </div>
            {/* <div class="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
            </div> */}

            <button>Delete</button>
        </div>;
    }
}

export default Note;