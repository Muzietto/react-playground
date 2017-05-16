// only webpack understands requires
//const React = require('react');

class TheClock extends React.Component {
  constructor(params) {
    super(params);
    intervalla(this);
    this.state = {currentTime: (new Date()).toString()};
    function intervalla(self) {
      setInterval(() => {self.setState({currentTime: (new Date()).toString()});}, 1000);
    }
  }
  render() {
    return <div>
      <div>{this.state.currentTime}</div>
      <AnalogDisplay time={this.state.currentTime}/>
      <DigitalDisplay time={this.state.currentTime}/>
    </div>
  }
}

// only webpack understands exports
//module.exports = TheClock;