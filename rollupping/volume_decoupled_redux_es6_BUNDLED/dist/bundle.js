'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var startCounterValue = 0;

var ActionTypes = {
  INCREASE_COUNTER: 'INCREASE_COUNTER',
  DECREASE_COUNTER: 'DECREASE_COUNTER'
};

var increasedCounter = function increasedCounter(value) {
  return {
    type: ActionTypes.INCREASE_COUNTER,
    newValue: ++value
  };
};

var decreasedCounter = function decreasedCounter(value) {
  return {
    type: ActionTypes.DECREASE_COUNTER,
    newValue: --value
  };
};

var ActionCreators = {
  increasedCounter: increasedCounter,
  decreasedCounter: decreasedCounter
};

exports.startCounterValue = startCounterValue;
exports.ActionTypes = ActionTypes;
exports.ActionCreators = ActionCreators;
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// only webpack understands requires
//const ReactDOM = require('react-dom');
//const StatefulParent = require('./StatefulParent.jsx');

var render = function render() {
  return _reactDom2.default.render(_react2.default.createElement(StatefulParent, null), document.getElementById('content'));
};

render();
store.subscribe(render);
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = undefined;

var _redux = require('redux');

var _actions = require('./actions');

var store = (0, _redux.createStore)(statefulReducer);

function statefulReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _actions.startCounterValue;
  var action = arguments[1];

  switch (action.type) {
    case _actions.ActionTypes.INCREASE_COUNTER:
    case _actions.ActionTypes.DECREASE_COUNTER:
      return action.newValue;
    default:
      return state;
  }
}

exports.store = store;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _stateless = require('./stateless');

var _stateless2 = _interopRequireDefault(_stateless);

var _actions = require('./actions');

var _initStore = require('./initStore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StatefulParent = function (_React$Component) {
  _inherits(StatefulParent, _React$Component);

  function StatefulParent() {
    _classCallCheck(this, StatefulParent);

    return _possibleConstructorReturn(this, (StatefulParent.__proto__ || Object.getPrototypeOf(StatefulParent)).apply(this, arguments));
  }

  _createClass(StatefulParent, [{
    key: 'render',

    // redux takes care of state
    //  constructor(params) {
    //    super(params);
    //    this.state = {volume:0};
    //  }
    value: function render() {
      var currentCounter = _initStore.store.getState();
      return _react2.default.createElement(
        'div',
        { className: 'stateful stateful--padding stateful--shadow' },
        _react2.default.createElement(_stateless2.default, {
          className: 'stateful__item stateful__item--increase-volume',
          clicker: dispatcher(_actions.ActionCreators.increasedCounter),
          labella: 'Increase Volume'
        }),
        _react2.default.createElement(
          'label',
          { className: 'label' },
          '(currently ' + currentCounter + ')'
        ),
        _react2.default.createElement(_stateless2.default, {
          className: 'stateful__item stateful__item--decrease-volume',
          clicker: dispatcher(_actions.ActionCreators.decreasedCounter),
          labella: 'Decrease Volume'
        })
      );
    }
  }]);

  return StatefulParent;
}(_react2.default.Component);

function dispatcher(creator) {
  return function () {
    return _initStore.store.dispatch(creator(_initStore.store.getState()));
  };
}

exports.default = StatefulParent;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StatelessButton = function (_React$Component) {
  _inherits(StatelessButton, _React$Component);

  function StatelessButton() {
    _classCallCheck(this, StatelessButton);

    return _possibleConstructorReturn(this, (StatelessButton.__proto__ || Object.getPrototypeOf(StatelessButton)).apply(this, arguments));
  }

  _createClass(StatelessButton, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'button',
        {
          className: "button stateless " + this.props.className,
          onClick: this.props.clicker },
        this.props.labella
      );
    }
  }]);

  return StatelessButton;
}(_react2.default.Component);

exports.default = StatelessButton;
