// only webpack understands requires
//const React = require('react');

class TheClock extends React.Component {
  render() {
    var currentTime = store.getState();
    return <div>
      <div>{currentTime}</div>
      <AnalogDisplay time={currentTime}/>
      <DigitalDisplay time={currentTime}/>
    </div>
  }
}

// only webpack understands exports
//module.exports = TheClock;