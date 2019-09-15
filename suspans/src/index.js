import React from 'react';
import ReactDOM from 'react-dom';
import Suspans from '@src/Suspans';
import Child from '@src/Child';

export default function App() {
  return <div>
    <Suspans placeholder={() => <h1>NO DATA YET</h1>}>
      <PromiseThrower/>
    </Suspans>
  </div>;
}

ReactDOM.render(<App />, document.getElementById('root'));
