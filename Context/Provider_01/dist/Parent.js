define(['exports', 'react', './Child'], function (exports, _react, _Child) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _Child2 = _interopRequireDefault(_Child);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  let Parent = class Parent extends _react2.default.Component {
    render() {
      return _react2.default.createElement(_Child2.default, null);
    }
  };
  exports.default = Parent;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9QYXJlbnQuanMiXSwibmFtZXMiOlsiUGFyZW50IiwiQ29tcG9uZW50IiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztNQUdNQSxNLEdBQU4sTUFBTUEsTUFBTixTQUFxQixnQkFBTUMsU0FBM0IsQ0FBcUM7QUFDbkNDLGFBQVM7QUFDUCxhQUNJLG9EQURKO0FBR0Q7QUFMa0MsRztvQkFRdEJGLE0iLCJmaWxlIjoiUGFyZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDaGlsZCBmcm9tICcuL0NoaWxkJztcblxuY2xhc3MgUGFyZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxDaGlsZCAvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFyZW50O1xuIl19