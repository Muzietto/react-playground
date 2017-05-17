import React from 'react';
import Repos from './Repos';

export default React.createClass({
  render() {
    return (
      <div>
      {/* fucker paints like Repo was nested inside Repos (which is NOT!!!)*/}
        <Repos/>
        <h6>here under comes the repo name</h6>
        <h4>{this.props.params.repoName}</h4>
        <h6>here under comes the user name</h6>
        <h4>{this.props.params.userName}</h4>
      </div>
    );
  }
});
