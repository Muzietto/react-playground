define(['exports', 'react', 'react-dom'], function (exports, _react, _reactDom) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = choice;
    exports.templateA = templateA;
    exports.templateB = templateB;
    exports.templateC = templateC;

    var _react2 = _interopRequireDefault(_react);

    var _reactDom2 = _interopRequireDefault(_reactDom);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function choice(choices, template) {
        template = template || templateA;

        _render(choices, template);
    }

    function _render(handlers, template) {
        const root = document.getElementById('state_machine_container');

        _reactDom2.default.render(template(handlers), root);
        //return template(handlers);
    }

    function templateA(handlers) {
        return _fieldset(handlers, 'A');
    }

    function templateB(handlers) {
        return _fieldset(handlers, 'B');
    }

    function templateC(handlers) {
        return _fieldset(handlers, 'C');
    }

    function _fieldset(handlers, letter) {
        return _react2.default.createElement(
            'fieldset',
            null,
            _react2.default.createElement(
                'legend',
                null,
                letter + ') This is the ' + handlers.location
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC9zaW1wbGVfc3RhdGVfbWFjaGluZS92aWV3LmpzIl0sIm5hbWVzIjpbImNob2ljZSIsInRlbXBsYXRlQSIsInRlbXBsYXRlQiIsInRlbXBsYXRlQyIsImNob2ljZXMiLCJ0ZW1wbGF0ZSIsIl9yZW5kZXIiLCJoYW5kbGVycyIsInJvb3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIiwiX2ZpZWxkc2V0IiwibGV0dGVyIiwibG9jYXRpb24iLCJiYWNrd2FyZCIsIm1hcCIsImhhbmRsZXIiLCJpbmRleCIsImN1cnNvciIsIm5hbWUiLCJmb3J3YXJkIl0sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O3NCQUt3QkEsTTtZQWFSQyxTLEdBQUFBLFM7WUFJQUMsUyxHQUFBQSxTO1lBSUFDLFMsR0FBQUEsUzs7Ozs7Ozs7Ozs7O0FBckJELGFBQVNILE1BQVQsQ0FBZ0JJLE9BQWhCLEVBQXlCQyxRQUF6QixFQUFtQztBQUM5Q0EsbUJBQVdBLFlBQVlKLFNBQXZCOztBQUVBSyxnQkFBUUYsT0FBUixFQUFpQkMsUUFBakI7QUFDSDs7QUFFRCxhQUFTQyxPQUFULENBQWlCQyxRQUFqQixFQUEyQkYsUUFBM0IsRUFBcUM7QUFDakMsY0FBTUcsT0FBT0MsU0FBU0MsY0FBVCxDQUF3Qix5QkFBeEIsQ0FBYjs7QUFFQSwyQkFBU0MsTUFBVCxDQUFnQk4sU0FBU0UsUUFBVCxDQUFoQixFQUFvQ0MsSUFBcEM7QUFDQTtBQUNIOztBQUVNLGFBQVNQLFNBQVQsQ0FBbUJNLFFBQW5CLEVBQTZCO0FBQ2hDLGVBQU9LLFVBQVVMLFFBQVYsRUFBb0IsR0FBcEIsQ0FBUDtBQUNIOztBQUVNLGFBQVNMLFNBQVQsQ0FBbUJLLFFBQW5CLEVBQTZCO0FBQ2hDLGVBQU9LLFVBQVVMLFFBQVYsRUFBb0IsR0FBcEIsQ0FBUDtBQUNIOztBQUVNLGFBQVNKLFNBQVQsQ0FBbUJJLFFBQW5CLEVBQTZCO0FBQ2hDLGVBQU9LLFVBQVVMLFFBQVYsRUFBb0IsR0FBcEIsQ0FBUDtBQUNIOztBQUVELGFBQVNLLFNBQVQsQ0FBbUJMLFFBQW5CLEVBQTZCTSxNQUE3QixFQUFxQztBQUNqQyxlQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFTQSx5QkFBUyxnQkFBVCxHQUE0Qk4sU0FBU087QUFBOUMsYUFESjtBQUdRUCxxQkFBU1EsUUFBVCxDQUFrQkMsR0FBbEIsQ0FBc0IsQ0FBQ0MsT0FBRCxFQUFVQyxLQUFWLEtBQW9CO0FBQ3RDLHVCQUFPO0FBQUE7QUFBQTtBQUNILCtCQUFPLEVBQUNDLFFBQVEsU0FBVCxFQURKO0FBRUgsNkJBQUtELEtBRkY7QUFHSCxpQ0FBU0QsT0FITjtBQUdnQixrQ0FBY0EsUUFBUUcsSUFBUixJQUFnQixRQUE5QjtBQUhoQixpQkFBUDtBQUlILGFBTEQsQ0FIUjtBQVdRYixxQkFBU2MsT0FBVCxDQUFpQkwsR0FBakIsQ0FBcUIsQ0FBQ0MsT0FBRCxFQUFVQyxLQUFWLEtBQW9CO0FBQ3JDLHVCQUFPO0FBQUE7QUFBQTtBQUNILCtCQUFPLEVBQUNDLFFBQVEsU0FBVCxFQURKO0FBRUgsNkJBQUtELEtBRkY7QUFHSCxpQ0FBU0QsT0FITjtBQUdlO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSGY7QUFHOENBLDRCQUFRRyxJQUFSLElBQWdCO0FBSDlELGlCQUFQO0FBSUgsYUFMRDtBQVhSLFNBREo7QUFxQkgiLCJmaWxlIjoidmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaG9pY2UoY2hvaWNlcywgdGVtcGxhdGUpIHtcbiAgICB0ZW1wbGF0ZSA9IHRlbXBsYXRlIHx8IHRlbXBsYXRlQTtcblxuICAgIF9yZW5kZXIoY2hvaWNlcywgdGVtcGxhdGUpO1xufVxuXG5mdW5jdGlvbiBfcmVuZGVyKGhhbmRsZXJzLCB0ZW1wbGF0ZSkge1xuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdGVfbWFjaGluZV9jb250YWluZXInKTtcblxuICAgIFJlYWN0RE9NLnJlbmRlcih0ZW1wbGF0ZShoYW5kbGVycyksIHJvb3QpO1xuICAgIC8vcmV0dXJuIHRlbXBsYXRlKGhhbmRsZXJzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlbXBsYXRlQShoYW5kbGVycykge1xuICAgIHJldHVybiBfZmllbGRzZXQoaGFuZGxlcnMsICdBJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZW1wbGF0ZUIoaGFuZGxlcnMpIHtcbiAgICByZXR1cm4gX2ZpZWxkc2V0KGhhbmRsZXJzLCAnQicpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVtcGxhdGVDKGhhbmRsZXJzKSB7XG4gICAgcmV0dXJuIF9maWVsZHNldChoYW5kbGVycywgJ0MnKTtcbn1cblxuZnVuY3Rpb24gX2ZpZWxkc2V0KGhhbmRsZXJzLCBsZXR0ZXIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICA8bGVnZW5kPntsZXR0ZXIgKyAnKSBUaGlzIGlzIHRoZSAnICsgaGFuZGxlcnMubG9jYXRpb259PC9sZWdlbmQ+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcnMuYmFja3dhcmQubWFwKChoYW5kbGVyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGg0XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2N1cnNvcjogJ3BvaW50ZXInfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVyfT57J2JhY2sgdG8gJyArIChoYW5kbGVyLm5hbWUgfHwgJ25vbmFtZScpfTwvaDQ+O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcnMuZm9yd2FyZC5tYXAoKGhhbmRsZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8aDJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y3Vyc29yOiAncG9pbnRlcid9fVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZXJ9PjxwPmZvcndhcmQgdG8mbmJzcDsmbmJzcDs8L3A+eyhoYW5kbGVyLm5hbWUgfHwgJ25vbmFtZScpfTwvaDI+O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZmllbGRzZXQ+XG4gICAgKTtcbn1cbiJdfQ==