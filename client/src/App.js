import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { CreateNote } from './components/CreateNote/CreateNote';
import Container from './components/Container/Container';
import { NotFound } from './components/NotFound/NotFound';
import './App.css';
import 'materialize-css';

// Redux-style
// import state from './redux-style/state';
import store from './redux-style/store';

class App extends Component {

  render() {

    return <div className="App" >
      <Router>
        <Switch>
          {/* <Route path="/" exact ><Container notes={state.notes} /></Route>
          <Route path="/createNote" exact><CreateNote
            state={state}
            changeNoteTitle={changeNoteTitle}
            changeNoteContent={changeNoteContent}
            addNote={addNote} /></Route> */}
          <Route path="/" exact ><Container notes={store.getState().notes} /></Route>
          <Route path="/createNote" exact><CreateNote
            state={store.getState().newNote}
            dispatch={store.dispatch.bind(store)}

          // changeNoteTitle={store.changeNoteTitle.bind(store)}
          // changeNoteContent={store.changeNoteContent.bind(store)}
          // addNote={store.addNote.bind(store)}
          />
          </Route>
          <Route><NotFound /></Route>
        </Switch>
      </Router >
    </div>;
  }
}

export default App;
