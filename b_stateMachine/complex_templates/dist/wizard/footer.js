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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC93aXphcmQvZm9vdGVyLmpzIl0sIm5hbWVzIjpbImZvb3RlciIsInByb3BzIiwiY2FuY2VsQnV0dG9uIiwic2F2ZUJ1dHRvbiIsInNhdmVIYW5kbGVyIl0sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O3NCQUl3QkEsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVQsYUFBU0EsTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUI7QUFDbEMsZUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLFFBQWY7QUFDSTtBQUFBO0FBQUEsNkJBQ1FBLE1BQU1DLFlBRGQ7QUFFSSwrQkFBVSxjQUZkO0FBQUE7QUFBQSxhQURKO0FBSUk7QUFBQTtBQUFBLDZCQUNRRCxNQUFNRSxVQURkO0FBRUksK0JBQVUsZUFGZDtBQUdJLDZCQUFTRixNQUFNRyxXQUhuQjtBQUFBO0FBQUE7QUFKSixTQURKO0FBV0giLCJmaWxlIjoiZm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb290ZXIocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHsuLi5wcm9wcy5jYW5jZWxCdXR0b259XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGVmdF9idXR0b24gXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgey4uLnByb3BzLnNhdmVCdXR0b259XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmlnaHRfYnV0dG9uIFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17cHJvcHMuc2F2ZUhhbmRsZXJ9PlNhdmU8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdfQ==