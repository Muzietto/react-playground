let Radio02 = class Radio02 extends React.Component {
  constructor(params) {
    super(params);
    this.state = { title: 'Misster' };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  render() {
    return React.createElement(
      "label",
      null,
      React.createElement("input", {
        type: "radio",
        name: this.props.name,
        value: this.props.value,
        checked: this.props.checked,
        onChange: this.props.handler }),
      this.props.value
    );
  }
};
let Form02 = class Form02 extends React.Component {
  constructor(params) {
    super(params);
    this.state = {
      frameworks: {
        angular: false,
        react: true,
        muziettos: false
      }
    };
  }
  handleRadio(event) {
    var newStateMember = {};
    newStateMember[event.target.value] = true;
    this.setState({ frameworks: newStateMember });
  }
  render() {
    return React.createElement(
      "form",
      null,
      React.createElement(Radio02, { handler: this.handleRadio.bind(this), name: "frameworks", value: "angular", checked: this.state.frameworks.angular }),
      React.createElement(Radio02, { handler: this.handleRadio.bind(this), name: "frameworks", value: "react", checked: this.state.frameworks.react }),
      React.createElement(Radio02, { handler: this.handleRadio.bind(this), name: "frameworks", value: "muziettos", checked: this.state.frameworks.muziettos })
    );
  }
};

ReactDOM.render(React.createElement(Form02, null), document.getElementById('content'));
