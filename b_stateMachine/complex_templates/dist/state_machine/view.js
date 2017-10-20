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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC9zdGF0ZV9tYWNoaW5lL3ZpZXcuanMiXSwibmFtZXMiOlsiY2hvaWNlIiwidGVtcGxhdGVBIiwidGVtcGxhdGVCIiwidGVtcGxhdGVDIiwiY2hvaWNlcyIsInRlbXBsYXRlIiwiX3JlbmRlciIsImhhbmRsZXJzIiwicm9vdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiLCJfZmllbGRzZXQiLCJsZXR0ZXIiLCJsb2NhdGlvbiIsImJhY2t3YXJkIiwibWFwIiwiaGFuZGxlciIsImluZGV4IiwiY3Vyc29yIiwibmFtZSIsImZvcndhcmQiXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7c0JBS3dCQSxNO1lBYVJDLFMsR0FBQUEsUztZQUlBQyxTLEdBQUFBLFM7WUFJQUMsUyxHQUFBQSxTOzs7Ozs7Ozs7Ozs7QUFyQkQsYUFBU0gsTUFBVCxDQUFnQkksT0FBaEIsRUFBeUJDLFFBQXpCLEVBQW1DO0FBQzlDQSxtQkFBV0EsWUFBWUosU0FBdkI7O0FBRUFLLGdCQUFRRixPQUFSLEVBQWlCQyxRQUFqQjtBQUNIOztBQUVELGFBQVNDLE9BQVQsQ0FBaUJDLFFBQWpCLEVBQTJCRixRQUEzQixFQUFxQztBQUNqQyxjQUFNRyxPQUFPQyxTQUFTQyxjQUFULENBQXdCLHlCQUF4QixDQUFiOztBQUVBLDJCQUFTQyxNQUFULENBQWdCTixTQUFTRSxRQUFULENBQWhCLEVBQW9DQyxJQUFwQztBQUNBO0FBQ0g7O0FBRU0sYUFBU1AsU0FBVCxDQUFtQk0sUUFBbkIsRUFBNkI7QUFDaEMsZUFBT0ssVUFBVUwsUUFBVixFQUFvQixHQUFwQixDQUFQO0FBQ0g7O0FBRU0sYUFBU0wsU0FBVCxDQUFtQkssUUFBbkIsRUFBNkI7QUFDaEMsZUFBT0ssVUFBVUwsUUFBVixFQUFvQixHQUFwQixDQUFQO0FBQ0g7O0FBRU0sYUFBU0osU0FBVCxDQUFtQkksUUFBbkIsRUFBNkI7QUFDaEMsZUFBT0ssVUFBVUwsUUFBVixFQUFvQixHQUFwQixDQUFQO0FBQ0g7O0FBRUQsYUFBU0ssU0FBVCxDQUFtQkwsUUFBbkIsRUFBNkJNLE1BQTdCLEVBQXFDO0FBQ2pDLGVBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQVNBLHlCQUFTLGdCQUFULEdBQTRCTixTQUFTTztBQUE5QyxhQURKO0FBR1FQLHFCQUFTUSxRQUFULENBQWtCQyxHQUFsQixDQUFzQixDQUFDQyxPQUFELEVBQVVDLEtBQVYsS0FBb0I7QUFDdEMsdUJBQU87QUFBQTtBQUFBO0FBQ0gsK0JBQU8sRUFBQ0MsUUFBUSxTQUFULEVBREo7QUFFSCw2QkFBS0QsS0FGRjtBQUdILGlDQUFTRCxPQUhOO0FBR2dCLGtDQUFjQSxRQUFRRyxJQUFSLElBQWdCLFFBQTlCO0FBSGhCLGlCQUFQO0FBSUgsYUFMRCxDQUhSO0FBV1FiLHFCQUFTYyxPQUFULENBQWlCTCxHQUFqQixDQUFxQixDQUFDQyxPQUFELEVBQVVDLEtBQVYsS0FBb0I7QUFDckMsdUJBQU87QUFBQTtBQUFBO0FBQ0gsK0JBQU8sRUFBQ0MsUUFBUSxTQUFULEVBREo7QUFFSCw2QkFBS0QsS0FGRjtBQUdILGlDQUFTRCxPQUhOO0FBR2U7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIZjtBQUc4Q0EsNEJBQVFHLElBQVIsSUFBZ0I7QUFIOUQsaUJBQVA7QUFJSCxhQUxEO0FBWFIsU0FESjtBQXFCSCIsImZpbGUiOiJ2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNob2ljZShjaG9pY2VzLCB0ZW1wbGF0ZSkge1xuICAgIHRlbXBsYXRlID0gdGVtcGxhdGUgfHwgdGVtcGxhdGVBO1xuXG4gICAgX3JlbmRlcihjaG9pY2VzLCB0ZW1wbGF0ZSk7XG59XG5cbmZ1bmN0aW9uIF9yZW5kZXIoaGFuZGxlcnMsIHRlbXBsYXRlKSB7XG4gICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0ZV9tYWNoaW5lX2NvbnRhaW5lcicpO1xuXG4gICAgUmVhY3RET00ucmVuZGVyKHRlbXBsYXRlKGhhbmRsZXJzKSwgcm9vdCk7XG4gICAgLy9yZXR1cm4gdGVtcGxhdGUoaGFuZGxlcnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVtcGxhdGVBKGhhbmRsZXJzKSB7XG4gICAgcmV0dXJuIF9maWVsZHNldChoYW5kbGVycywgJ0EnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlbXBsYXRlQihoYW5kbGVycykge1xuICAgIHJldHVybiBfZmllbGRzZXQoaGFuZGxlcnMsICdCJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZW1wbGF0ZUMoaGFuZGxlcnMpIHtcbiAgICByZXR1cm4gX2ZpZWxkc2V0KGhhbmRsZXJzLCAnQycpO1xufVxuXG5mdW5jdGlvbiBfZmllbGRzZXQoaGFuZGxlcnMsIGxldHRlcikge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICAgIDxsZWdlbmQ+e2xldHRlciArICcpIFRoaXMgaXMgdGhlICcgKyBoYW5kbGVycy5sb2NhdGlvbn08L2xlZ2VuZD5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVycy5iYWNrd2FyZC5tYXAoKGhhbmRsZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8aDRcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y3Vyc29yOiAncG9pbnRlcid9fVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZXJ9PnsnYmFjayB0byAnICsgKGhhbmRsZXIubmFtZSB8fCAnbm9uYW1lJyl9PC9oND47XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVycy5mb3J3YXJkLm1hcCgoaGFuZGxlciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxoMlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjdXJzb3I6ICdwb2ludGVyJ319XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlcn0+PHA+Zm9yd2FyZCB0byZuYnNwOyZuYnNwOzwvcD57KGhhbmRsZXIubmFtZSB8fCAnbm9uYW1lJyl9PC9oMj47XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9maWVsZHNldD5cbiAgICApO1xufVxuIl19