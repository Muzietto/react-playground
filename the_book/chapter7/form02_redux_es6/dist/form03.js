define(['exports', 'react', './radio02', './checkbox02', './actions', './initStore'], function (exports, _react, _radio, _checkbox, _actions, _initStore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _radio2 = _interopRequireDefault(_radio);

  var _checkbox2 = _interopRequireDefault(_checkbox);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var Form03 = function (_React$Component) {
    _inherits(Form03, _React$Component);

    function Form03() {
      _classCallCheck(this, Form03);

      return _possibleConstructorReturn(this, (Form03.__proto__ || Object.getPrototypeOf(Form03)).apply(this, arguments));
    }

    _createClass(Form03, [{
      key: 'handleRadio',
      value: function handleRadio(event) {
        _initStore.store.dispatch(_actions.ActionCreators.changedRadio(event));
      }
    }, {
      key: 'handleCheckbox',
      value: function handleCheckbox(event) {
        _initStore.store.dispatch(_actions.ActionCreators.changedCheckbox(event));
      }
    }, {
      key: 'handleSelect',
      value: function handleSelect(event) {
        _initStore.store.dispatch(_actions.ActionCreators.changedSelect(event));
      }
    }, {
      key: 'render',
      value: function render() {
        var state = _initStore.store.getState();
        return _react2.default.createElement(
          'form',
          null,
          _react2.default.createElement(_radio2.default, { handler: this.handleRadio.bind(this), name: 'frameworks', value: 'angular', checked: state.frameworks.angular }),
          _react2.default.createElement(_radio2.default, { handler: this.handleRadio.bind(this), name: 'frameworks', value: 'react', checked: state.frameworks.react }),
          _react2.default.createElement(_radio2.default, { handler: this.handleRadio.bind(this), name: 'frameworks', value: 'muziettos', checked: state.frameworks.muziettos }),
          _react2.default.createElement('br', null),
          _react2.default.createElement(_checkbox2.default, { handler: this.handleCheckbox.bind(this), name: 'foods', value: 'pizza', checked: state.foods['pizza'] }),
          _react2.default.createElement(_checkbox2.default, { handler: this.handleCheckbox.bind(this), name: 'foods', value: 'spaghetti', checked: state.foods['spaghetti'] }),
          _react2.default.createElement(_checkbox2.default, { handler: this.handleCheckbox.bind(this), name: 'foods', value: 'steak', checked: state.foods['steak'] }),
          _react2.default.createElement(_checkbox2.default, { handler: this.handleCheckbox.bind(this), name: 'foods', value: 'cauliflower', checked: state.foods['cauliflower'] }),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'select',
            { name: 'language', value: state.selectedValue,
              onChange: this.handleSelect.bind(this) },
            _react2.default.createElement(
              'option',
              { value: 'ruby' },
              'Ruby'
            ),
            _react2.default.createElement(
              'option',
              { value: 'node' },
              'Node.js'
            ),
            _react2.default.createElement(
              'option',
              { value: 'java' },
              'Java'
            ),
            _react2.default.createElement(
              'option',
              { value: 'python' },
              'Python'
            )
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement('textarea', { name: 'de_staat',
            readOnly: 'true',
            style: { width: '400px', height: '220px' },
            value: JSON.stringify(state, null, 2) })
        );
      }
    }]);

    return Form03;
  }(_react2.default.Component);

  exports.default = Form03;
});