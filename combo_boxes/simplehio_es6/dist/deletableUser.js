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
        'div',
        { id: 'userDiv`{this.props.data.id}`' },
        _react2.default.createElement(
          'span',
          { className: 'separated-span' },
          this.props.data.id
        ),
        _react2.default.createElement(
          'span',
          { className: 'separated-span' },
          this.props.data.name
        ),
        _react2.default.createElement(
          'a',
          { onClick: this.props.callbacks.delete },
          'REMOVE'
        )
      );
    }
  };
  exports.default = User;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9kZWxldGFibGVVc2VyLmpzeCJdLCJuYW1lcyI6WyJVc2VyIiwiQ29tcG9uZW50IiwicmVuZGVyIiwicHJvcHMiLCJkYXRhIiwiaWQiLCJuYW1lIiwiY2FsbGJhY2tzIiwiZGVsZXRlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7TUFJTUEsSSxHQUFOLE1BQU1BLElBQU4sU0FBbUIsZ0JBQU1DLFNBQXpCLENBQW1DO0FBQ2pDQyxhQUFTO0FBQ1AsYUFBTztBQUFBO0FBQUEsVUFBSyxJQUFHLCtCQUFSO0FBQ0w7QUFBQTtBQUFBLFlBQU0sV0FBVSxnQkFBaEI7QUFBa0MsZUFBS0MsS0FBTCxDQUFXQyxJQUFYLENBQWdCQztBQUFsRCxTQURLO0FBRUw7QUFBQTtBQUFBLFlBQU0sV0FBVSxnQkFBaEI7QUFBa0MsZUFBS0YsS0FBTCxDQUFXQyxJQUFYLENBQWdCRTtBQUFsRCxTQUZLO0FBR0w7QUFBQTtBQUFBLFlBQUcsU0FBUyxLQUFLSCxLQUFMLENBQVdJLFNBQVgsQ0FBcUJDLE1BQWpDO0FBQUE7QUFBQTtBQUhLLE9BQVA7QUFLRDtBQVBnQyxHO29CQVVwQlIsSSIsImZpbGUiOiJkZWxldGFibGVVc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcGxldGVseSBzdGF0ZWxlc3NcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIFVzZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiA8ZGl2IGlkPVwidXNlckRpdmB7dGhpcy5wcm9wcy5kYXRhLmlkfWBcIj5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2VwYXJhdGVkLXNwYW5cIj57dGhpcy5wcm9wcy5kYXRhLmlkfTwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2VwYXJhdGVkLXNwYW5cIj57dGhpcy5wcm9wcy5kYXRhLm5hbWV9PC9zcGFuPlxyXG4gICAgICA8YSBvbkNsaWNrPXt0aGlzLnByb3BzLmNhbGxiYWNrcy5kZWxldGV9PlJFTU9WRTwvYT5cclxuICAgIDwvZGl2PlxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcjsiXX0=