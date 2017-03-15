const React = require('react');

module.exports = class Router extends React.Component {
  constructor(props) { // in app.jsx we see that props is {mapping}
    super(props);
    this.state = {hash: window.location.hash}; // this.state is a reserved name
    this.updateHash = this.updateHash.bind(this);
  }
  render() {
    if (this.props.mapping[this.state.hash]) {
      return this.props.mapping[this.state.hash];
    }
    return this.props.mapping['*'];
  }
  updateHash(event) {
    this.setState({hash: window.location.hash}); // setState will always trigger a re-render, unless conditional rendering logic is implemented in shouldComponentUpdate
  }
  componentDidMount() { // invoked immediately after this.render
    window.addEventListener('hashchange', this.updateHash, false);
  }
  componentWillUnmount() {
    window.removeEventListener('hashchange', this.updateHash, false);
  }
}