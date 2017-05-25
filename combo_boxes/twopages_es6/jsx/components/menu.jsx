import React from 'react';
import { Link } from 'react-router';

class Menu extends React.Component {
  static contextTypes = {
      router: React.PropTypes.object
  };
  render() {
    return (
    <div>
      <div className="menu-div">
        <ul className="nav nav-pills navbar-nav">
          <li className={(this.context.router.isActive('/users')) ? 'active' : ''}>
            <Link to="/users" activeClassName="active">
              Users
            </Link>
          </li>
          <li className={(this.context.router.isActive('/groups')) ? 'active' : ''}>
            <Link to="/groups" activeClassName="active">
              Groups
            </Link>
          </li>
          <li className={(this.context.router.isActive('/contact')) ? 'active' : ''}>
            <Link to="/memberships" activeClassName="active">
              Memberships
            </Link>
          </li>
        </ul>
      </div>
      {this.props.children}
    </div>
    );
  }
}

export { Menu };