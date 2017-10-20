'use strict';

import React from 'react';

import Wizard from '../wizard/wizard';
import body_customvar from '../wizard/body/body_customvar';
import core_customvar from '../wizard/core/core_customvar';

export default function startStep_template(wizardProps) {
    wizardProps.body = {
        body_renderer: body_customvar,
    };
    wizardProps.core = {
        core_renderer: core_customvar,
    };
    wizardProps.footer.cancelButton.disabled = false;
    wizardProps.footer.saveButton.disabled = true;

    return (
        <div className="container">
            {Wizard(wizardProps)}
        </div>
    );
}