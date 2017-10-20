'use strict';

import React from 'react';

import core_customvar from '../core/core_customvar';

export default function body_customvar(props) {
    let handlers = props.handlers;
    let {core_renderer, ...coreprops} = props.core;
    return (
        <div className="body">
            {core_customvar(coreprops)}
        </div>
    );
}
