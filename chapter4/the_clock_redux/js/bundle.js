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
  constructor(params) {
    super(params);
    intervalla(this);
    this.state = { currentTime: new Date().toString() };
    function intervalla(self) {
      setInterval(() => {
        self.setState({ currentTime: new Date().toString() });
      }, 1000);
    }
  }
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        null,
        this.state.currentTime
      ),
      React.createElement(AnalogDisplay, { time: this.state.currentTime }),
      React.createElement(DigitalDisplay, { time: this.state.currentTime })
    );
  }
};

// only webpack understands exports
//module.exports = TheClock;
// only webpack understands requires
//const ReactDOM = require('react-dom');
//const TheClock = require('./TheClock.jsx');

ReactDOM.render(React.createElement(TheClock, null), document.getElementById('content'));
