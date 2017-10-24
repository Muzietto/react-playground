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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC93aXphcmQvZm9vdGVyX3NpbXBsZS5qcyJdLCJuYW1lcyI6WyJmb290ZXIiLCJwcm9wcyIsImNhbmNlbEJ1dHRvbiIsImNsYXNzTmFtZSIsImRpc2FibGVkIiwic2F2ZUJ1dHRvbiIsInJlc3RhcnRCdXR0b24iXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7c0JBSXdCQSxNOzs7Ozs7Ozs7O0FBQVQsYUFBU0EsTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUI7QUFDbENBLGNBQU1DLFlBQU4sQ0FBbUJDLFNBQW5CLElBQWlDLENBQUNGLE1BQU1DLFlBQU4sQ0FBbUJFLFFBQXJCLEdBQWlDLFVBQWpDLEdBQThDLEVBQTlFO0FBQ0FILGNBQU1JLFVBQU4sQ0FBaUJGLFNBQWpCLElBQStCLENBQUNGLE1BQU1JLFVBQU4sQ0FBaUJELFFBQW5CLEdBQStCLFVBQS9CLEdBQTRDLEVBQTFFOztBQUVBLGVBQ0k7QUFBQTtBQUFBLGNBQUssV0FBVSxRQUFmO0FBQ0k7QUFBQTtBQUNRSCxzQkFBTUMsWUFEZDtBQUFBO0FBQUEsYUFESjtBQUlJO0FBQUE7QUFDUUQsc0JBQU1LLGFBRGQ7QUFBQTtBQUFBLGFBSko7QUFPSTtBQUFBO0FBQ1FMLHNCQUFNSSxVQURkO0FBQUE7QUFBQTtBQVBKLFNBREo7QUFhSCIsImZpbGUiOiJmb290ZXJfc2ltcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb290ZXIocHJvcHMpIHtcbiAgICBwcm9wcy5jYW5jZWxCdXR0b24uY2xhc3NOYW1lICs9ICghcHJvcHMuY2FuY2VsQnV0dG9uLmRpc2FibGVkKSA/ICcgZW5hYmxlZCcgOiAnJztcbiAgICBwcm9wcy5zYXZlQnV0dG9uLmNsYXNzTmFtZSArPSAoIXByb3BzLnNhdmVCdXR0b24uZGlzYWJsZWQpID8gJyBlbmFibGVkJyA6ICcnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB7Li4ucHJvcHMuY2FuY2VsQnV0dG9ufT5DYW5jZWxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHsuLi5wcm9wcy5yZXN0YXJ0QnV0dG9ufT5SZXN0YXJ0XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB7Li4ucHJvcHMuc2F2ZUJ1dHRvbn0+U2F2ZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXX0=