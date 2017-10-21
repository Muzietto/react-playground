define(['exports', 'react', '../wizard/wizard', '../wizard/body/body_customvar', '../wizard/core/core_customvar'], function (exports, _react, _wizard, _body_customvar, _core_customvar) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = customvarStep_template;

    var _react2 = _interopRequireDefault(_react);

    var _wizard2 = _interopRequireDefault(_wizard);

    var _body_customvar2 = _interopRequireDefault(_body_customvar);

    var _core_customvar2 = _interopRequireDefault(_core_customvar);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function customvarStep_template(wizardProps) {
        wizardProps.body = {
            body_renderer: _body_customvar2.default
        };
        wizardProps.core = {
            core_renderer: _core_customvar2.default
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC90ZW1wbGF0ZS9jdXN0b212YXJTdGVwX3RlbXBsYXRlLmpzIl0sIm5hbWVzIjpbImN1c3RvbXZhclN0ZXBfdGVtcGxhdGUiLCJ3aXphcmRQcm9wcyIsImJvZHkiLCJib2R5X3JlbmRlcmVyIiwiY29yZSIsImNvcmVfcmVuZGVyZXIiLCJmb290ZXIiLCJjYW5jZWxCdXR0b24iLCJkaXNhYmxlZCIsInNhdmVCdXR0b24iXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7c0JBUXdCQSxzQjs7Ozs7Ozs7Ozs7Ozs7OztBQUFULGFBQVNBLHNCQUFULENBQWdDQyxXQUFoQyxFQUE2QztBQUN4REEsb0JBQVlDLElBQVosR0FBbUI7QUFDZkM7QUFEZSxTQUFuQjtBQUdBRixvQkFBWUcsSUFBWixHQUFtQjtBQUNmQztBQURlLFNBQW5CO0FBR0FKLG9CQUFZSyxNQUFaLENBQW1CQyxZQUFuQixDQUFnQ0MsUUFBaEMsR0FBMkMsS0FBM0M7QUFDQVAsb0JBQVlLLE1BQVosQ0FBbUJHLFVBQW5CLENBQThCRCxRQUE5QixHQUF5QyxJQUF6Qzs7QUFFQSxlQUNJO0FBQUE7QUFBQSxjQUFLLFdBQVUsV0FBZjtBQUNLLGtDQUFPUCxXQUFQO0FBREwsU0FESjtBQUtIIiwiZmlsZSI6ImN1c3RvbXZhclN0ZXBfdGVtcGxhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBXaXphcmQgZnJvbSAnLi4vd2l6YXJkL3dpemFyZCc7XG5pbXBvcnQgYm9keV9jdXN0b212YXIgZnJvbSAnLi4vd2l6YXJkL2JvZHkvYm9keV9jdXN0b212YXInO1xuaW1wb3J0IGNvcmVfY3VzdG9tdmFyIGZyb20gJy4uL3dpemFyZC9jb3JlL2NvcmVfY3VzdG9tdmFyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3VzdG9tdmFyU3RlcF90ZW1wbGF0ZSh3aXphcmRQcm9wcykge1xuICAgIHdpemFyZFByb3BzLmJvZHkgPSB7XG4gICAgICAgIGJvZHlfcmVuZGVyZXI6IGJvZHlfY3VzdG9tdmFyLFxuICAgIH07XG4gICAgd2l6YXJkUHJvcHMuY29yZSA9IHtcbiAgICAgICAgY29yZV9yZW5kZXJlcjogY29yZV9jdXN0b212YXIsXG4gICAgfTtcbiAgICB3aXphcmRQcm9wcy5mb290ZXIuY2FuY2VsQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgd2l6YXJkUHJvcHMuZm9vdGVyLnNhdmVCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIHtXaXphcmQod2l6YXJkUHJvcHMpfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSJdfQ==