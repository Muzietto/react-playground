'use strict';

import React from 'react';

import Wizard from '../wizard/wizard';
import body_type from '../wizard/body/body_type';
import core_type from '../wizard/core/core_type';

export default function typeStep_template(wizardProps) {
    wizardProps = {
        ...wizardProps,
        body: {
            ...wizardProps.body,
            body_renderer: body_type,
        },
        core: {
            ...wizardProps.core,
            core_renderer: core_type,
            message: 'hello, type!',
        },
        summary: {
            step: 2,
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