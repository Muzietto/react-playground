'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import {
    startStep,
    customvarStep,
    propertyStep,
    exitStep,
    typeStep,
    randomStep,
    connectedStep,
    fixedStep,
} from './steps';

let root = document.getElementById('container');

let state = {
    'dataset': {'dataset#0': ['dataset#0.dataset_item#0']},
    'dataset_item': {'dataset#0.dataset_item#0': {'brand': 'bmw', 'color': 'white'}},
    'dataset_name': ['Cars I like the most'],
    'dataset_keys': [['brand', 'color']],
    'customvar': ['player_name'],
};

function choice(choices, template) {

    return function () {
        _render();
    };

}

function _render() {
    ReactDOM.render(template(handlers), root);
}

function template(handlers) {
    return (
        <div>
            {
                handlers.map(() => ({}))
            }
        </div>
    );
}