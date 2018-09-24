import React from 'react';
import history from './history';

class App extends React.Component {
  transition = event => {
    event.preventDefault();
    history.push({
      pathname: event.currentTarget.pathname,
      search: event.currentTarget.search
    });
  };
  render() {
    return (
      <ul>
        <li><a href="/" onClick={this.transition}>Home</a></li>
        <li><a href="/one" onClick={this.transition}>One</a></li>
        <li><a href="/two" onClick={this.transition}>Two</a></li>
      </ul>
    );
  }
}
