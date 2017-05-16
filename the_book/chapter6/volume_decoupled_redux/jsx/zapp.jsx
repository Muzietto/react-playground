// only webpack understands requires
//const ReactDOM = require('react-dom');
//const StatefulParent = require('./StatefulParent.jsx');

var store = Redux.createStore(stateful);

const render = () => ReactDOM.render(
  <StatefulParent/>,
  document.getElementById('content')
);

render();
store.subscribe(render);

function stateful(state = startCounterValue, action) {
  switch (action.type) {
    case ActionTypes.INCREASE_COUNTER:
    case ActionTypes.DECREASE_COUNTER:
      return action.newValue;
    default:
      return state;
  }
}