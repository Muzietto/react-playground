'use strict';
import React from 'react';

class StatelessButton extends React.Component {
  render() {
    return <button className={"button stateless " + this.props.className} onClick={this.props.clicker}>
        {this.props.labella}
      </button>
  }
}

export default StatelessButton;
