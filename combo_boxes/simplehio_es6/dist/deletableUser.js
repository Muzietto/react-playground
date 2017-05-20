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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9kZWxldGFibGVVc2VyLmpzeCJdLCJuYW1lcyI6WyJVc2VyIiwiQ29tcG9uZW50IiwicmVuZGVyIiwicHJvcHMiLCJkYXRhIiwiaWQiLCJuYW1lIiwiY2FsbGJhY2tzIiwiZGVsZXRlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7TUFJTUEsSSxHQUFOLE1BQU1BLElBQU4sU0FBbUIsZ0JBQU1DLFNBQXpCLENBQW1DO0FBQ2pDQyxhQUFTO0FBQ1AsYUFBTztBQUFBO0FBQUEsVUFBSyxJQUFHLDZCQUFSO0FBQ0w7QUFBQTtBQUFBLFlBQU0sV0FBVSxnQkFBaEI7QUFBa0MsZUFBS0MsS0FBTCxDQUFXQyxJQUFYLENBQWdCQztBQUFsRCxTQURLO0FBRUw7QUFBQTtBQUFBLFlBQU0sV0FBVSxnQkFBaEI7QUFBa0MsZUFBS0YsS0FBTCxDQUFXQyxJQUFYLENBQWdCRTtBQUFsRCxTQUZLO0FBR0w7QUFBQTtBQUFBLFlBQUcsU0FBUyxLQUFLSCxLQUFMLENBQVdJLFNBQVgsQ0FBcUJDLE1BQWpDO0FBQUE7QUFBQTtBQUhLLE9BQVA7QUFLRDtBQVBnQyxHO29CQVVwQlIsSSIsImZpbGUiOiJkZWxldGFibGVVc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcGxldGVseSBzdGF0ZWxlc3NcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIFVzZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiA8ZGl2IGlkPVwidXNlckRpdnt0aGlzLnByb3BzLmRhdGEuaWR9XCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlcGFyYXRlZC1zcGFuXCI+e3RoaXMucHJvcHMuZGF0YS5pZH08L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlcGFyYXRlZC1zcGFuXCI+e3RoaXMucHJvcHMuZGF0YS5uYW1lfTwvc3Bhbj5cclxuICAgICAgPGEgb25DbGljaz17dGhpcy5wcm9wcy5jYWxsYmFja3MuZGVsZXRlfT5SRU1PVkU8L2E+XHJcbiAgICA8L2Rpdj5cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXI7Il19