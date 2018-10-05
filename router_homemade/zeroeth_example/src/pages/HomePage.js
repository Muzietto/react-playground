import React from 'react';
import Link from '../Link';

export default ({ children }) => (
  <div className='page'>
    <h1>HomePage</h1>
    {children}
    <br/>
    <Link href='/task'>Task List</Link>
  </div>
);
