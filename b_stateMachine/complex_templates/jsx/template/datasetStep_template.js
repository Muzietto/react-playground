'use strict';

import React from 'react';

import Wizard from '../wizard/wizard';
import body_dataset from '../wizard/body/body_dataset';
import core_dataset from '../wizard/core/core_dataset';

export default function customvarStep_template(wizardProps) {
    wizardProps.body = {
        body_renderer: body_dataset,
    };
    wizardProps.core = {
        core_renderer: core_dataset,
        message: 'hello, world!',
    };
    wizardProps.footer.cancelButton.disabled = false;
    wizardProps.footer.saveButton.disabled = true;

    return (
        <div className="container">
            {Wizard(wizardProps)}
        </div>
    );
}