// completely stateless
'use strict';

import React from 'react';

class User extends React.Component {
  render() {
    return <div id="kvPairDiv{this.props.data.id}">
      <span className="separated-span">{this.props.data.id}</span>
      <span className="separated-span">{this.props.data.name}</span>
      <a onClick={this.props.callbacks.delete}>REMOVE</a>
    </div>
  }
}

export default User;