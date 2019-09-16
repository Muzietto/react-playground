import React from 'react';
import ReactDOM from 'react-dom';
import Suspans from '@src/Suspans';
import MyComponent from '@src/MyComponent';
import { setStorage } from '@src/lib/storage';

setStorage(window.localStorage);

ReactDOM.render(<App />, document.getElementById('root'));

function App() {
  return <div>
    <Suspans fallback={() => <h1>NO DATA YET SUSPANS</h1>}>
      <MyComponent setNumber='1'/>
    </Suspans>
  </div>;
}
