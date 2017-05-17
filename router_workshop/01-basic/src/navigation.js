import React from "react";
import { Link } from 'react-router-dom';

var Navigation = () => {
  return <div>
    <h6>navigation.jsx</h6>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/about2">About2</Link></li>
      <li><Link to="/missing">Missing</Link></li>
    </ul>
  </div>
}

export default Navigation;