import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { CreateNote } from './components/CreateNote/CreateNote';
import Container from './components/Container/Container';
import { NotFound } from './components/NotFound/NotFound';
import './App.css';

class App extends Component {

  render() {
    return <div className="App" >
      <Router>
        <Switch>
          <Route path="/" exact><Container /></Route>
          <Route path="/createNote" exact><CreateNote /></Route>
          {/* <Redirect to="/" ></Redirect> */}
          <Route><NotFound /></Route>
        </Switch>
      </Router >
    </div>;
  }
}

export default App;
