import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './App';
import About from './About';
import Repos from './Repos';
import Repo from './Repo';
import Home1 from './Home1'; // rendered inside App
import Home2 from './Home2'; // independent component, handled directly by Router

/* To render some default UI you could easily do {this.props.children || <Home2/>}
   inside App. Instead, this way now App can render {this.props.children} 
   and we have a first-class route for Home that can participate in routing.
   Notice how the IndexRoute has no path. It becomes this.props.children
   of the parent when no other child of the parent matches
   or, in other words, when the parent's route matches EXACTLY.
   https://github.com/reactjs/react-router/blob/master/docs/guides/IndexRoutes.md
*/
render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home2}/>
      <Route path="/repos" component={Repos}>
        <Route path="/repos/:userName/:repoName" component={Repo}/>
      </Route>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'));