import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router 04</h1>
        <ul role="nav">
          <li><Link to="/about" activeStyle={{color:'red'}}>About</Link></li>
          <li><Link to="/repos" activeClassName="active">Repos</Link></li>
          <li><Link to="/outsidez" activeClassName="active">Outside</Link></li>
        </ul>
        {/* children of the ROUTE!!! */}
        { this.props.children }
      </div>
    )
  }
})
