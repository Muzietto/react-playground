'use strict';

import React from 'react';

import Summary from '../summary';

export default function body_dataset(props) {

    props.summary = {step: 1,};

    return (
        <div className="body">
            <Summary {...props.summary}/>
            {props.core.core_renderer(props)}
        </div>
    );
}
