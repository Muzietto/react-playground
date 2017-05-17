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
    displayName: 'About',
    render: function render() {
      return _react2.default.createElement(
        'div',
        null,
        'About'
      );
    }
  });
});