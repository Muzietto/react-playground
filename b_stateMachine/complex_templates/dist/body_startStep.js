define(['exports', 'react', './core_customvars'], function (exports, _react, _core_customvars) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = body_startStep;

    var _react2 = _interopRequireDefault(_react);

    var _core_customvars2 = _interopRequireDefault(_core_customvars);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _objectWithoutProperties(obj, keys) {
        var target = {};

        for (var i in obj) {
            if (keys.indexOf(i) >= 0) continue;
            if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
            target[i] = obj[i];
        }

        return target;
    }

    function body_startStep(props) {
        let _props$core = props.core,
            { core_renderer } = _props$core,
            coreprops = _objectWithoutProperties(_props$core, ['core_renderer']);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9ib2R5X3N0YXJ0U3RlcC5qcyJdLCJuYW1lcyI6WyJib2R5X3N0YXJ0U3RlcCIsInByb3BzIiwiY29yZSIsImNvcmVfcmVuZGVyZXIiLCJjb3JlcHJvcHMiLCJoYW5kbGVycyIsImZvcndhcmQiLCJtYXAiLCJoYW5kbGVyIiwiaW5kZXgiLCJjdXJzb3IiLCJuYW1lIl0sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O3NCQU13QkEsYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVQsYUFBU0EsY0FBVCxDQUF3QkMsS0FBeEIsRUFBK0I7QUFDMUMsMEJBQW9DQSxNQUFNQyxJQUExQztBQUFBLFlBQUksRUFBQ0MsYUFBRCxFQUFKO0FBQUEsWUFBdUJDLFNBQXZCO0FBQ0EsZUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLE1BQWY7QUFFUUMscUJBQVNDLE9BQVQsQ0FBaUJDLEdBQWpCLENBQXFCLENBQUNDLE9BQUQsRUFBVUMsS0FBVixLQUFvQjtBQUNyQyx1QkFBTztBQUFBO0FBQUE7QUFDSCwrQkFBTyxFQUFDQyxRQUFRLFNBQVQsRUFESjtBQUVILDZCQUFLRCxLQUZGO0FBR0gsaUNBQVNELE9BSE47QUFHZTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhmO0FBRzhDQSw0QkFBUUcsSUFBUixJQUFnQjtBQUg5RCxpQkFBUDtBQUlILGFBTEQ7QUFGUixTQURKO0FBWUgiLCJmaWxlIjoiYm9keV9zdGFydFN0ZXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBjb3JlX2N1c3RvbXZhcnMgZnJvbSAnLi9jb3JlX2N1c3RvbXZhcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBib2R5X3N0YXJ0U3RlcChwcm9wcykge1xuICAgIGxldCB7Y29yZV9yZW5kZXJlciwgLi4uY29yZXByb3BzfSA9IHByb3BzLmNvcmU7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcnMuZm9yd2FyZC5tYXAoKGhhbmRsZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8aDJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y3Vyc29yOiAncG9pbnRlcid9fVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZXJ9PjxwPmZvcndhcmQgdG8mbmJzcDsmbmJzcDs8L3A+eyhoYW5kbGVyLm5hbWUgfHwgJ25vbmFtZScpfTwvaDI+O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXX0=