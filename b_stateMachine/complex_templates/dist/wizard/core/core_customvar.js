define(['exports', 'react'], function (exports, _react) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = core_customvar;

    var _react2 = _interopRequireDefault(_react);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function core_customvar(props) {
        return _react2.default.createElement(
            'div',
            { className: 'core' },
            _react2.default.createElement(
                'p',
                null,
                'This is the core customvar saying: ',
                props.message
            ),
            props.handlers.forward.map((handler, index) => {
                return _react2.default.createElement(
                    'h2',
                    {
                        style: { cursor: 'pointer' },
                        key: index,
                        onClick: handler },
                    _react2.default.createElement(
                        'p',
                        null,
                        'forward to\xA0\xA0'
                    ),
                    handler.name || 'noname'
                );
            })
        );
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2pzeC93aXphcmQvY29yZS9jb3JlX2N1c3RvbXZhci5qcyJdLCJuYW1lcyI6WyJjb3JlX2N1c3RvbXZhciIsInByb3BzIiwibWVzc2FnZSIsImhhbmRsZXJzIiwiZm9yd2FyZCIsIm1hcCIsImhhbmRsZXIiLCJpbmRleCIsImN1cnNvciIsIm5hbWUiXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7c0JBSXdCQSxjOzs7Ozs7Ozs7O0FBQVQsYUFBU0EsY0FBVCxDQUF3QkMsS0FBeEIsRUFBK0I7QUFDMUMsZUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLE1BQWY7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUF1Q0Esc0JBQU1DO0FBQTdDLGFBREo7QUFHUUQsa0JBQU1FLFFBQU4sQ0FBZUMsT0FBZixDQUF1QkMsR0FBdkIsQ0FBMkIsQ0FBQ0MsT0FBRCxFQUFVQyxLQUFWLEtBQW9CO0FBQzNDLHVCQUFPO0FBQUE7QUFBQTtBQUNILCtCQUFPLEVBQUNDLFFBQVEsU0FBVCxFQURKO0FBRUgsNkJBQUtELEtBRkY7QUFHSCxpQ0FBU0QsT0FITjtBQUdlO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSGY7QUFHOENBLDRCQUFRRyxJQUFSLElBQWdCO0FBSDlELGlCQUFQO0FBSUgsYUFMRDtBQUhSLFNBREo7QUFhSCIsImZpbGUiOiJjb3JlX2N1c3RvbXZhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29yZV9jdXN0b212YXIocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvcmVcIj5cbiAgICAgICAgICAgIDxwPlRoaXMgaXMgdGhlIGNvcmUgY3VzdG9tdmFyIHNheWluZzoge3Byb3BzLm1lc3NhZ2V9PC9wPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHByb3BzLmhhbmRsZXJzLmZvcndhcmQubWFwKChoYW5kbGVyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGgyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2N1cnNvcjogJ3BvaW50ZXInfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVyfT48cD5mb3J3YXJkIHRvJm5ic3A7Jm5ic3A7PC9wPnsoaGFuZGxlci5uYW1lIHx8ICdub25hbWUnKX08L2gyPjtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl19