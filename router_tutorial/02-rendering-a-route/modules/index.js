import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './App';
import About from './About';
import Repos from './Repos';

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/about" component={About}/>
    <Route path="/repos" component={Repos}/>
  </Router>
  ), document.getElementById('app'));