import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './App'
import About from './About'
import Repos from './Repos'
import Repo from './Repo'
import Home from './Home'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      {/* IndexRoute has no path. It becomes this.props.children of the parent when no other child of the parent matches the URL, or in other words, when the parent's route matches exactly the URL */}
      <IndexRoute component={Home}/>
      <Route path="/repos" component={Repos}>
        <Route path="/repos/:userName/:repoName" component={Repo}/>
      </Route>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'))
