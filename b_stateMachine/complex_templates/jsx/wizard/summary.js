'use strict';

import React from 'react';

// NB props.handlers[0] is meant for the wizard restart link
export default function summary(props) {
    return (
        <div className="summary">
            <div
                className={_class_name(1)}
                onClick={props.handlers && props.handlers[1]}>
                1
            </div>
            <div
                className={_class_name(2)}
                onClick={props.handlers && props.handlers[2]}>
                2
            </div>
            <div
                className={_class_name(3)}
                onClick={props.handlers && props.handlers[3]}>
                3
            </div>
        </div>
    );

    function _class_name(pos) {

        return dictionary(pos)
            + ((props.step >= pos) ? ' enabled' : '')
            + ((props.handlers && props.handlers.length > pos) ? ' cursor_pointer' : '');

        function dictionary(pos) {
            return ['zeroth', 'first', 'second', 'third'][pos];
        }
    }
}
