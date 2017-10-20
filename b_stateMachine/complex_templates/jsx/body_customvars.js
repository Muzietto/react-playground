'use strict';

import React from 'react';

import core_customvars from './core_customvars';

export default function body_customvars(props) {
    let {core_renderer, ...coreprops} = props.core;
    return (
        <div className="body">
            {core_customvars(coreprops)}
        </div>
    );
}
