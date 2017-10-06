import React from 'react';
import ReactDOM from 'react-dom';
import {store} from './rootReducer';
import ContactPage from './ContactPage';

const render = () => {
    const state = store.getState();
    ReactDOM.render((<ContactPage/>),
        document.getElementById('container'));
};

render();
store.subscribe(render);
window.store = store;
