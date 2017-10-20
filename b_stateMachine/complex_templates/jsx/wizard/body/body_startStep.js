import React from 'react';

export default function body_startStep(props) {
    let handlers = props.handlers;
    return (
        <div className="body">
            {
                handlers.forward.map((handler, index) => {
                    return <h2
                        style={{cursor: 'pointer'}}
                        key={index}
                        onClick={handler}><p>forward to&nbsp;&nbsp;</p>{(handler.name || 'noname')}</h2>;
                })
            }
        </div>
    );
}
