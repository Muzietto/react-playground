import React from 'react';
import ReactDOM from 'react-dom';

export default function choice(choices, template) {
     _render(choices, template);
     return null;
}

function _render(handlers, template) {
    const root = document.getElementById('complex_templates_container');

    ReactDOM.render(template(handlers), root);
}
