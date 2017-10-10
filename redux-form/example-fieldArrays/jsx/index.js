'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {reducer as reduxFormReducer} from 'redux-form';
import FieldArraysForm from './FieldArraysForm';

const dest = document.getElementById('container');

const reducer = combineReducers({
    form: reduxFormReducer // mounted under "form"
});
const store = createStore(reducer);
window.store = store;

const showResults = values =>
    new Promise(resolve => {
        setTimeout(() => {
            // simulate server latency
            window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
            resolve();
        }, 500);
    });

let render = () => {
    ReactDOM.render(
        <Provider store={store}>

                <FieldArraysForm onSubmit={showResults}/>

        </Provider>,
        dest
    );
};

render();
