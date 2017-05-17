import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div><h1>Outside</h1>
        <ul>
          <li><Link to="/">Homepage</Link></li>
        </ul>
      </div>
    );
  }
})
