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
    let wizardContainer = document.getElementById('complex_templates_container');

    if (ev.key === '$') {

        let promise = new Promise(function (resolve, reject) {

            Object.defineProperty(resolve, 'name', {value: 'resolveCallback'});

            wizardContainer.classList.remove('hidden');

            startStep(resolve, true); // REPLACE_CALLBACK
        });

        promise
            .then(wizardResult => {
                ev.target.value += wizardResult;
                ReactDOM.render(null, wizardContainer);
            })
            .catch(err => alert('Wizard failure: ' + err));

        return false;
    }
}