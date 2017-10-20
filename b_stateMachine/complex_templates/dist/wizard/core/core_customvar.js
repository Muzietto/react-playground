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
            handlers.forward.map((handler, index) => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2pzeC93aXphcmQvY29yZS9jb3JlX2N1c3RvbXZhci5qcyJdLCJuYW1lcyI6WyJjb3JlX2N1c3RvbXZhciIsInByb3BzIiwibWVzc2FnZSIsImhhbmRsZXJzIiwiZm9yd2FyZCIsIm1hcCIsImhhbmRsZXIiLCJpbmRleCIsImN1cnNvciIsIm5hbWUiXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7c0JBSXdCQSxjOzs7Ozs7Ozs7O0FBQVQsYUFBU0EsY0FBVCxDQUF3QkMsS0FBeEIsRUFBK0I7QUFDMUMsZUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLE1BQWY7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUF1Q0Esc0JBQU1DO0FBQTdDLGFBREo7QUFHUUMscUJBQVNDLE9BQVQsQ0FBaUJDLEdBQWpCLENBQXFCLENBQUNDLE9BQUQsRUFBVUMsS0FBVixLQUFvQjtBQUNyQyx1QkFBTztBQUFBO0FBQUE7QUFDSCwrQkFBTyxFQUFDQyxRQUFRLFNBQVQsRUFESjtBQUVILDZCQUFLRCxLQUZGO0FBR0gsaUNBQVNELE9BSE47QUFHZTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhmO0FBRzhDQSw0QkFBUUcsSUFBUixJQUFnQjtBQUg5RCxpQkFBUDtBQUlILGFBTEQ7QUFIUixTQURKO0FBYUgiLCJmaWxlIjoiY29yZV9jdXN0b212YXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvcmVfY3VzdG9tdmFyKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3JlXCI+XG4gICAgICAgICAgICA8cD5UaGlzIGlzIHRoZSBjb3JlIGN1c3RvbXZhciBzYXlpbmc6IHtwcm9wcy5tZXNzYWdlfTwvcD5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVycy5mb3J3YXJkLm1hcCgoaGFuZGxlciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxoMlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjdXJzb3I6ICdwb2ludGVyJ319XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlcn0+PHA+Zm9yd2FyZCB0byZuYnNwOyZuYnNwOzwvcD57KGhhbmRsZXIubmFtZSB8fCAnbm9uYW1lJyl9PC9oMj47XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdfQ==