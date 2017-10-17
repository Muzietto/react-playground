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
        <div>
            {
                handlers.map((handler, index) => {
                    return <h2
                        style={{cursor: 'pointer'}}
                        key={index}
                        onClick={handler}>{handler.name || 'noname'}</h2>;
                })
            }
        </div>
    );
}