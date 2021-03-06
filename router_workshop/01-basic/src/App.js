import React from 'react';
//import logo from './logo.svg';
//import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Navigation from './navigation';
import Home from './home';
import About from './aboutus';
import About2 from './aboutus2';
import NotFound from './notfound';

var App = () => {
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <img src="public/img/logo.svg" className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Navigation />
        <div className="App-intro">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/about2" component={About2} />
          <Route component={NotFound} />
        </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App;