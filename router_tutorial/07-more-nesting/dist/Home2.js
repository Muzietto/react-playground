define(['exports', 'react'], function (exports, _react) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = _react2.default.createClass({
    displayName: 'Home2',
    render: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          'Home2'
        ),
        _react2.default.createElement(
          'h6',
          null,
          'here under comes the value of birillo'
        ),
        _react2.default.createElement(
          'h4',
          null,
          this.props.birillo
        )
      );
    }
  });
});