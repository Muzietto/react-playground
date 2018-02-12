'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

// only webpack understands requires
//const ReactDOM = require('react-dom');
//const StatefulParent = require('./StatefulParent.jsx');

const render = () => ReactDOM.render(
  <StatefulParent/>,
  document.getElementById('content')
);

render();
store.subscribe(render);