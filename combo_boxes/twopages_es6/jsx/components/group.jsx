// completely stateless
'use strict';

import React from 'react';

class Group extends React.Component {
  render() {
    return <span id={'groupDiv' + this.props.data.id}>
      <span className="separated-span">Details group</span>
      <span className="separated-span">{this.props.data.id}</span>
      <span className="separated-span">{this.props.data.name}</span>
    </span>
  }
}

export default Group;