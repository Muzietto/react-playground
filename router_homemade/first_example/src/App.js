import React from 'react';
import history from './history';
import { hot } from 'react-hot-loader';
import Link from './Link';

class App extends React.Component {
  render() {
    return (
      <ul>
        <li><Link href="/" >Home Sweet Home</Link></li>
        <li><Link href="/one">One Bone</Link></li>
        <li><Link href="/two">Two Pro</Link></li>
        <li><Link href="/two?q=12">Two q=12</Link></li>
      </ul>
    );
  }
}

export default hot(module)(App);
