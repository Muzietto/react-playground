const React = require('react');

let helloWorldReactElement = <h1>Hello world!</h1>;

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        {helloWorldReactElement}
        <h1>1. Hello world!</h1>
        <h1>2. Hello world!</h1>
      </div>
    );
  }
}
module.exports = HelloWorld;