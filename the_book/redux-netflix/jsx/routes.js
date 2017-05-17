const React = require('react');
const {
  Router,
  Route,
  IndexRoute,
  browserHistory
} = require('react-router');
const App = require('components/App');
const Movies = require('components/Movies');
const Movie = require('components/Movie');

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Movies} />
      <Route path="movies" component={Movies}>
        <Route path=":id" component={Movie} />
      </Route>
    </Route>
  </Router>
);