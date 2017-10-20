'use strict';

import React from 'react';

export default function core_index(props) {
    return (
        <div className="core">
            <p>This is the core index saying: {props.message}</p>
        </div>
    );
}
