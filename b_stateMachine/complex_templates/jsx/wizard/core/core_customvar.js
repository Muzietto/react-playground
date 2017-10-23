'use strict';

import React from 'react';

export default function core_customvar(props) {
    return (
        <div className="core">
            <p>This is the core customvar saying: {props.core.message}</p>
            {
                props.handlers.forward.map((handler, index) => {
                    return <h2
                        style={{cursor: 'pointer'}}
                        key={index}
                        onClick={handler}><p>forward to&nbsp;&nbsp;</p>{(handler.name || 'noname')}</h2>;
                })
            }
        </div>
    );
}
