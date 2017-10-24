'use strict';

import React from 'react';

export default function summary(props) {
    return (
        <div className="summary">
            <div
                className={_class_name(1)}
                onClick={props.handlers && props.handlers[1]}>
                1
            </div>
            <div
                className={'second ' + ((props.step > 1) ? 'enabled' : '')}
                onClick={props.handlers && props.handlers[2]}>
                2
            </div>
            <div
                className={'third ' + ((props.step > 2) ? 'enabled' : '')}
                onClick={props.handlers && props.handlers[3]}>
                3
            </div>
        </div>
    );

    function _class_name(pos) {

        return dictionary(pos)
            + ((props.step > 0) ? ' enabled' : '')
            + ((props.handlers && props.handlers.length > pos) ? ' cursor_pointer' : '');

        function dictionary(pos) {
            return ['first', 'second', 'third'][pos - 1];
        }
    }
}
