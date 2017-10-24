'use strict';

import React from 'react';

import Wizard from '../wizard/wizard';
import body_dataset from '../wizard/body/body_dataset';
import core_dataset from '../wizard/core/core_dataset';

export default function datasetStep_template(wizardProps) {
    wizardProps = {
        ...wizardProps,
        body: {
            ...wizardProps.body,
            body_renderer: body_dataset,
        },
        core: {
            ...wizardProps.core,
            core_renderer: core_dataset,
            message: 'hello, dataset!',
        },
        summary: {
            step: 1,
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