'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('state_machine_container');

export default function choice(choices, template) {
    template = template || templateA;

    return _render(choices, template);
}

function _render(handlers, template) {
//    ReactDOM.render(template(handlers), root);
    return template(handlers);
}

export function templateA(handlers) {
    return _fieldset(handlers, 'A');
}

export function templateB(handlers) {
    return _fieldset(handlers, 'B');
}

export function templateC(handlers) {
    return _fieldset(handlers, 'C');
}

function _fieldset(handlers, letter) {
    return (
        <fieldset>
            <legend>{letter + ') This is the ' + handlers.location}</legend>
            {
                handlers.backward.map((handler, index) => {
                    return <h4
                        style={{cursor: 'pointer'}}
                        key={index}
                        onClick={handler}>{'back to ' + (handler.name || 'noname')}</h4>;
                })
            }
            {
                handlers.forward.map((handler, index) => {
                    return <h2
                        style={{cursor: 'pointer'}}
                        key={index}
                        onClick={handler}><p>forward to&nbsp;&nbsp;</p>{(handler.name || 'noname')}</h2>;
                })
            }
        </fieldset>
    );
}
