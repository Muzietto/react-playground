import React from 'react';
import ReactDOM from 'react-dom';
import Maybe from 'folktale/maybe';
import compose from 'folktale/core/lambda/compose';

ReactDOM.render(<App />, document.getElementById('root'));

function App() {

  const inc = x => x + 1;
  const double = x => x * 2;

  const theMaybe = Maybe.Just(1).map(compose(double, inc));

  const n = 5;
  const result = n
    |> double
    |> double
    |> (x => { console.log(x); return x + 1; })
    |> double;

  return <div>
    {`theMaybe=${theMaybe}`}
    <hr />
    {`result=${result}`}
  </div>;
}
