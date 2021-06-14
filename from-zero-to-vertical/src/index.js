import React from 'react';
import ReactDOM from 'react-dom';
import App from '@src/main/App/App';
import SplashPage from '@src/main/SplashPage/SplashPage';

render(<SplashPage />);

// eslint-disable-next-line no-unused-vars
const locale = 'it-IT'; // navigator.language || navigator.userLanguage;

// invoke endpoint /dictionary/:locale in client.js

// then invoke dictionary.init to insert the JSON data in the model dictionary

// eslint-disable-next-line no-console
if (ENV.NPC_ENV === 'pirelli-prod') console.log = () => {};

render(<App />);

function render(c) {
  ReactDOM.render(c, document.getElementById('root'));
}
