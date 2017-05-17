'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import Form03 from './form03';
import { store } from './initStore';

const render = () => ReactDOM.render(
  <Form03/>,
  document.getElementById('content')
);

render();
store.subscribe(render);