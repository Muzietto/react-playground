'use strict';

import React from 'react';

export default function footer(props) {
    return (
        <div className="footer">
            <button
                {...props.cancelButton}
                className="left_button ">Cancel</button>
            <button
                {...props.saveButton}
                className="right_button "
                onClick={props.saveHandler}>Save</button>
        </div>
    );
}
