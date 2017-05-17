import React from 'react';
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>Repos my way</h2>
        <ul>
          <li><Link to="/repos/reactjs/react-router">React Router</Link></li>
          <li><Link to="/repos/facebook/react">React</Link></li>
          <li><Link to="/repos/marie/maizd">MAIZD</Link></li>
        </ul>
      </div>
    )
  }
});
