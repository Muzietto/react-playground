// completely stateless
'use strict';

import React from 'react';
import util from 'util';

const KvPairsList = React.createClass({
  propTypes: {
    kvPairs: React.PropTypes.arrayOf(React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
    }).isRequired).isRequired,
    mapper: React.PropTypes.func.isRequired
  },
  render: function() {
    var self = this; 
    var items = this.props.kvPairs.sort(util.asc).map(function(item) {
      return <li key={item.id}>
        {self.props.mapper(item)}
      </li>
    });

    return (
      <ul>
        {items}
      </ul>
    );
  },
});

export default KvPairsList;