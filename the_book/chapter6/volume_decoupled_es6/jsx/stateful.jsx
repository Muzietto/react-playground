'use strict';

import React from 'react';
import StatelessButton from './stateless';

class StatefulParent extends React.Component {
  constructor(params) {
    super(params);
    this.state = {volume:0};
  }
  render() {
    return <StatelessButton
      clicker={(event => {
        this.setState({volume:++this.state.volume});
      }).bind(this)}
      labella={'Increase Volume (currently ' + this.state.volume + ')'}
      />
  }
}

export default StatefulParent;