'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {store} from './rootReducer';
import ContactPage from './ContactPage';
import {Provider} from 'react-redux';

const render = () => {
    const state = store.getState();
    ReactDOM.render(
        <Provider store={store}>
            <div>
                <ContactPage/>
            </div>
        </Provider>,
        document.getElementById('container'));
};

render();
store.subscribe(render);
window.store = store;
