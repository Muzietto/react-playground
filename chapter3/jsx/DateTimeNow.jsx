const React = require('react');

class DateTimeNow extends React.Component {
  render() {
    let dateTimeNow = new Date().toLocaleString()
    return <span>Current date and time for {this.props.userName} is {dateTimeNow}.</span>
  }
}

module.exports = DateTimeNow;