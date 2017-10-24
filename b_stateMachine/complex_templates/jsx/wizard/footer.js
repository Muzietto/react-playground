'use strict';

import React from 'react';

export default function footer(props) {
    props.cancelButton.className += (!props.cancelButton.disabled) ? ' enabled' : '';
    props.saveButton.className += (!props.saveButton.disabled) ? ' enabled' : '';

    return (
        <div className="footer">
            <button
                {...props.cancelButton}>Cancel
            </button>
            <button
                {...props.restartButton}>Restart
            </button>
            <button
                {...props.saveButton}>Save
            </button>
        </div>
    );
}
