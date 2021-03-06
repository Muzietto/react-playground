'use strict';

import React from 'react';

import Wizard from '../wizard/wizard';
import body_type from '../wizard/body/body_type';
import core_type from '../wizard/core/core_type';

// NB this template renders both typeStep and randomStep
export default function typeStep_template(props) {
    props = {
        ...props,
        body: {
            ...props.body,
            body_renderer: body_type,
        },
        core: {
            ...props.core,
            core_renderer: core_type,
            message: 'hello, type!',
        },
        summary: {
            step: (props.location === 'typeStep') ? 2 : 3,
            handlers: props.handlers.backward,
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

    if (props.location === 'randomStep') {
        props.footer.saveButton.disabled = false;
        props.footer.saveButton.onClick = ev => {
            props.promiseCallback('(' + props.chosen_dataset_property + ')');
        }
    }

    return (
        <div className="container">
            {Wizard(props)}
        </div>
    );
}