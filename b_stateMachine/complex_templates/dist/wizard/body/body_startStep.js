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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2pzeC93aXphcmQvYm9keS9ib2R5X3N0YXJ0U3RlcC5qcyJdLCJuYW1lcyI6WyJib2R5X3N0YXJ0U3RlcCIsInByb3BzIiwiaGFuZGxlcnMiLCJmb3J3YXJkIiwibWFwIiwiaGFuZGxlciIsImluZGV4IiwiY3Vyc29yIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O3NCQUV3QkEsYzs7Ozs7Ozs7OztBQUFULGFBQVNBLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQStCO0FBQzFDLFlBQUlDLFdBQVdELE1BQU1DLFFBQXJCO0FBQ0EsZUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLE1BQWY7QUFFUUEscUJBQVNDLE9BQVQsQ0FBaUJDLEdBQWpCLENBQXFCLENBQUNDLE9BQUQsRUFBVUMsS0FBVixLQUFvQjtBQUNyQyx1QkFBTztBQUFBO0FBQUE7QUFDSCwrQkFBTyxFQUFDQyxRQUFRLFNBQVQsRUFESjtBQUVILDZCQUFLRCxLQUZGO0FBR0gsaUNBQVNELE9BSE47QUFHZTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhmO0FBRzhDQSw0QkFBUUcsSUFBUixJQUFnQjtBQUg5RCxpQkFBUDtBQUlILGFBTEQ7QUFGUixTQURKO0FBWUgiLCJmaWxlIjoiYm9keV9zdGFydFN0ZXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBib2R5X3N0YXJ0U3RlcChwcm9wcykge1xuICAgIGxldCBoYW5kbGVycyA9IHByb3BzLmhhbmRsZXJzO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGhhbmRsZXJzLmZvcndhcmQubWFwKChoYW5kbGVyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGgyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2N1cnNvcjogJ3BvaW50ZXInfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVyfT48cD5mb3J3YXJkIHRvJm5ic3A7Jm5ic3A7PC9wPnsoaGFuZGxlci5uYW1lIHx8ICdub25hbWUnKX08L2gyPjtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl19