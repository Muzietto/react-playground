let startCounterValue = 0;

const ActionTypes = {
  INCREASE_COUNTER: 'INCREASE_COUNTER',
  DECREASE_COUNTER: 'DECREASE_COUNTER'
};

let increasedCounter = value => {
  return {
    type: ActionTypes.INCREASE_COUNTER,
    newValue: ++value
  };
};

let decreasedCounter = value => {
  return {
    type: ActionTypes.DECREASE_COUNTER,
    newValue: --value
  };
};

const ActionCreators = {
  increasedCounter: increasedCounter,
  decreasedCounter: decreasedCounter
};
let StatefulParent = class StatefulParent extends React.Component {
  // redux takes care of state
  //  constructor(params) {
  //    super(params);
  //    this.state = {volume:0};
  //  }
  increaseCounter() {
    store.dispatch(ActionCreators.increasedCounter(store.getState()));
  }
  decreaseCounter() {
    store.dispatch(ActionCreators.decreasedCounter(store.getState()));
  }
  render() {
    var currentCounter = store.getState();
    return React.createElement(
      'div',
      null,
      React.createElement(StatelessButton, {
        clicker: this.increaseCounter.bind(this),
        labella: 'Increase Volume'
      }),
      React.createElement(
        'label',
        null,
        '(currently ' + currentCounter + ')'
      ),
      React.createElement(StatelessButton, {
        clicker: this.decreaseCounter.bind(this),
        labella: 'Decrease Volume'
      })
    );
  }
};
let StatelessButton = class StatelessButton extends React.Component {
  render() {
    return React.createElement(
      "button",
      { onClick: this.props.clicker },
      this.props.labella
    );
  }
};
// only webpack understands requires
//const ReactDOM = require('react-dom');
//const StatefulParent = require('./StatefulParent.jsx');

var store = Redux.createStore(stateful);

const render = () => ReactDOM.render(React.createElement(StatefulParent, null), document.getElementById('content'));

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
