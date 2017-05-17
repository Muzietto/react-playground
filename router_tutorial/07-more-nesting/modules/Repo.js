import React from 'react';

export default React.createClass({
  render() {
    return (
      <div>
        <h6>here under comes the repo name</h6>
        <h4>{this.props.params.repoName}</h4>
        <h6>here under comes the user name</h6>
        <h4>{this.props.params.userName}</h4>
      </div>
    );
  }
});