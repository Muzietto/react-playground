define(['exports', 'react', './stateless'], function (exports, _react, _stateless) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _stateless2 = _interopRequireDefault(_stateless);

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

  var StatefulParent = function (_React$Component) {
    _inherits(StatefulParent, _React$Component);

    function StatefulParent(params) {
      _classCallCheck(this, StatefulParent);

      var _this = _possibleConstructorReturn(this, (StatefulParent.__proto__ || Object.getPrototypeOf(StatefulParent)).call(this, params));

      _this.state = { volume: 0 };
      return _this;
    }

    _createClass(StatefulParent, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        return _react2.default.createElement(_stateless2.default, {
          clicker: function (event) {
            _this2.setState({ volume: ++_this2.state.volume });
          }.bind(this),
          labella: 'Increase Volume (currently ' + this.state.volume + ')'
        });
      }
    }]);

    return StatefulParent;
  }(_react2.default.Component);

  exports.default = StatefulParent;
});