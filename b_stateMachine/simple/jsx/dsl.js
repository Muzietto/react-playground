'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('container');

export default function choice(choices, template) {
    template = template || defaultTemplate;

    _render(choices, template);
}

function _render(handlers, template) {
    ReactDOM.render(template(handlers), root);
}

function defaultTemplate(handlers) {
    return (
        <fieldset>
            <legend>{'This is the ' + handlers.location}</legend>
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