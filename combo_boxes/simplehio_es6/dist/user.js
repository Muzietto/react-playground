define(['exports', 'react'], function (exports, _react) {
  // completely stateless
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

  let User = class User extends _react2.default.Component {
    render() {
      return _react2.default.createElement(
        'span',
        { id: 'userDiv{this.props.data.id}' },
        _react2.default.createElement(
          'span',
          { className: 'separated-span' },
          this.props.data.id
        ),
        _react2.default.createElement(
          'span',
          { className: 'separated-span' },
          this.props.data.name
        )
      );
    }
  };
  exports.default = User;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC91c2VyLmpzeCJdLCJuYW1lcyI6WyJVc2VyIiwiQ29tcG9uZW50IiwicmVuZGVyIiwicHJvcHMiLCJkYXRhIiwiaWQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7TUFJTUEsSSxHQUFOLE1BQU1BLElBQU4sU0FBbUIsZ0JBQU1DLFNBQXpCLENBQW1DO0FBQ2pDQyxhQUFTO0FBQ1AsYUFBTztBQUFBO0FBQUEsVUFBTSxJQUFHLDZCQUFUO0FBQ0w7QUFBQTtBQUFBLFlBQU0sV0FBVSxnQkFBaEI7QUFBa0MsZUFBS0MsS0FBTCxDQUFXQyxJQUFYLENBQWdCQztBQUFsRCxTQURLO0FBRUw7QUFBQTtBQUFBLFlBQU0sV0FBVSxnQkFBaEI7QUFBa0MsZUFBS0YsS0FBTCxDQUFXQyxJQUFYLENBQWdCRTtBQUFsRDtBQUZLLE9BQVA7QUFJRDtBQU5nQyxHO29CQVNwQk4sSSIsImZpbGUiOiJ1c2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcGxldGVseSBzdGF0ZWxlc3NcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIFVzZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiA8c3BhbiBpZD1cInVzZXJEaXZ7dGhpcy5wcm9wcy5kYXRhLmlkfVwiPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZXBhcmF0ZWQtc3BhblwiPnt0aGlzLnByb3BzLmRhdGEuaWR9PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZXBhcmF0ZWQtc3BhblwiPnt0aGlzLnByb3BzLmRhdGEubmFtZX08L3NwYW4+XHJcbiAgICA8L3NwYW4+XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyOyJdfQ==