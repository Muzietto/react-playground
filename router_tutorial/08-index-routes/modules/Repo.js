import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>repoName is {this.props.params.repoName}</h2>
      </div>
    )
  }
})
