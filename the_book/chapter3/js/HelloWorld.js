const React = require('react');
const DateTimeNow = require('./DateTimeNow.jsx');

let helloWorldReactElement = React.createElement(
  'h1',
  null,
  'Hello world!'
);

let HelloWorld = class HelloWorld extends React.Component {
  render() {
    return React.createElement(
      'div',
      null,
      helloWorldReactElement,
      React.createElement(
        'h1',
        null,
        '1. Hello world!'
      ),
      React.createElement(
        'h1',
        null,
        '2. Hello world ',
        this.props.avverbio,
        '!'
      ),
      React.createElement(DateTimeNow, { userName: 'Gianfilippo' })
    );
  }
};

module.exports = HelloWorld;
