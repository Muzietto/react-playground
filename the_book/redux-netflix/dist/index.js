define(['react', 'react-dom', 'react-redux', 'redux', './reducers/index', './routes'], function (React, _require, _require2, _require3, reducers, routes) {
  'use strict';

  var render = _require.render;
  var Provider = _require2.Provider;
  var createStore = _require3.createStore;


  /*module.exports = */render(React.createElement(
    Provider,
    { store: createStore(reducers) },
    routes
  ), document.getElementById('app'));
});