import React from 'react';

export default React.createClass({
  render() {
    return (
      <div>
        <h1>Home2</h1>
        <h6>here under comes the value of birillo</h6>
        <h4>{this.props.birillo}</h4>
      </div>
    );
  }
});