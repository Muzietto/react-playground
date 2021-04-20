import Maybe from 'folktale/maybe';
import compose from 'folktale/core/lambda/compose';

const inc = x => x + 1;
const double = x => x * 2;

console.log(Maybe.Just(1).map(compose(double, inc)));

const n = 5;
const result = n
  |> double
  |> double
  |> (x => { console.log(x); return x + 1; })
  |> double;
console.log(result);
