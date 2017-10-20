'use strict';

import React from 'react';

import Summary from '../summary';

export default function body_datasets(props) {
    let {core_renderer, ...coreprops} = props.core;
    return (
        <div className="body">
            <Summary {...props.summary}/>
            {core_renderer(coreprops)}
        </div>
    );
}
