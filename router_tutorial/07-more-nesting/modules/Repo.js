import React from 'react';

export default React.createClass({
  render() {
    return (
      <div>
      <h3>link of Repos remains active because Repo is nested in Repos and Repos is nested in /</h3>
        <h6>here under comes the repo name</h6>
        <h4>{this.props.params.repoName}</h4>
        <h6>here under comes the user name</h6>
        <h4>{this.props.params.userName}</h4>
      </div>
    );
  }
});