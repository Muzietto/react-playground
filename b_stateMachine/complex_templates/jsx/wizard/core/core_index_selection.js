'use strict';

import React from 'react';

import ItemsList from '../../template/components/ItemsList';

export default function core_index_selection(props) {
    let chosenProperty = props.chosen_dataset_property;
    return (
        <div className="core">
            <p>This is the core index selection saying: {props.core.message}</p><br/>
            <p>Your choice is {chosenProperty} | Select the index now</p>
            <ItemsList
                containerCssClass="types_container"
                items={props.handlers.forward}
                itemsMapper={_handlersMapper}/>
        </div>
    );
}

function _handlersMapper(handler, index) {
    return (
        <div
            key={index}
            className="type_container"
            onClick={handler}>
            {handler.name}
        </div>
    );
}
