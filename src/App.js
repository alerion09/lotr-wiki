import React, { useState } from 'react';
import { lotrApiKey } from './config';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Books from './components/Books/Books';
import Movies from './components/Movies/Movies';
import Characters from './components/Characters/Characters';
import HomePage from './components/HomePage/HomePage';
import Navigation from './components/Navigation/Navigation';
import Chapters from './components/Chapters/Chapters';

const apiPrefix = 'https://the-one-api.dev/v2/';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dataState, setDataState] = useState();

  const getData = async (prefix, data) => {
    const response = await fetch(`${prefix}${data}`, {
      headers: { "Authorization": `Bearer ${lotrApiKey}` }
    });
    const jsonData = await response.json();
    setDataState(jsonData);
    setIsLoading(false);
  };

  return (
    <Router>
      <Navigation />
      <div className='content-container'>
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path='/books'>
            <Books isLoading={isLoading} setIsLoading={setIsLoading} apiPrefix={apiPrefix} getData={getData} dataState={dataState} />
          </Route>
          <Route exact path='/chapters/:id'>
            <Chapters isLoading={isLoading} setIsLoading={setIsLoading} apiPrefix={apiPrefix} getData={getData} dataState={dataState} />
          </Route>
          <Route path='/movies'>
            <Movies isLoading={isLoading} setIsLoading={setIsLoading} apiPrefix={apiPrefix} getData={getData} dataState={dataState} />
          </Route>
          <Route path='/characters'>
            <Characters />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
