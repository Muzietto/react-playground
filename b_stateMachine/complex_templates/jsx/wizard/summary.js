'use strict';

import React from 'react';

export default function summary(props) {
    return (
        <div className="summary">
            <div className={'first ' + ((props.step > 0) ? 'enabled' : '')}>
                1
            </div>
            <div className={'second ' + ((props.step > 1) ? 'enabled' : '')}>
                2
            </div>
            <div className={'third ' + ((props.step > 2) ? 'enabled' : '')}>
                3
            </div>
        </div>
    );
}
