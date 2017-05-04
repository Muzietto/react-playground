const React = require('react');
const ReactDOM = require('react-dom');
const HelloWorld = require('./HelloWorld.jsx');
const DateTimeNow = require('./DateTimeNow.jsx');

ReactDOM.render((
    <div>
      <HelloWorld avverbio="cautiously"/>
      <DateTimeNow/>
    </div>
  ),
  document.getElementById('content')
);
// no module.exports whatsoever!