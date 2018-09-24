import React from 'react';
import history from './history';
import { hot } from 'react-hot-loader'

class App extends React.Component {
  transition = event => {
    event.preventDefault();
    history.push({
      pathname: event.currentTarget.pathname, // path
      search: event.currentTarget.search // querystring
    });
  };
  render() {
    return (
      <ul>
        <li><a href="/" onClick={this.transition}>Home</a></li>
        <li><a href="/one" onClick={this.transition}>One</a></li>
        <li><a href="/two" onClick={this.transition}>Two</a></li>
        <li><a href="/two?q=12" onClick={this.transition}>Two q=12</a></li>
      </ul>
    );
  }
}

export default hot(module)(App);
