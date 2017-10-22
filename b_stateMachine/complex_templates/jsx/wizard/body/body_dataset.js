'use strict';

import React from 'react';

import Summary from '../summary';

export default function body_dataset(props) {
    let {core_renderer, ...coreprops} = props.core;
    props.summary = {step: 1,};
    return (
        <div className="body">
            <Summary {...props.summary}/>
            {core_renderer(props)}
        </div>
    );
}
