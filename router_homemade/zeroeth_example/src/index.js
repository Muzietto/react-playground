import React from 'react';
import { render } from 'react-dom';
import App from './App';

render(<App pathname={location.pathname} />, document.getElementById('REACT_ROOT'));
