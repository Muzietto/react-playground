'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import {startStep as simpleStartStep} from './simple_state_machine/steps';
import {startStep} from './state_machine/steps';
import Wizard from './wizard/wizard';
import core_type from './wizard/core/core_type';
import core_index from './wizard/core/core_index';
import core_customvars from './wizard/core/core_customvars';
import body_customvars from './wizard/body/body_customvars';
import body_datasets from './wizard/body/body_datasets';

let wizardProps = {
    body: {
        body_renderer: body_datasets,
    },
    summary: {
        step: 1,
    },
    core: {
        core_renderer: core_type,
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
        <div className="container" id="complex_templates_container"/>
    </div>, document.getElementById('root'));

simpleStartStep();

ReactDOM.render(
    startStep(), document.getElementById('complex_templates_container'));
