'use strict';

import React from 'react';

import Summary from './summary';
import Core from './core';

export default function body(props) {
    return (
        <div className="body">
            <Summary {...props.summary}/>
            <Core {...props.core}/>
        </div>
    );
}
