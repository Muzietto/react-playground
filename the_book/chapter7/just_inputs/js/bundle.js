let Input01 = class Input01 extends React.Component {
  render() {
    return React.createElement("input", {
      type: "text",
      name: "input02",
      value: "Mr." });
  }
};
let Input02 = class Input02 extends React.Component {
  constructor(params) {
    super(params);
    this.state = { title: 'Misster' };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  render() {
    return React.createElement("input", {
      type: "text",
      name: "input02",
      value: this.state.title,
      onChange: this.handleChange.bind(this) });
  }
};


ReactDOM.render(React.createElement(
  "div",
  null,
  React.createElement(Input01, null),
  React.createElement(Input02, null)
), document.getElementById('content'));
