'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import {startStep as simpleStartStep} from './simple_state_machine/steps';
import {startStep} from './state_machine/steps';
import Wizard from './wizard/wizard';
import core_type from './wizard/core/core_type';
import core_type_simple from './wizard/core/core_type_simple';
import core_index from './wizard/core/core_index';
import core_customvar from './wizard/core/core_customvar';
import body_customvar from './wizard/body/body_customvar';
import body_datasets from './wizard/body/body_datasets';

let wizardProps = {
    body: {
        body_renderer: body_datasets,
    },
    summary: {
        step: 1,
    },
    core: {
        core_renderer: core_type_simple,
        message: 'hello, world!',
    },
    footer: {
        cancelButton: {
            disabled: false,
            onClick: () => {
                alert('cancel button clicked');
            },
            className: 'left_button',
        },
        restartButton: {
            disabled: false,
            onClick: () => {
                alert('restart button clicked');
            },
            className: 'left_button',
        },
        saveButton: {
            disabled: true,
            onClick: () => {
                alert('SAVE button clicked');
            },
            className: 'right_button',
        },
    },
};

ReactDOM.render(
    <div>
        <div className="container">
            {Wizard(wizardProps)}
        </div>
        <div className="container" id="state_machine_container"/>
        <div className="container" id="complex_templates_container"/>
    </div>, document.getElementById('root'));

// simple templates
simpleStartStep();

// complex templates
startStep();
