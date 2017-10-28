// completely stateless
'use strict';

import React from 'react';

class ItemsList2 extends React.Component {

    static defaultProps() {
        return {
            items: [],
            itemsMapper: x => x,
            displayMapper: x => x,
        };
    }

    render() {
        return (
            <div className={this.props.containerCssClass}>
                {this.props.prependToList}
                {this.props.items
                    .map(this.props.children)}
            </div>
        );
    }
}

export default ItemsList2;
