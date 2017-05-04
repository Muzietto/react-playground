const React = require('react');
const DateTimeNow = require('./DateTimeNow.jsx');

let helloWorldReactElement = <h1>Hello world!</h1>;

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        {helloWorldReactElement}
        <h1>1. Hello world!</h1>
        <h1>2. Hello world {this.props.avverbio}!</h1>
        <DateTimeNow userName="Gianfilippo"/>
      </div>
    );
  }
}
module.exports = HelloWorld;