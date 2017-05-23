// completely stateless
'use strict';

import React from 'react';
import util from 'misc/util';

const ItemsList = React.createClass({
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
      .map(self.props.itemsMapper)
      .map(function(item) {
      return <li key={item.id}>
        {self.props.displayMapper(item)}
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