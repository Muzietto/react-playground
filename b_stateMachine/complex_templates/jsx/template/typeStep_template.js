'use strict';

import React from 'react';

import Wizard from '../wizard/wizard';
import body_type from '../wizard/body/body_type';
import core_type from '../wizard/core/core_type';

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
            step: 2,
            handlers: props.handlers.backward,
        },
        footer: {
            ...props.footer,
            cancelButton: {
                ...props.footer.cancelButton,
                disabled: false,
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