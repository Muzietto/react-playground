define(['exports', 'react'], function (exports, _react) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = body_startStep;

    var _react2 = _interopRequireDefault(_react);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function body_startStep(props) {
        let handlers = props.handlers;
        return _react2.default.createElement(
            'div',
            { className: 'body' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2pzeC93aXphcmQvYm9keS9ib2R5X3N0YXJ0LmpzIl0sIm5hbWVzIjpbImJvZHlfc3RhcnRTdGVwIiwicHJvcHMiLCJoYW5kbGVycyIsImZvcndhcmQiLCJtYXAiLCJoYW5kbGVyIiwiaW5kZXgiLCJjdXJzb3IiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7c0JBRXdCQSxjOzs7Ozs7Ozs7O0FBQVQsYUFBU0EsY0FBVCxDQUF3QkMsS0FBeEIsRUFBK0I7QUFDMUMsWUFBSUMsV0FBV0QsTUFBTUMsUUFBckI7QUFDQSxlQUNJO0FBQUE7QUFBQSxjQUFLLFdBQVUsTUFBZjtBQUVRQSxxQkFBU0MsT0FBVCxDQUFpQkMsR0FBakIsQ0FBcUIsQ0FBQ0MsT0FBRCxFQUFVQyxLQUFWLEtBQW9CO0FBQ3JDLHVCQUFPO0FBQUE7QUFBQTtBQUNILCtCQUFPLEVBQUNDLFFBQVEsU0FBVCxFQURKO0FBRUgsNkJBQUtELEtBRkY7QUFHSCxpQ0FBU0QsT0FITjtBQUdlO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSGY7QUFHOENBLDRCQUFRRyxJQUFSLElBQWdCO0FBSDlELGlCQUFQO0FBSUgsYUFMRDtBQUZSLFNBREo7QUFZSCIsImZpbGUiOiJib2R5X3N0YXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYm9keV9zdGFydFN0ZXAocHJvcHMpIHtcbiAgICBsZXQgaGFuZGxlcnMgPSBwcm9wcy5oYW5kbGVycztcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVycy5mb3J3YXJkLm1hcCgoaGFuZGxlciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxoMlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjdXJzb3I6ICdwb2ludGVyJ319XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlcn0+PHA+Zm9yd2FyZCB0byZuYnNwOyZuYnNwOzwvcD57KGhhbmRsZXIubmFtZSB8fCAnbm9uYW1lJyl9PC9oMj47XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdfQ==