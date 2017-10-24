'use strict';

import React from 'react';

import Wizard from '../wizard/wizard';
import body_customvar from '../wizard/body/body_customvar';
import core_customvar from '../wizard/core/core_customvar';

export default function customvarStep_template(wizardProps) {
    wizardProps = {
        ...wizardProps,
        body: {
            ...wizardProps.body,
            body_renderer: body_customvar,
        },
        core: {
            ...wizardProps.core,
            core_renderer: core_customvar,
            message: 'hello, customvar!',
        },
        footer: {
            ...wizardProps.footer,
            cancelButton: {
                ...wizardProps.footer.cancelButton,
                disabled: false,
            },
            saveButton: {
                ...wizardProps.footer.saveButton,
                disabled: true,
            },
        }
    };

    return (
        <div className="container">
            {Wizard(wizardProps)}
        </div>
    );
}