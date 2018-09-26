import React from 'react';
import Link from '../Link';

export default ({status}) => (
  <div className='container'>
    <h1>error <span>{status}</span></h1>
    <br/>
    <Link href='/'>Home</Link>
  </div>
);
