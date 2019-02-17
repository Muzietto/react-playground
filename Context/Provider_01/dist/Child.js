define(['exports', 'react', './DeviceAware'], function (exports, _react, _DeviceAware) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _DeviceAware2 = _interopRequireDefault(_DeviceAware);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const Child = ({ device }) => _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(
      'div',
      null,
      `Provider says: ${device}`
    ),
    _react2.default.createElement(
      'div',
      null,
      'Resize the window to see the other values'
    )
  );

  exports.default = (0, _DeviceAware2.default)(Child);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9DaGlsZC5qcyJdLCJuYW1lcyI6WyJDaGlsZCIsImRldmljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSxRQUFNQSxRQUFRLENBQUMsRUFBRUMsTUFBRixFQUFELEtBQWdCO0FBQUEsb0JBQU8sUUFBUDtBQUFBO0FBQzVCO0FBQUE7QUFBQTtBQUFPLHdCQUFpQkEsTUFBTztBQUEvQixLQUQ0QjtBQUU1QjtBQUFBO0FBQUE7QUFBTTtBQUFOO0FBRjRCLEdBQTlCOztvQkFLZSwyQkFBWUQsS0FBWixDIiwiZmlsZSI6IkNoaWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEZXZpY2VBd2FyZSBmcm9tICcuL0RldmljZUF3YXJlJztcblxuY29uc3QgQ2hpbGQgPSAoeyBkZXZpY2UgfSkgPT4gPFJlYWN0LkZyYWdtZW50PlxuICA8ZGl2PntgUHJvdmlkZXIgc2F5czogJHtkZXZpY2V9YH08L2Rpdj5cbiAgPGRpdj57J1Jlc2l6ZSB0aGUgd2luZG93IHRvIHNlZSB0aGUgb3RoZXIgdmFsdWVzJ308L2Rpdj5cbjwvUmVhY3QuRnJhZ21lbnQ+O1xuXG5leHBvcnQgZGVmYXVsdCBEZXZpY2VBd2FyZShDaGlsZCk7XG4iXX0=