// only webpack understands requires
//const ReactDOM = require('react-dom');
//const TheClock = require('./TheClock.jsx');

function clock(state = startTimeString, action) {
  switch (action.type) {
    case ActionTypes.INCREASE_TIME:
      return action.newTime
    default:
      return state
  }
}

var store = Redux.createStore(clock);

const render = () => ReactDOM.render(
  <TheClock/>,
  document.getElementById('content')
);

render();
store.subscribe(render);
