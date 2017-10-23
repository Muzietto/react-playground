'use strict';

import React from 'react';

import Accordion from '../../template/components/Accordion';

export default function core_dataset(props) {

    let state = props.state;

    return (
        <div className="core">
            <p>This is the core dataset saying: {props.core.message}</p>
            {
                props.handlers.forward.map((handlerArray, index) => {

                    let accordionChildren = handlerArray
                        .map((handler, idx) => ({
                            name: state.dataset_keys[index][idx],
                            handler,
                        }));

                    return <Accordion
                        key={index}
                        accordion_name={state.dataset_name[index]}
                        accordion_children={accordionChildren}
                    />;
                })
            }
        </div>
    );
}
