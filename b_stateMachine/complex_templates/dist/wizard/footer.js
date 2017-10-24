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
                props.restartButton,
                'Restart'
            ),
            _react2.default.createElement(
                'button',
                props.saveButton,
                'Save'
            )
        );
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC93aXphcmQvZm9vdGVyLmpzIl0sIm5hbWVzIjpbImZvb3RlciIsInByb3BzIiwiY2FuY2VsQnV0dG9uIiwiY2xhc3NOYW1lIiwiZGlzYWJsZWQiLCJzYXZlQnV0dG9uIiwicmVzdGFydEJ1dHRvbiJdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztzQkFJd0JBLE07Ozs7Ozs7Ozs7QUFBVCxhQUFTQSxNQUFULENBQWdCQyxLQUFoQixFQUF1QjtBQUNsQ0EsY0FBTUMsWUFBTixDQUFtQkMsU0FBbkIsSUFBaUMsQ0FBQ0YsTUFBTUMsWUFBTixDQUFtQkUsUUFBckIsR0FBaUMsVUFBakMsR0FBOEMsRUFBOUU7QUFDQUgsY0FBTUksVUFBTixDQUFpQkYsU0FBakIsSUFBK0IsQ0FBQ0YsTUFBTUksVUFBTixDQUFpQkQsUUFBbkIsR0FBK0IsVUFBL0IsR0FBNEMsRUFBMUU7O0FBRUEsZUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLFFBQWY7QUFDSTtBQUFBO0FBQ1FILHNCQUFNQyxZQURkO0FBQUE7QUFBQSxhQURKO0FBSUk7QUFBQTtBQUNRRCxzQkFBTUssYUFEZDtBQUFBO0FBQUEsYUFKSjtBQU9JO0FBQUE7QUFDUUwsc0JBQU1JLFVBRGQ7QUFBQTtBQUFBO0FBUEosU0FESjtBQWFIIiwiZmlsZSI6ImZvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9vdGVyKHByb3BzKSB7XG4gICAgcHJvcHMuY2FuY2VsQnV0dG9uLmNsYXNzTmFtZSArPSAoIXByb3BzLmNhbmNlbEJ1dHRvbi5kaXNhYmxlZCkgPyAnIGVuYWJsZWQnIDogJyc7XG4gICAgcHJvcHMuc2F2ZUJ1dHRvbi5jbGFzc05hbWUgKz0gKCFwcm9wcy5zYXZlQnV0dG9uLmRpc2FibGVkKSA/ICcgZW5hYmxlZCcgOiAnJztcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgey4uLnByb3BzLmNhbmNlbEJ1dHRvbn0+Q2FuY2VsXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB7Li4ucHJvcHMucmVzdGFydEJ1dHRvbn0+UmVzdGFydFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgey4uLnByb3BzLnNhdmVCdXR0b259PlNhdmVcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl19