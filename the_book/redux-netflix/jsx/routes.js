const React = require('react');
const {
  Router,
  Route,
  IndexRoute,
  browserHistory
} = require('react-router');
// NB: next imports are actually ReactRedux.connect(component)
const App = require('components/App');
const Movies = require('components/Movies');
const Movie = require('components/Movie');

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      {/* show Movies also on path "/" */}
      <IndexRoute component={Movies} />
        {/* show Movies on path */}
      <Route path="movies" component={Movies}> {/* added a / */}
        <Route path=":id" component={Movie} /> {/* added /movies/ */}
      </Route>
    </Route>
  </Router>
);