'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import {startStep} from './state_machine/steps';

ReactDOM.render(
    <div className="large_container">
        <div className="container">
            <input type="text" className="wizard-equipped" placeholder="type a $-sign in here"/>
        </div>
        <div className="container hidden" id="complex_templates_container"/>
    </div>, document.getElementById('root')
);

Array.prototype.forEach.call(document.getElementsByClassName('wizard-equipped'), elem => {
    elem.addEventListener('keyup', drawWizard);
});

function drawWizard(ev) {

    if (ev.key === '$') {

        document.getElementById('complex_templates_container')
            .classList.remove('hidden');

        // complex templates
        startStep();
    }
    return false;
}