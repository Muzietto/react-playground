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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC91c2VyLmpzeCJdLCJuYW1lcyI6WyJVc2VyIiwiQ29tcG9uZW50IiwicmVuZGVyIiwicHJvcHMiLCJkYXRhIiwiaWQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7TUFJTUEsSSxHQUFOLE1BQU1BLElBQU4sU0FBbUIsZ0JBQU1DLFNBQXpCLENBQW1DO0FBQ2pDQyxhQUFTO0FBQ1AsYUFBTztBQUFBO0FBQUEsVUFBTSxJQUFJLFlBQVksS0FBS0MsS0FBTCxDQUFXQyxJQUFYLENBQWdCQyxFQUF0QztBQUNMO0FBQUE7QUFBQSxZQUFNLFdBQVUsZ0JBQWhCO0FBQWtDLGVBQUtGLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQkM7QUFBbEQsU0FESztBQUVMO0FBQUE7QUFBQSxZQUFNLFdBQVUsZ0JBQWhCO0FBQWtDLGVBQUtGLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQkU7QUFBbEQ7QUFGSyxPQUFQO0FBSUQ7QUFOZ0MsRztvQkFTcEJOLEkiLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBsZXRlbHkgc3RhdGVsZXNzXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBVc2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gPHNwYW4gaWQ9eyd1c2VyRGl2JyArIHRoaXMucHJvcHMuZGF0YS5pZH0+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlcGFyYXRlZC1zcGFuXCI+e3RoaXMucHJvcHMuZGF0YS5pZH08L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlcGFyYXRlZC1zcGFuXCI+e3RoaXMucHJvcHMuZGF0YS5uYW1lfTwvc3Bhbj5cclxuICAgIDwvc3Bhbj5cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXI7Il19