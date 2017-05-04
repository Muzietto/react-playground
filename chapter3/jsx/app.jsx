const React = require('react');
const ReactDOM = require('react-dom');
const HelloWorld = require('./HelloWorld.jsx');

ReactDOM.render((
    <HelloWorld avverbio="cautiously"/>
  ),
  document.getElementById('content')
);
// no module.exports whatsoever!