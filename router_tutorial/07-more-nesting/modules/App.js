import React from 'react';
import NavLink from './NavLink';
import Home1 from './Home1';

/* Home1 actually never gets rendered, because the IndexRoute inside index.js
   gives App a default Home2 child when no other ones are matched by the URL
*/
export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
        </ul>
        {this.props.children || <Home1 birillo="prillo"/>}
      </div>
    );
  }
});
