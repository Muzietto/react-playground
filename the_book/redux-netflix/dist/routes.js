define(['module', 'react', 'react-router', 'components/App', 'components/Movies', 'components/Movie'], function (module, React, _require, App, Movies, Movie) {
  'use strict';

  var Router = _require.Router,
      Route = _require.Route,
      IndexRoute = _require.IndexRoute,
      browserHistory = _require.browserHistory;


  module.exports = React.createElement(
    Router,
    { history: browserHistory },
    React.createElement(
      Route,
      { path: '/', component: App },
      React.createElement(IndexRoute, { component: Movies }),
      React.createElement(
        Route,
        { path: 'movies', component: Movies },
        ' ',
        React.createElement(Route, { path: ':id', component: Movie }),
        ' '
      )
    )
  );
});