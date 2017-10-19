'use strict';

import React from 'react';

import Body from './body';
import Footer from './footer';

export default function wizard(props) {
    return (
        <div className="wizard">
            <Body/>
            <Footer/>
        </div>
    );
}
