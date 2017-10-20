define(['exports', 'react'], function (exports, _react) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = footer;

    var _react2 = _interopRequireDefault(_react);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function footer(props) {
        props.cancelButton.className += !props.cancelButton.disabled ? ' enabled' : '';
        props.saveButton.className += !props.saveButton.disabled ? ' enabled' : '';

        return _react2.default.createElement(
            'div',
            { className: 'footer' },
            _react2.default.createElement(
                'button',
                props.cancelButton,
                'Cancel'
            ),
            _react2.default.createElement(
                'button',
                props.saveButton,
                'Save'
            )
        );
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC93aXphcmQvZm9vdGVyLmpzIl0sIm5hbWVzIjpbImZvb3RlciIsInByb3BzIiwiY2FuY2VsQnV0dG9uIiwiY2xhc3NOYW1lIiwiZGlzYWJsZWQiLCJzYXZlQnV0dG9uIl0sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O3NCQUl3QkEsTTs7Ozs7Ozs7OztBQUFULGFBQVNBLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCO0FBQ2xDQSxjQUFNQyxZQUFOLENBQW1CQyxTQUFuQixJQUFpQyxDQUFDRixNQUFNQyxZQUFOLENBQW1CRSxRQUFyQixHQUFpQyxVQUFqQyxHQUE4QyxFQUE5RTtBQUNBSCxjQUFNSSxVQUFOLENBQWlCRixTQUFqQixJQUErQixDQUFDRixNQUFNSSxVQUFOLENBQWlCRCxRQUFuQixHQUErQixVQUEvQixHQUE0QyxFQUExRTs7QUFFQSxlQUNJO0FBQUE7QUFBQSxjQUFLLFdBQVUsUUFBZjtBQUNJO0FBQUE7QUFDUUgsc0JBQU1DLFlBRGQ7QUFBQTtBQUFBLGFBREo7QUFJSTtBQUFBO0FBQ1FELHNCQUFNSSxVQURkO0FBQUE7QUFBQTtBQUpKLFNBREo7QUFVSCIsImZpbGUiOiJmb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvb3Rlcihwcm9wcykge1xuICAgIHByb3BzLmNhbmNlbEJ1dHRvbi5jbGFzc05hbWUgKz0gKCFwcm9wcy5jYW5jZWxCdXR0b24uZGlzYWJsZWQpID8gJyBlbmFibGVkJyA6ICcnO1xuICAgIHByb3BzLnNhdmVCdXR0b24uY2xhc3NOYW1lICs9ICghcHJvcHMuc2F2ZUJ1dHRvbi5kaXNhYmxlZCkgPyAnIGVuYWJsZWQnIDogJyc7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHsuLi5wcm9wcy5jYW5jZWxCdXR0b259PkNhbmNlbFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgey4uLnByb3BzLnNhdmVCdXR0b259PlNhdmVcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl19