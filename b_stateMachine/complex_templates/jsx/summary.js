'use strict';

import React from 'react';

export default function summary(props) {
    return (
        <div className="summary">
            <div className={'first ' + (props.summary_step > 0) ? 'enabled' : ''}>
                1
            </div>
            <div className={'second ' + (props.summary_step > 1) ? 'enabled' : ''}>
                2
            </div>
            <div className={'third ' + (props.summary_step > 2) ? 'enabled' : ''}>
                3
            </div>
        </div>
    );
}
