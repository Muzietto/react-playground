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
        props.restartButton.className += !props.restartButton.disabled ? ' enabled' : '';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC93aXphcmQvZm9vdGVyLmpzIl0sIm5hbWVzIjpbImZvb3RlciIsInByb3BzIiwiY2FuY2VsQnV0dG9uIiwiY2xhc3NOYW1lIiwiZGlzYWJsZWQiLCJyZXN0YXJ0QnV0dG9uIiwic2F2ZUJ1dHRvbiJdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztzQkFJd0JBLE07Ozs7Ozs7Ozs7QUFBVCxhQUFTQSxNQUFULENBQWdCQyxLQUFoQixFQUF1QjtBQUNsQ0EsY0FBTUMsWUFBTixDQUFtQkMsU0FBbkIsSUFBaUMsQ0FBQ0YsTUFBTUMsWUFBTixDQUFtQkUsUUFBckIsR0FBaUMsVUFBakMsR0FBOEMsRUFBOUU7QUFDQUgsY0FBTUksYUFBTixDQUFvQkYsU0FBcEIsSUFBa0MsQ0FBQ0YsTUFBTUksYUFBTixDQUFvQkQsUUFBdEIsR0FBa0MsVUFBbEMsR0FBK0MsRUFBaEY7QUFDQUgsY0FBTUssVUFBTixDQUFpQkgsU0FBakIsSUFBK0IsQ0FBQ0YsTUFBTUssVUFBTixDQUFpQkYsUUFBbkIsR0FBK0IsVUFBL0IsR0FBNEMsRUFBMUU7O0FBRUEsZUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLFFBQWY7QUFDSTtBQUFBO0FBQ1FILHNCQUFNQyxZQURkO0FBQUE7QUFBQSxhQURKO0FBSUk7QUFBQTtBQUNRRCxzQkFBTUksYUFEZDtBQUFBO0FBQUEsYUFKSjtBQU9JO0FBQUE7QUFDUUosc0JBQU1LLFVBRGQ7QUFBQTtBQUFBO0FBUEosU0FESjtBQWFIIiwiZmlsZSI6ImZvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9vdGVyKHByb3BzKSB7XG4gICAgcHJvcHMuY2FuY2VsQnV0dG9uLmNsYXNzTmFtZSArPSAoIXByb3BzLmNhbmNlbEJ1dHRvbi5kaXNhYmxlZCkgPyAnIGVuYWJsZWQnIDogJyc7XG4gICAgcHJvcHMucmVzdGFydEJ1dHRvbi5jbGFzc05hbWUgKz0gKCFwcm9wcy5yZXN0YXJ0QnV0dG9uLmRpc2FibGVkKSA/ICcgZW5hYmxlZCcgOiAnJztcbiAgICBwcm9wcy5zYXZlQnV0dG9uLmNsYXNzTmFtZSArPSAoIXByb3BzLnNhdmVCdXR0b24uZGlzYWJsZWQpID8gJyBlbmFibGVkJyA6ICcnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB7Li4ucHJvcHMuY2FuY2VsQnV0dG9ufT5DYW5jZWxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHsuLi5wcm9wcy5yZXN0YXJ0QnV0dG9ufT5SZXN0YXJ0XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB7Li4ucHJvcHMuc2F2ZUJ1dHRvbn0+U2F2ZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXX0=