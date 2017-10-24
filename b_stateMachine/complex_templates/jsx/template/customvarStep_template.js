'use strict';

import React from 'react';

import Wizard from '../wizard/wizard';
import body_customvar from '../wizard/body/body_customvar';
import core_customvar from '../wizard/core/core_customvar';

export default function customvarStep_template(props) {
    props = {
        ...props,
        body: {
            ...props.body,
            body_renderer: body_customvar,
        },
        core: {
            ...props.core,
            core_renderer: core_customvar,
            message: 'hello, customvar!',
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