import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './App';
import About from './About';
import Repos from './Repos';
import Outside from './Outside';

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/repos" component={Repos}/>
      <Route path="/about" component={About}/>
    </Route>
      <Route path="/outsidez" component={Outside}/>
  </Router>
), document.getElementById('app'));
