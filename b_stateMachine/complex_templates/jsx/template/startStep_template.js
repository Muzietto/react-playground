'use strict';

import React from 'react';

import Wizard from '../wizard/wizard';
import body_start from '../wizard/body/body_start';

export default function startStep_template(wizardProps) {
    wizardProps.body = {
        body_renderer: body_start,
    };

    return (
        <div className="container">
            {Wizard(wizardProps)}
        </div>
    );
}