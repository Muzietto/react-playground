'use strict';

import React from 'react';

import Body from './body';
import Footer from './footer';

export default function wizard({footer, ...bodyProps}) {
    return (
        <div className="wizard">
            <Body {...bodyProps}/>
            <Footer {...footer}/>
        </div>
    );
}
