'use strict';

import React from 'react';

export default function core_dataset(props) {
    return (
        <div className="core">
            <p>This is the core dataset saying: {props.message}</p>
            {/*render datasets and items*/}
        </div>
    );
}
