'use strict';

import React from 'react';

let Jsone = props => {
    const {form, text} = props;

    return (
        <div>
            <h3>{form}</h3>
            <pre>{
                (text)
                    ? Object.keys(text)
                    .map(key => key + ': ' + text[key] + '; ')
                    : null
            }</pre>
        </div>
    );
};

export default Jsone;
