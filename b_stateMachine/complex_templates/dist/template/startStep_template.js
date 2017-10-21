define(['exports', 'react', '../wizard/wizard', '../wizard/body/body_start'], function (exports, _react, _wizard, _body_start) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = startStep_template;

    var _react2 = _interopRequireDefault(_react);

    var _wizard2 = _interopRequireDefault(_wizard);

    var _body_start2 = _interopRequireDefault(_body_start);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function startStep_template(wizardProps) {
        wizardProps.body = {
            body_renderer: _body_start2.default
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC90ZW1wbGF0ZS9zdGFydFN0ZXBfdGVtcGxhdGUuanMiXSwibmFtZXMiOlsic3RhcnRTdGVwX3RlbXBsYXRlIiwid2l6YXJkUHJvcHMiLCJib2R5IiwiYm9keV9yZW5kZXJlciIsImZvb3RlciIsImNhbmNlbEJ1dHRvbiIsImRpc2FibGVkIiwic2F2ZUJ1dHRvbiJdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztzQkFPd0JBLGtCOzs7Ozs7Ozs7Ozs7OztBQUFULGFBQVNBLGtCQUFULENBQTRCQyxXQUE1QixFQUF5QztBQUNwREEsb0JBQVlDLElBQVosR0FBbUI7QUFDZkM7QUFEZSxTQUFuQjtBQUdBRixvQkFBWUcsTUFBWixDQUFtQkMsWUFBbkIsQ0FBZ0NDLFFBQWhDLEdBQTJDLEtBQTNDO0FBQ0FMLG9CQUFZRyxNQUFaLENBQW1CRyxVQUFuQixDQUE4QkQsUUFBOUIsR0FBeUMsSUFBekM7O0FBRUEsZUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLFdBQWY7QUFDSyxrQ0FBT0wsV0FBUDtBQURMLFNBREo7QUFLSCIsImZpbGUiOiJzdGFydFN0ZXBfdGVtcGxhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBXaXphcmQgZnJvbSAnLi4vd2l6YXJkL3dpemFyZCc7XG5pbXBvcnQgYm9keV9zdGFydCBmcm9tICcuLi93aXphcmQvYm9keS9ib2R5X3N0YXJ0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRTdGVwX3RlbXBsYXRlKHdpemFyZFByb3BzKSB7XG4gICAgd2l6YXJkUHJvcHMuYm9keSA9IHtcbiAgICAgICAgYm9keV9yZW5kZXJlcjogYm9keV9zdGFydCxcbiAgICB9O1xuICAgIHdpemFyZFByb3BzLmZvb3Rlci5jYW5jZWxCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB3aXphcmRQcm9wcy5mb290ZXIuc2F2ZUJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAge1dpemFyZCh3aXphcmRQcm9wcyl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59Il19