// NB: only webpack understands requires,
// while here we'll be building with naked Babel

// these are all the ACTIONS

let startTimeString = new Date().toString(); // closing in...

// action types
const ActionTypes = {
  INCREASE_TIME: 'INCREASE_TIME'
};

// actually this fun is an ACTION CREATOR
let newTime = timeString => {
  return {
    type: ActionTypes.INCREASE_TIME,
    newTime: timeString
  };
};

const ActionCreators = {
  newTime: newTime
};

// start the clock here (here? someplace else?)
setInterval(function () {
  store.dispatch(ActionCreators.newTime(new Date().toString()));
}, 1000);
let AnalogDisplay = class AnalogDisplay extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      "ANALOG",
      this.props.time
    );
  }
};
let DigitalDisplay = class DigitalDisplay extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      "DIGITAL",
      this.props.time
    );
  }
};
// only webpack understands requires
//const React = require('react');

let TheClock = class TheClock extends React.Component {
  render() {
    var currentTime = store.getState();
    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        null,
        currentTime
      ),
      React.createElement(AnalogDisplay, { time: currentTime }),
      React.createElement(DigitalDisplay, { time: currentTime })
    );
  }
};

// only webpack understands exports
//module.exports = TheClock;
// only webpack understands requires
//const ReactDOM = require('react-dom');
//const TheClock = require('./TheClock.jsx');

function clock(state = startTimeString, action) {
  switch (action.type) {
    case ActionTypes.INCREASE_TIME:
      return action.newTime;
    default:
      return state;
  }
}

var store = Redux.createStore(clock);

const render = () => ReactDOM.render(React.createElement(TheClock, null), document.getElementById('content'));

render();
store.subscribe(render);
