import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { CreateNote } from './components/CreateNote/CreateNote';
import Container from './components/Container/Container';

class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact><Container /></Route>
                    <Route path="/createNote" exact><CreateNote /></Route>
                    <Redirect to="/" ></Redirect>
                </Switch>
            </Router >
        )
    }
}

export default Routes;