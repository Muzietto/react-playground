const React = require('react');

class DateTimeNow extends React.Component {
  render() {
    let dateTimeNow = new Date().toLocaleString()
    let asdf = () => {
      return ['btn', this.props.size].join(' ')
    } // this one compiles
    return <div>{
      function(uname) { // this one cannot become an arrow function
        return (uname)
          ?  <span>Current date and time for {uname} is {dateTimeNow}.</span>
          :  <h1>Current date and time for ANONIMO is {dateTimeNow}.{asdf()}</h1>
      }(this.props.userName)
    }</div>
  }
}

module.exports = DateTimeNow;