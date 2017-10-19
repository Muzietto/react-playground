'use strict';

import React from 'react';

export default function footer(props) {
    return (
        <div className="footer">
            <button className="enabled" onClick={props.cancelHandler}>Cancel</button>
            <button className="" onClick={props.saveHandler}>Save</button>
        </div>
    );
}
