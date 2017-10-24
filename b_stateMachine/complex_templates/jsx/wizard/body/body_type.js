'use strict';

import React from 'react';

import Summary from '../summary';

export default function body_type(props) {

    return (
        <div className="body">
            <Summary {...props.summary}/>
            {props.core.core_renderer(props)}
        </div>
    );
}
