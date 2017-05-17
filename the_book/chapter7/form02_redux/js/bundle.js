var initialState = {};

const ActionTypes = {
  CHANGE_RADIO: 'CHANGE_RADIO',
  CHANGE_CHECKBOX: 'CHANGE_CHECKBOX',
  CHANGE_SELECT: 'CHANGE_SELECT'
};

const ActionCreators = {};
let Checkbox02 = class Checkbox02 extends React.Component {
  render() {
    return React.createElement(
      "label",
      null,
      React.createElement("input", {
        type: "checkbox",
        name: this.props.name,
        value: this.props.value,
        checked: this.props.checked,
        onChange: this.props.handler }),
      this.props.value
    );
  }
};
let Radio02 = class Radio02 extends React.Component {
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
let Form03 = class Form03 extends React.Component {
  constructor(params) {
    super(params);
    this.state = {
      frameworks: {
        angular: false,
        react: true,
        muziettos: false
      },
      foods: {
        pizza: false,
        spaghetti: true,
        steak: false,
        cauliflower: false
      },
      selectedLanguage: 'ruby'
    };
  }
  handleRadio(event) {
    var newStateMember = {};
    newStateMember[event.target.value] = true;
    this.setState({ frameworks: newStateMember });
  }
  handleCheckbox(event) {
    var newStateMember = Object.assign({}, this.state.foods);
    newStateMember[event.target.value] = event.target.checked;
    this.setState({ foods: newStateMember });
  }
  handleSelect(event) {
    this.setState({ selectedLanguage: event.target.value });
  }
  render() {
    return React.createElement(
      "form",
      null,
      React.createElement(Radio02, { handler: this.handleRadio.bind(this), name: "frameworks", value: "angular", checked: this.state.frameworks.angular }),
      React.createElement(Radio02, { handler: this.handleRadio.bind(this), name: "frameworks", value: "react", checked: this.state.frameworks.react }),
      React.createElement(Radio02, { handler: this.handleRadio.bind(this), name: "frameworks", value: "muziettos", checked: this.state.frameworks.muziettos }),
      React.createElement("br", null),
      React.createElement(Checkbox02, { handler: this.handleCheckbox.bind(this), name: "foods", value: "pizza", checked: this.state.foods['pizza'] }),
      React.createElement(Checkbox02, { handler: this.handleCheckbox.bind(this), name: "foods", value: "spaghetti", checked: this.state.foods['spaghetti'] }),
      React.createElement(Checkbox02, { handler: this.handleCheckbox.bind(this), name: "foods", value: "steak", checked: this.state.foods['steak'] }),
      React.createElement(Checkbox02, { handler: this.handleCheckbox.bind(this), name: "foods", value: "cauliflower", checked: this.state.foods['cauliflower'] }),
      React.createElement("br", null),
      React.createElement(
        "select",
        { name: "language", value: this.state.selectedValue,
          onChange: this.handleSelect.bind(this) },
        React.createElement(
          "option",
          { value: "ruby" },
          "Ruby"
        ),
        React.createElement(
          "option",
          { value: "node" },
          "Node.js"
        ),
        React.createElement(
          "option",
          { value: "java" },
          "Java"
        ),
        React.createElement(
          "option",
          { value: "python" },
          "Python"
        )
      ),
      React.createElement("br", null),
      React.createElement("textarea", { name: "de_staat",
        readOnly: "true",
        style: { width: '400px', height: '220px' },
        value: JSON.stringify(this.state, null, 2) })
    );
  }
};

var store = Redux.createStore();

ReactDOM.render(React.createElement(Form02, null), document.getElementById('content'));
