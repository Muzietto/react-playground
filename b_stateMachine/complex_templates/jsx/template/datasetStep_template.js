'use strict';

import React from 'react';

import Wizard from '../wizard/wizard';
import body_dataset from '../wizard/body/body_dataset';
import core_dataset from '../wizard/core/core_dataset';

export default function datasetStep_template(props) {
    props = {
        ...props,
        body: {
            ...props.body,
            body_renderer: body_dataset,
        },
        core: {
            ...props.core,
            core_renderer: core_dataset,
            message: 'hello, dataset!',
        },
        summary: {
            step: 1,
        },
        footer: {
            ...props.footer,
            cancelButton: {
                ...props.footer.cancelButton,
                disabled: false,
            },
            restartButton: {
                ...props.footer.restartButton,
                disabled: false,
                onClick: props.handlers.backward[0],
            },
            saveButton: {
                ...props.footer.saveButton,
                disabled: true,
            },
        }
    };

    return (
        <div className="container">
            {Wizard(props)}
        </div>
    );
}