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

    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }

        return target;
    };

    function footer(props) {
        return _react2.default.createElement(
            'div',
            { className: 'footer' },
            _react2.default.createElement(
                'button',
                _extends({}, props.cancelButton, {
                    className: 'left_button ' }),
                'Cancel'
            ),
            _react2.default.createElement(
                'button',
                _extends({}, props.saveButton, {
                    className: 'right_button ',
                    onClick: props.saveHandler }),
                'Save'
            )
        );
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9mb290ZXIuanMiXSwibmFtZXMiOlsiZm9vdGVyIiwicHJvcHMiLCJjYW5jZWxCdXR0b24iLCJzYXZlQnV0dG9uIiwic2F2ZUhhbmRsZXIiXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7c0JBSXdCQSxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBVCxhQUFTQSxNQUFULENBQWdCQyxLQUFoQixFQUF1QjtBQUNsQyxlQUNJO0FBQUE7QUFBQSxjQUFLLFdBQVUsUUFBZjtBQUNJO0FBQUE7QUFBQSw2QkFDUUEsTUFBTUMsWUFEZDtBQUVJLCtCQUFVLGNBRmQ7QUFBQTtBQUFBLGFBREo7QUFJSTtBQUFBO0FBQUEsNkJBQ1FELE1BQU1FLFVBRGQ7QUFFSSwrQkFBVSxlQUZkO0FBR0ksNkJBQVNGLE1BQU1HLFdBSG5CO0FBQUE7QUFBQTtBQUpKLFNBREo7QUFXSCIsImZpbGUiOiJmb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvb3Rlcihwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgey4uLnByb3BzLmNhbmNlbEJ1dHRvbn1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZWZ0X2J1dHRvbiBcIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB7Li4ucHJvcHMuc2F2ZUJ1dHRvbn1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyaWdodF9idXR0b24gXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5zYXZlSGFuZGxlcn0+U2F2ZTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl19