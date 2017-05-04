const React = require('react');
const ReactDOM = require('react-dom');
const HelloWorld = require('./HelloWorld.jsx');

ReactDOM.render(
  React.createElement(HelloWorld, null),
  document.getElementById('content')
);
// no module.exports whatsoever!