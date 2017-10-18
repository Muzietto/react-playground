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

    const root = document.getElementById('container');

    function choice(choices, template) {
        template = template || templateA;

        _render(choices, template);
    }

    function _render(handlers, template) {
        _reactDom2.default.render(template(handlers), root);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC92aWV3LmpzIl0sIm5hbWVzIjpbImNob2ljZSIsInRlbXBsYXRlQSIsInRlbXBsYXRlQiIsInRlbXBsYXRlQyIsInJvb3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2hvaWNlcyIsInRlbXBsYXRlIiwiX3JlbmRlciIsImhhbmRsZXJzIiwicmVuZGVyIiwiX2ZpZWxkc2V0IiwibGV0dGVyIiwibG9jYXRpb24iLCJiYWNrd2FyZCIsIm1hcCIsImhhbmRsZXIiLCJpbmRleCIsImN1cnNvciIsIm5hbWUiLCJmb3J3YXJkIl0sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O3NCQU93QkEsTTtZQVVSQyxTLEdBQUFBLFM7WUFJQUMsUyxHQUFBQSxTO1lBSUFDLFMsR0FBQUEsUzs7Ozs7Ozs7Ozs7O0FBcEJoQixVQUFNQyxPQUFPQyxTQUFTQyxjQUFULENBQXdCLFdBQXhCLENBQWI7O0FBRWUsYUFBU04sTUFBVCxDQUFnQk8sT0FBaEIsRUFBeUJDLFFBQXpCLEVBQW1DO0FBQzlDQSxtQkFBV0EsWUFBWVAsU0FBdkI7O0FBRUFRLGdCQUFRRixPQUFSLEVBQWlCQyxRQUFqQjtBQUNIOztBQUVELGFBQVNDLE9BQVQsQ0FBaUJDLFFBQWpCLEVBQTJCRixRQUEzQixFQUFxQztBQUNqQywyQkFBU0csTUFBVCxDQUFnQkgsU0FBU0UsUUFBVCxDQUFoQixFQUFvQ04sSUFBcEM7QUFDSDs7QUFFTSxhQUFTSCxTQUFULENBQW1CUyxRQUFuQixFQUE2QjtBQUNoQyxlQUFPRSxVQUFVRixRQUFWLEVBQW9CLEdBQXBCLENBQVA7QUFDSDs7QUFFTSxhQUFTUixTQUFULENBQW1CUSxRQUFuQixFQUE2QjtBQUNoQyxlQUFPRSxVQUFVRixRQUFWLEVBQW9CLEdBQXBCLENBQVA7QUFDSDs7QUFFTSxhQUFTUCxTQUFULENBQW1CTyxRQUFuQixFQUE2QjtBQUNoQyxlQUFPRSxVQUFVRixRQUFWLEVBQW9CLEdBQXBCLENBQVA7QUFDSDs7QUFFRCxhQUFTRSxTQUFULENBQW1CRixRQUFuQixFQUE2QkcsTUFBN0IsRUFBcUM7QUFDakMsZUFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBU0EseUJBQVMsZ0JBQVQsR0FBNEJILFNBQVNJO0FBQTlDLGFBREo7QUFHUUoscUJBQVNLLFFBQVQsQ0FBa0JDLEdBQWxCLENBQXNCLENBQUNDLE9BQUQsRUFBVUMsS0FBVixLQUFvQjtBQUN0Qyx1QkFBTztBQUFBO0FBQUE7QUFDSCwrQkFBTyxFQUFDQyxRQUFRLFNBQVQsRUFESjtBQUVILDZCQUFLRCxLQUZGO0FBR0gsaUNBQVNELE9BSE47QUFHZ0Isa0NBQWNBLFFBQVFHLElBQVIsSUFBZ0IsUUFBOUI7QUFIaEIsaUJBQVA7QUFJSCxhQUxELENBSFI7QUFXUVYscUJBQVNXLE9BQVQsQ0FBaUJMLEdBQWpCLENBQXFCLENBQUNDLE9BQUQsRUFBVUMsS0FBVixLQUFvQjtBQUNyQyx1QkFBTztBQUFBO0FBQUE7QUFDSCwrQkFBTyxFQUFDQyxRQUFRLFNBQVQsRUFESjtBQUVILDZCQUFLRCxLQUZGO0FBR0gsaUNBQVNELE9BSE47QUFHZTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhmO0FBRzhDQSw0QkFBUUcsSUFBUixJQUFnQjtBQUg5RCxpQkFBUDtBQUlILGFBTEQ7QUFYUixTQURKO0FBcUJIIiwiZmlsZSI6InZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2hvaWNlKGNob2ljZXMsIHRlbXBsYXRlKSB7XG4gICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZSB8fCB0ZW1wbGF0ZUE7XG5cbiAgICBfcmVuZGVyKGNob2ljZXMsIHRlbXBsYXRlKTtcbn1cblxuZnVuY3Rpb24gX3JlbmRlcihoYW5kbGVycywgdGVtcGxhdGUpIHtcbiAgICBSZWFjdERPTS5yZW5kZXIodGVtcGxhdGUoaGFuZGxlcnMpLCByb290KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlbXBsYXRlQShoYW5kbGVycykge1xuICAgIHJldHVybiBfZmllbGRzZXQoaGFuZGxlcnMsICdBJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZW1wbGF0ZUIoaGFuZGxlcnMpIHtcbiAgICByZXR1cm4gX2ZpZWxkc2V0KGhhbmRsZXJzLCAnQicpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVtcGxhdGVDKGhhbmRsZXJzKSB7XG4gICAgcmV0dXJuIF9maWVsZHNldChoYW5kbGVycywgJ0MnKTtcbn1cblxuZnVuY3Rpb24gX2ZpZWxkc2V0KGhhbmRsZXJzLCBsZXR0ZXIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICA8bGVnZW5kPntsZXR0ZXIgKyAnKSBUaGlzIGlzIHRoZSAnICsgaGFuZGxlcnMubG9jYXRpb259PC9sZWdlbmQ+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcnMuYmFja3dhcmQubWFwKChoYW5kbGVyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGg0XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2N1cnNvcjogJ3BvaW50ZXInfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVyfT57J2JhY2sgdG8gJyArIChoYW5kbGVyLm5hbWUgfHwgJ25vbmFtZScpfTwvaDQ+O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcnMuZm9yd2FyZC5tYXAoKGhhbmRsZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8aDJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y3Vyc29yOiAncG9pbnRlcid9fVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZXJ9PjxwPmZvcndhcmQgdG8mbmJzcDsmbmJzcDs8L3A+eyhoYW5kbGVyLm5hbWUgfHwgJ25vbmFtZScpfTwvaDI+O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZmllbGRzZXQ+XG4gICAgKTtcbn1cbiJdfQ==