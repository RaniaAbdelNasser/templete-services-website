/** @format */

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import LogoNodejs from 'react-ionicons/lib/LogoNodejs';
import Home from './views/Home';
import Search from './views/Search';
import Details from './views/Details';
import NoMatch from './views/Nomatch';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/search' component={Search} />
          <Route path='/details' component={Details} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
