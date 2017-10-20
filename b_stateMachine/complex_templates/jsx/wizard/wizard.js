'use strict';

import React from 'react';

import Footer from './footer';

export default function wizard({footer, ...bodyProps}) {
    let body_renderer = bodyProps.body.body_renderer;
    return (
        <div className="wizard">
            {body_renderer(bodyProps)}
            <Footer {...footer}/>
        </div>
    );
}
