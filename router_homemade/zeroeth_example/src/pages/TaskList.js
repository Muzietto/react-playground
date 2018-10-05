import React from 'react';
import Link from '../Link';

export default ({ children }) => (
  <div className='page'>
    <h1>TaskList</h1>
    <Link href='/task/1'>Task Uno</Link>
    <Link href='/task/2'>Task Duecento</Link>
    <Link href='/'>back Home</Link>
    <Link href='/undefined'>cause Error</Link>
  </div>
);
