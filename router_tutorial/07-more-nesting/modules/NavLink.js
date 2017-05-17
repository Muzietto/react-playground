// modules/NavLink.js
import React from 'react'
import { Link } from 'react-router'

/* <RouteHandler {...this.state} /> is equivalent to 
   React.createElement(RouteHandler, Object.assign({}, this.state))
   http://stackoverflow.com/questions/29876665/ecma6-spread-parameters-in-react-router
*/
export default React.createClass({
  render() {
      return <Link {...this.props} activeClassName="active"/>
  }
})
