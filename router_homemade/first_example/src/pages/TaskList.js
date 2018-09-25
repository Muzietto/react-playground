import React from 'react';
import Link from '../Link';

export default ({ children }) => (
  <div className='container'>
    <h1>TaskList</h1>
    <Link href='/task/1'>Task Uno</Link>
    <Link href='/task/2'>Task Due</Link>
    <Link href='/'>back Home</Link>
  </div>
);
