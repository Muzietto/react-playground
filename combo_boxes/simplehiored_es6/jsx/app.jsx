'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Shell from 'shell';
import { store } from './initStore';

const render = () => ReactDOM.render(
  <Shell/>,
  document.getElementById('container')
);

render();
store.subscribe(render);