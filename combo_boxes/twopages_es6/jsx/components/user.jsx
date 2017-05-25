// completely stateless
'use strict';

import React from 'react';

class User extends React.Component {
  render() {
    return <span id={'userDiv' + this.props.data.id}>
      <h3>Details user</h3>
      <span className="separated-span">{this.props.data.id}</span>
      <span className="separated-span">{this.props.data.name}</span>
    </span>
  }
}

export default User;