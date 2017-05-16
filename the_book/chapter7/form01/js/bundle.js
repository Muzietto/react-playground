let Form01 = class Form01 extends React.Component {
  constructor(params) {
    super(params);
    this.state = {
      input01: { value: 'i1' },
      input02: { value: 'i2' }
    };
  }
  handleChange(event) {
    var newState = JSON.parse(JSON.stringify(this.state));
    newState[event.target.name].value = event.target.value;
    this.setState(newState);
  }
  render() {
    return React.createElement(
      'form',
      null,
      React.createElement(StatelessInput, {
        type: 'text',
        name: 'input01',
        value: this.state.input01.value,
        onChange: this.handleChange.bind(this) }),
      React.createElement(StatelessInput, {
        type: 'text',
        name: 'input02',
        value: this.state.input02.value,
        onChange: this.handleChange.bind(this) })
    );
  }
};
let StatelessInput = class StatelessInput extends React.Component {
  render() {
    return React.createElement("input", this.props);
  }
};

ReactDOM.render(React.createElement(Form01, null), document.getElementById('content'));
