import React from 'react';
import './Form.css';
import 'materialize-css';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        if (event.target.name == "title") {
            this.setState({
                title: event.target.value
            });
        };
        if (event.target.name == "content") {
            this.setState({
                content: event.target.value
            });
        }
    }

    handleSubmit(event) {
        alert('A new note was submitted: ' + 'Title: ' + this.state.title + ' Content: ' + this.state.content);
        event.preventDefault();
    }

    render() {
        return (
            <form className="Form" onSubmit={handleSubmit}>
                <h5>Create new note</h5>
                <div className="input-field col s6">
                    <label>Input title</label><br />
                    <input
                        id="title"
                        placeholder="Add title"
                        type="text"
                        name="title"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="input-field col s6">
                    <label>Input text</label><br /><br />
                    <textarea
                        id="content"
                        placeholder="Add text"
                        type="text"
                        name="content"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </div>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default Form;