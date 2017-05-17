import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router 04</h1>
        <ul role="nav">
          <li><NavLink to="/about" activeStyle={{color:'red'}}>About</NavLink></li>
          <li><NavLink to="/repos" activeClassName="active">Repos</NavLink></li>
          <li><NavLink to="/outsidez" activeClassName="active">Outside</NavLink></li>
        </ul>
        {/* children of the ROUTE!!! */}
        { this.props.children }
      </div>
    )
  }
})
