'use strict';

import React from 'react';

import Wizard from '../wizard/wizard';
import body_index_selection from '../wizard/body/body_index_selection';
import core_index_selection from '../wizard/core/core_index_selection';

// NB this template renders both connectedStep and fixedStep
export default function indexSelectionStep_template(props) {
    props = {
        ...props,
        body: {
            ...props.body,
            body_renderer: body_index_selection,
        },
        core: {
            ...props.core,
            core_renderer: core_index_selection,
            message: 'hello, ' + props.location + '!',
        },
        summary: {
            step: 3,
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

    if (props.chosen_prop_with_index) {
        props.footer.saveButton.disabled = false;
        props.footer.saveButton.onClick = ev => alert('$(' + props.chosen_prop_with_index + ')');
    }

    return (
        <div className="container">
            {Wizard(props)}
        </div>
    );
}