'use strict';
import React from 'react';

class Radio02 extends React.Component {
  render() {
    return <label><input 
      type="radio" 
      name={this.props.name}
      value={this.props.value}
      checked={this.props.checked}
      onChange={this.props.handler}/>{this.props.value}</label>
  }
}

export default Radio02;