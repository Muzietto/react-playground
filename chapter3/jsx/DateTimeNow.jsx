const React = require('react');

class DateTimeNow extends React.Component {
  render() {
    let dateTimeNow = new Date().toLocaleString()
    return <div>{
      function(uname) {
        return (uname)
          ?  <span>Current date and time for {uname} is {dateTimeNow}.</span>
          :  <h1>Current date and time for ANONIMO is {dateTimeNow}.</h1>
      }(this.props.userName)
    }</div>
  }
}

module.exports = DateTimeNow;