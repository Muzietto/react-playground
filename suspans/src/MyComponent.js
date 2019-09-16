import React from 'react';
import { useFetch } from '@src/lib/fetcher';

export default MyComponent;

function MyComponent() {

  // "Look! In the example! It's a fetch() request! It's a hook!"
  //   "No! It's kind of like both at the same time."
  const serverResponse = useFetch('/api/json1');

  // The return value is the body of the server's response.
  return <div>{serverResponse}</div>;
}
