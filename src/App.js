import React from 'react';
import {lotrApiKey} from './config';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Books from './Books';
import Movies from './Movies';
import Characters from './Characters';
import HomePage from './HomePage';
import Navigation from './Navigation';


function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
          <Route exact path='/'>
              <HomePage />
          </Route>
          <Route path='/books'>
              <Books />
          </Route>
          <Route path='/movies'>
              <Movies />
          </Route>
          <Route path='/characters'>
              <Characters />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
