'use strict';

var initialState = {};

var ActionTypes = {
  CHANGE_RADIO: 'CHANGE_RADIO',
  CHANGE_CHECKBOX: 'CHANGE_CHECKBOX',
  CHANGE_SELECT: 'CHANGE_SELECT'
};

var ActionCreators = {};
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Checkbox02 = function (_React$Component) {
  _inherits(Checkbox02, _React$Component);

  function Checkbox02() {
    _classCallCheck(this, Checkbox02);

    return _possibleConstructorReturn(this, (Checkbox02.__proto__ || Object.getPrototypeOf(Checkbox02)).apply(this, arguments));
  }

  _createClass(Checkbox02, [{
    key: "render",
    value: function render() {
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
  }]);

  return Checkbox02;
}(React.Component);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Radio02 = function (_React$Component) {
  _inherits(Radio02, _React$Component);

  function Radio02() {
    _classCallCheck(this, Radio02);

    return _possibleConstructorReturn(this, (Radio02.__proto__ || Object.getPrototypeOf(Radio02)).apply(this, arguments));
  }

  _createClass(Radio02, [{
    key: "render",
    value: function render() {
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
  }]);

  return Radio02;
}(React.Component);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form03 = function (_React$Component) {
  _inherits(Form03, _React$Component);

  function Form03(params) {
    _classCallCheck(this, Form03);

    var _this = _possibleConstructorReturn(this, (Form03.__proto__ || Object.getPrototypeOf(Form03)).call(this, params));

    _this.state = {
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
    return _this;
  }

  _createClass(Form03, [{
    key: "handleRadio",
    value: function handleRadio(event) {
      var newStateMember = {};
      newStateMember[event.target.value] = true;
      this.setState({ frameworks: newStateMember });
    }
  }, {
    key: "handleCheckbox",
    value: function handleCheckbox(event) {
      var newStateMember = Object.assign({}, this.state.foods);
      newStateMember[event.target.value] = event.target.checked;
      this.setState({ foods: newStateMember });
    }
  }, {
    key: "handleSelect",
    value: function handleSelect(event) {
      this.setState({ selectedLanguage: event.target.value });
    }
  }, {
    key: "render",
    value: function render() {
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
  }]);

  return Form03;
}(React.Component);
'use strict';

var store = Redux.createStore(statefulReducer);

ReactDOM.render(React.createElement(Form03, null), document.getElementById('content'));

function statefulReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case ActionTypes.INCREASE_COUNTER:
    case ActionTypes.DECREASE_COUNTER:
      return action.newValue;
    default:
      return state;
  }
}
