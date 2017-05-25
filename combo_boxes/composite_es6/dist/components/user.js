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
        { id: 'userDiv' + this.props.data.id },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC9jb21wb25lbnRzL3VzZXIuanN4Il0sIm5hbWVzIjpbIlVzZXIiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJwcm9wcyIsImRhdGEiLCJpZCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7OztNQUlNQSxJLEdBQU4sTUFBTUEsSUFBTixTQUFtQixnQkFBTUMsU0FBekIsQ0FBbUM7QUFDakNDLGFBQVM7QUFDUCxhQUFPO0FBQUE7QUFBQSxVQUFNLElBQUksWUFBWSxLQUFLQyxLQUFMLENBQVdDLElBQVgsQ0FBZ0JDLEVBQXRDO0FBQ0w7QUFBQTtBQUFBLFlBQU0sV0FBVSxnQkFBaEI7QUFBa0MsZUFBS0YsS0FBTCxDQUFXQyxJQUFYLENBQWdCQztBQUFsRCxTQURLO0FBRUw7QUFBQTtBQUFBLFlBQU0sV0FBVSxnQkFBaEI7QUFBa0MsZUFBS0YsS0FBTCxDQUFXQyxJQUFYLENBQWdCRTtBQUFsRDtBQUZLLE9BQVA7QUFJRDtBQU5nQyxHO29CQVNwQk4sSSIsImZpbGUiOiJ1c2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcGxldGVseSBzdGF0ZWxlc3NcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIFVzZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiA8c3BhbiBpZD17J3VzZXJEaXYnICsgdGhpcy5wcm9wcy5kYXRhLmlkfT5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2VwYXJhdGVkLXNwYW5cIj57dGhpcy5wcm9wcy5kYXRhLmlkfTwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2VwYXJhdGVkLXNwYW5cIj57dGhpcy5wcm9wcy5kYXRhLm5hbWV9PC9zcGFuPlxyXG4gICAgPC9zcGFuPlxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcjsiXX0=