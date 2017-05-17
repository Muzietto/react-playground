import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return <div><h2>Repos</h2>
        <ul>
          <li><Link to="/">Homepage</Link></li>
        </ul>    
    </div>
  }
})
