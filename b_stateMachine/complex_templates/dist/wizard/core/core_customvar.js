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
                props.core.message
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2pzeC93aXphcmQvY29yZS9jb3JlX2N1c3RvbXZhci5qcyJdLCJuYW1lcyI6WyJjb3JlX2N1c3RvbXZhciIsInByb3BzIiwiY29yZSIsIm1lc3NhZ2UiLCJoYW5kbGVycyIsImZvcndhcmQiLCJtYXAiLCJoYW5kbGVyIiwiaW5kZXgiLCJjdXJzb3IiLCJuYW1lIl0sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O3NCQUl3QkEsYzs7Ozs7Ozs7OztBQUFULGFBQVNBLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQStCO0FBQzFDLGVBQ0k7QUFBQTtBQUFBLGNBQUssV0FBVSxNQUFmO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBdUNBLHNCQUFNQyxJQUFOLENBQVdDO0FBQWxELGFBREo7QUFHUUYsa0JBQU1HLFFBQU4sQ0FBZUMsT0FBZixDQUF1QkMsR0FBdkIsQ0FBMkIsQ0FBQ0MsT0FBRCxFQUFVQyxLQUFWLEtBQW9CO0FBQzNDLHVCQUFPO0FBQUE7QUFBQTtBQUNILCtCQUFPLEVBQUNDLFFBQVEsU0FBVCxFQURKO0FBRUgsNkJBQUtELEtBRkY7QUFHSCxpQ0FBU0QsT0FITjtBQUdlO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSGY7QUFHOENBLDRCQUFRRyxJQUFSLElBQWdCO0FBSDlELGlCQUFQO0FBSUgsYUFMRDtBQUhSLFNBREo7QUFhSCIsImZpbGUiOiJjb3JlX2N1c3RvbXZhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29yZV9jdXN0b212YXIocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvcmVcIj5cbiAgICAgICAgICAgIDxwPlRoaXMgaXMgdGhlIGNvcmUgY3VzdG9tdmFyIHNheWluZzoge3Byb3BzLmNvcmUubWVzc2FnZX08L3A+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHJvcHMuaGFuZGxlcnMuZm9yd2FyZC5tYXAoKGhhbmRsZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8aDJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y3Vyc29yOiAncG9pbnRlcid9fVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZXJ9PjxwPmZvcndhcmQgdG8mbmJzcDsmbmJzcDs8L3A+eyhoYW5kbGVyLm5hbWUgfHwgJ25vbmFtZScpfTwvaDI+O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXX0=