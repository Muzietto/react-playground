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

  var Radio02 = function Radio02(props) {
    return _react2.default.createElement(
      'label',
      null,
      _react2.default.createElement('input', {
        type: 'radio',
        name: props.name,
        value: props.value,
        checked: props.checked,
        onChange: props.handler }),
      props.value
    );
  };

  exports.default = Radio02;
});