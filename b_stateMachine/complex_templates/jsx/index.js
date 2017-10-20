'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import choice, {startStep} from './state_machine/steps';
import Wizard from './wizard';

let wizardProps = {
    summary: {
        step: 1,
    },
    core: {},
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