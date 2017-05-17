const React = require('react');
const { render } = require('react-dom');
const { Provider } = require('react-redux');
const { createStore } = require('redux');
// next one fails to load reducers/index.js
//const reducers = require('./reducers');
// next one succeeds in loading the entry point to the reducers dir
const reducers = require('./reducers/index');
const routes = require('./routes');

module.exports = render((
  <Provider store={createStore(reducers)}>
    {routes}
  </Provider>
), document.getElementById('app'));