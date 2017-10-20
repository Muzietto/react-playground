'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import {startStep} from './state_machine/steps';
import Wizard from './wizard';
import core_type from './core_type';
import core_index from './core_index';

let wizardProps = {
    summary: {
        step: 1,
    },
    core: {
        corefun: core_index,
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