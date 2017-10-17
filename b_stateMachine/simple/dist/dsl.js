define(['exports', 'react', 'react-dom'], function (exports, _react, _reactDom) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = choice;

    var _react2 = _interopRequireDefault(_react);

    var _reactDom2 = _interopRequireDefault(_reactDom);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    const root = document.getElementById('container');

    function choice(choices, template) {
        template = template || defaultTemplate;

        _render(choices, template);
    }

    function _render(handlers, template) {
        _reactDom2.default.render(template(handlers), root);
    }

    function defaultTemplate(handlers) {
        return _react2.default.createElement(
            'fieldset',
            null,
            _react2.default.createElement(
                'legend',
                null,
                'This is the ' + handlers.location
            ),
            handlers.backward.map((handler, index) => {
                return _react2.default.createElement(
                    'h4',
                    {
                        style: { cursor: 'pointer' },
                        key: index,
                        onClick: handler },
                    'back to ' + (handler.name || 'noname')
                );
            }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9kc2wuanMiXSwibmFtZXMiOlsiY2hvaWNlIiwicm9vdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjaG9pY2VzIiwidGVtcGxhdGUiLCJkZWZhdWx0VGVtcGxhdGUiLCJfcmVuZGVyIiwiaGFuZGxlcnMiLCJyZW5kZXIiLCJsb2NhdGlvbiIsImJhY2t3YXJkIiwibWFwIiwiaGFuZGxlciIsImluZGV4IiwiY3Vyc29yIiwibmFtZSIsImZvcndhcmQiXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7c0JBT3dCQSxNOzs7Ozs7Ozs7Ozs7QUFGeEIsVUFBTUMsT0FBT0MsU0FBU0MsY0FBVCxDQUF3QixXQUF4QixDQUFiOztBQUVlLGFBQVNILE1BQVQsQ0FBZ0JJLE9BQWhCLEVBQXlCQyxRQUF6QixFQUFtQztBQUM5Q0EsbUJBQVdBLFlBQVlDLGVBQXZCOztBQUVBQyxnQkFBUUgsT0FBUixFQUFpQkMsUUFBakI7QUFDSDs7QUFFRCxhQUFTRSxPQUFULENBQWlCQyxRQUFqQixFQUEyQkgsUUFBM0IsRUFBcUM7QUFDakMsMkJBQVNJLE1BQVQsQ0FBZ0JKLFNBQVNHLFFBQVQsQ0FBaEIsRUFBb0NQLElBQXBDO0FBQ0g7O0FBRUQsYUFBU0ssZUFBVCxDQUF5QkUsUUFBekIsRUFBbUM7QUFDL0IsZUFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBUyxpQ0FBaUJBLFNBQVNFO0FBQW5DLGFBREo7QUFHUUYscUJBQVNHLFFBQVQsQ0FBa0JDLEdBQWxCLENBQXNCLENBQUNDLE9BQUQsRUFBVUMsS0FBVixLQUFvQjtBQUN0Qyx1QkFBTztBQUFBO0FBQUE7QUFDSCwrQkFBTyxFQUFDQyxRQUFRLFNBQVQsRUFESjtBQUVILDZCQUFLRCxLQUZGO0FBR0gsaUNBQVNELE9BSE47QUFHZ0Isa0NBQWNBLFFBQVFHLElBQVIsSUFBZ0IsUUFBOUI7QUFIaEIsaUJBQVA7QUFJSCxhQUxELENBSFI7QUFXUVIscUJBQVNTLE9BQVQsQ0FBaUJMLEdBQWpCLENBQXFCLENBQUNDLE9BQUQsRUFBVUMsS0FBVixLQUFvQjtBQUNyQyx1QkFBTztBQUFBO0FBQUE7QUFDSCwrQkFBTyxFQUFDQyxRQUFRLFNBQVQsRUFESjtBQUVILDZCQUFLRCxLQUZGO0FBR0gsaUNBQVNELE9BSE47QUFHZTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhmO0FBRzhDQSw0QkFBUUcsSUFBUixJQUFnQjtBQUg5RCxpQkFBUDtBQUlILGFBTEQ7QUFYUixTQURKO0FBcUJIIiwiZmlsZSI6ImRzbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5jb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaG9pY2UoY2hvaWNlcywgdGVtcGxhdGUpIHtcbiAgICB0ZW1wbGF0ZSA9IHRlbXBsYXRlIHx8IGRlZmF1bHRUZW1wbGF0ZTtcblxuICAgIF9yZW5kZXIoY2hvaWNlcywgdGVtcGxhdGUpO1xufVxuXG5mdW5jdGlvbiBfcmVuZGVyKGhhbmRsZXJzLCB0ZW1wbGF0ZSkge1xuICAgIFJlYWN0RE9NLnJlbmRlcih0ZW1wbGF0ZShoYW5kbGVycyksIHJvb3QpO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0VGVtcGxhdGUoaGFuZGxlcnMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICA8bGVnZW5kPnsnVGhpcyBpcyB0aGUgJyArIGhhbmRsZXJzLmxvY2F0aW9ufTwvbGVnZW5kPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGhhbmRsZXJzLmJhY2t3YXJkLm1hcCgoaGFuZGxlciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxoNFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjdXJzb3I6ICdwb2ludGVyJ319XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlcn0+eydiYWNrIHRvICcgKyAoaGFuZGxlci5uYW1lIHx8ICdub25hbWUnKX08L2g0PjtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGhhbmRsZXJzLmZvcndhcmQubWFwKChoYW5kbGVyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGgyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2N1cnNvcjogJ3BvaW50ZXInfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVyfT48cD5mb3J3YXJkIHRvJm5ic3A7Jm5ic3A7PC9wPnsoaGFuZGxlci5uYW1lIHx8ICdub25hbWUnKX08L2gyPjtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICk7XG59Il19