import React from 'react';
import ReactDOM from 'react-dom';
import App from '@src/main/App/App';
import SplashPage from '@src/main/SplashPage/SplashPage';
import client from '@src/model/data/client';
import dictionary from '@src/model/dictionary/dictionary';

// eslint-disable-next-line no-console
if (ENV.NPC_ENV === 'pirelli-prod') console.log = () => {};

render(<SplashPage />);

// eslint-disable-next-line no-unused-vars
const locale = 'it-IT'; // navigator.language || navigator.userLanguage;

// invoke endpoint /dictionary/:locale in client.js
client.dictionary(locale)
// then invoke dictionary.init to insert the JSON data in the model dictionary
  .then(dictionary.init)
  .then(() => {
    render(<App />);
  });

function render(c) {
  ReactDOM.render(c, document.getElementById('root'));
}
