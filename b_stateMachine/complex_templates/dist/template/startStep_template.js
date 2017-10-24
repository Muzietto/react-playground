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
        wizardProps.footer.restartButton.disabled = true;
        wizardProps.footer.saveButton.disabled = true;

        return _react2.default.createElement(
            'div',
            { className: 'container' },
            (0, _wizard2.default)(wizardProps)
        );
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC90ZW1wbGF0ZS9zdGFydFN0ZXBfdGVtcGxhdGUuanMiXSwibmFtZXMiOlsic3RhcnRTdGVwX3RlbXBsYXRlIiwid2l6YXJkUHJvcHMiLCJib2R5IiwiYm9keV9yZW5kZXJlciIsImZvb3RlciIsImNhbmNlbEJ1dHRvbiIsImRpc2FibGVkIiwicmVzdGFydEJ1dHRvbiIsInNhdmVCdXR0b24iXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7c0JBT3dCQSxrQjs7Ozs7Ozs7Ozs7Ozs7QUFBVCxhQUFTQSxrQkFBVCxDQUE0QkMsV0FBNUIsRUFBeUM7QUFDcERBLG9CQUFZQyxJQUFaLEdBQW1CO0FBQ2ZDO0FBRGUsU0FBbkI7QUFHQUYsb0JBQVlHLE1BQVosQ0FBbUJDLFlBQW5CLENBQWdDQyxRQUFoQyxHQUEyQyxLQUEzQztBQUNBTCxvQkFBWUcsTUFBWixDQUFtQkcsYUFBbkIsQ0FBaUNELFFBQWpDLEdBQTRDLElBQTVDO0FBQ0FMLG9CQUFZRyxNQUFaLENBQW1CSSxVQUFuQixDQUE4QkYsUUFBOUIsR0FBeUMsSUFBekM7O0FBRUEsZUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLFdBQWY7QUFDSyxrQ0FBT0wsV0FBUDtBQURMLFNBREo7QUFLSCIsImZpbGUiOiJzdGFydFN0ZXBfdGVtcGxhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBXaXphcmQgZnJvbSAnLi4vd2l6YXJkL3dpemFyZCc7XG5pbXBvcnQgYm9keV9zdGFydCBmcm9tICcuLi93aXphcmQvYm9keS9ib2R5X3N0YXJ0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRTdGVwX3RlbXBsYXRlKHdpemFyZFByb3BzKSB7XG4gICAgd2l6YXJkUHJvcHMuYm9keSA9IHtcbiAgICAgICAgYm9keV9yZW5kZXJlcjogYm9keV9zdGFydCxcbiAgICB9O1xuICAgIHdpemFyZFByb3BzLmZvb3Rlci5jYW5jZWxCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB3aXphcmRQcm9wcy5mb290ZXIucmVzdGFydEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgd2l6YXJkUHJvcHMuZm9vdGVyLnNhdmVCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIHtXaXphcmQod2l6YXJkUHJvcHMpfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSJdfQ==