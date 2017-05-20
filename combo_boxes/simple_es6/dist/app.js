define(['react', 'react-dom', 'shell'], function (_react, _reactDom, _shell) {
  'use strict';

  var _react2 = _interopRequireDefault(_react);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _shell2 = _interopRequireDefault(_shell);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _reactDom2.default.render(_react2.default.createElement(_shell2.default, null), document.getElementById('container'));
});