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

  var Checkbox02 = function Checkbox02(props) {
    return _react2.default.createElement(
      'label',
      null,
      _react2.default.createElement('input', {
        type: 'checkbox',
        name: props.name,
        value: props.value,
        checked: props.checked,
        onChange: props.handler }),
      props.value
    );
  };

  exports.default = Checkbox02;
});