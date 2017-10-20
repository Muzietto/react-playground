'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import {startStep} from './state_machine/steps';
import Wizard from './wizard';
import core_type from './core_type';
import core_index from './core_index';
import core_customvars from './core_customvars';
import body_customvars from './body_customvars';
import body_datasets from './body_datasets';

let wizardProps = {
    body: {
        body_renderer: body_customvars,
    },
    summary: {
        step: 1,
    },
    core: {
        core_renderer: undefined,
        message: 'hello, world!',
    },
    footer: {
        cancelButton: {
            disabled: false,
            onClick: () => {
                alert('cancel button clicked');
            }
        },
        saveButton: {
            disabled: true,
            onClick: () => {
                alert('SAVE button clicked');
            }
        },
    },
};

ReactDOM.render(
    <div>
        <div className="container">
            {Wizard(wizardProps)}
        </div>
        <div className="container" id="state_machine_container"/>
    </div>, document.getElementById('root'));

startStep();