define(['exports', 'react', '../wizard/wizard', '../wizard/body/body_dataset', '../wizard/core/core_dataset'], function (exports, _react, _wizard, _body_dataset, _core_dataset) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = customvarStep_template;

    var _react2 = _interopRequireDefault(_react);

    var _wizard2 = _interopRequireDefault(_wizard);

    var _body_dataset2 = _interopRequireDefault(_body_dataset);

    var _core_dataset2 = _interopRequireDefault(_core_dataset);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function customvarStep_template(wizardProps) {
        wizardProps.body = {
            body_renderer: _body_dataset2.default
        };
        wizardProps.core = {
            core_renderer: _core_dataset2.default,
            message: 'hello, world!'
        };
        wizardProps.footer.cancelButton.disabled = false;
        wizardProps.footer.saveButton.disabled = true;

        return _react2.default.createElement(
            'div',
            { className: 'container' },
            (0, _wizard2.default)(wizardProps)
        );
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC90ZW1wbGF0ZS9kYXRhc2V0U3RlcF90ZW1wbGF0ZS5qcyJdLCJuYW1lcyI6WyJjdXN0b212YXJTdGVwX3RlbXBsYXRlIiwid2l6YXJkUHJvcHMiLCJib2R5IiwiYm9keV9yZW5kZXJlciIsImNvcmUiLCJjb3JlX3JlbmRlcmVyIiwibWVzc2FnZSIsImZvb3RlciIsImNhbmNlbEJ1dHRvbiIsImRpc2FibGVkIiwic2F2ZUJ1dHRvbiJdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztzQkFRd0JBLHNCOzs7Ozs7Ozs7Ozs7Ozs7O0FBQVQsYUFBU0Esc0JBQVQsQ0FBZ0NDLFdBQWhDLEVBQTZDO0FBQ3hEQSxvQkFBWUMsSUFBWixHQUFtQjtBQUNmQztBQURlLFNBQW5CO0FBR0FGLG9CQUFZRyxJQUFaLEdBQW1CO0FBQ2ZDLGlEQURlO0FBRWZDLHFCQUFTO0FBRk0sU0FBbkI7QUFJQUwsb0JBQVlNLE1BQVosQ0FBbUJDLFlBQW5CLENBQWdDQyxRQUFoQyxHQUEyQyxLQUEzQztBQUNBUixvQkFBWU0sTUFBWixDQUFtQkcsVUFBbkIsQ0FBOEJELFFBQTlCLEdBQXlDLElBQXpDOztBQUVBLGVBQ0k7QUFBQTtBQUFBLGNBQUssV0FBVSxXQUFmO0FBQ0ssa0NBQU9SLFdBQVA7QUFETCxTQURKO0FBS0giLCJmaWxlIjoiZGF0YXNldFN0ZXBfdGVtcGxhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBXaXphcmQgZnJvbSAnLi4vd2l6YXJkL3dpemFyZCc7XG5pbXBvcnQgYm9keV9kYXRhc2V0IGZyb20gJy4uL3dpemFyZC9ib2R5L2JvZHlfZGF0YXNldCc7XG5pbXBvcnQgY29yZV9kYXRhc2V0IGZyb20gJy4uL3dpemFyZC9jb3JlL2NvcmVfZGF0YXNldCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGN1c3RvbXZhclN0ZXBfdGVtcGxhdGUod2l6YXJkUHJvcHMpIHtcbiAgICB3aXphcmRQcm9wcy5ib2R5ID0ge1xuICAgICAgICBib2R5X3JlbmRlcmVyOiBib2R5X2RhdGFzZXQsXG4gICAgfTtcbiAgICB3aXphcmRQcm9wcy5jb3JlID0ge1xuICAgICAgICBjb3JlX3JlbmRlcmVyOiBjb3JlX2RhdGFzZXQsXG4gICAgICAgIG1lc3NhZ2U6ICdoZWxsbywgd29ybGQhJyxcbiAgICB9O1xuICAgIHdpemFyZFByb3BzLmZvb3Rlci5jYW5jZWxCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB3aXphcmRQcm9wcy5mb290ZXIuc2F2ZUJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAge1dpemFyZCh3aXphcmRQcm9wcyl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59Il19