'use strict';

import React from 'react';

export default function body_customvar(props) {

    return (
        <div className="body">
            {props.core.core_renderer(props)}
        </div>
    );
}
