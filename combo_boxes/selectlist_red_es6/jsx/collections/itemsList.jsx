// completely stateless
'use strict';

import React from 'react';
import util from 'misc/util';

const ItemsList = React.createClass({
  propTypes: {
    items: React.PropTypes.arrayOf(React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
    }).isRequired).isRequired,
    itemsMapper: React.PropTypes.func.isRequired,
    displayMapper: React.PropTypes.func.isRequired,
  },

  getDefaultProps: function() {
    return {
      items: [],
      itemsMapper: x => x,
      displayMapper: x => x,
    };
  },

  render: function() {
    var self = this; 
    var items = this.props.items
      .sort(util.asc)
      .map(function(item) {
      return <li key={item.id}>
        {self.props.displayMapper(self.props.itemsMapper(item))}
      </li>
    });

    return (
      <ul>
        {items}
      </ul>
    );
  },
});

export default ItemsList;