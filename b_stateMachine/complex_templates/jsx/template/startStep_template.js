'use strict';

import React from 'react';

import Wizard from '../wizard/wizard';
import body_startStep from '../wizard/body/body_startStep';

export default function startStep_template(wizardProps) {
    wizardProps.body = {
        body_renderer: body_startStep,
    };

    return (
        <div className="container">
            {Wizard(wizardProps)}
        </div>
    );
}