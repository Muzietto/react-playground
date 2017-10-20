'use strict';

import React from 'react';

import Summary from './summary';

export default function body(props) {
    let {corefun, ...coreprops} = props.core;
    return (
        <div className="body">
            <Summary {...props.summary}/>
            {corefun(coreprops)}
        </div>
    );
}
