import React from 'react';
import Link from '../Link';

export default ({ id, children }) => (
    <div className='container'>
      <h1>Task Numero {id}</h1>
      {children}
      <br/>
      <Link href='/task'>Task List</Link>
      <Link href='/'>back Home</Link>
    </div>
);
