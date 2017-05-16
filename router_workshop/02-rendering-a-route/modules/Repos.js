import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>Repos</h1>
        <ul>
          <li><Link to="/">Homepage</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    );
  }
})
