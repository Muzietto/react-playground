import React from 'react';
import ReactDOM from 'react-dom';
import App from '@src/main/App/App';
import SplashPage from '@src/main/SplashPage/SplashPage';

render(<SplashPage />);

// const lng = 'it-IT'; // navigator.language || navigator.userLanguage;
// const debugMode = (ENV.NPC_ENV === 'local');
// const isUserGold = false;

// eslint-disable-next-line no-console
if (ENV.NPC_ENV === 'pirelli-prod') console.log = () => {};

render(<App />);

function render(c) {
  ReactDOM.render(c, document.getElementById('root'));
}
