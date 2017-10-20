define(['exports', 'react'], function (exports, _react) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = summary;

    var _react2 = _interopRequireDefault(_react);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function summary(props) {
        return _react2.default.createElement(
            'div',
            { className: 'summary' },
            _react2.default.createElement(
                'div',
                { className: 'first ' + (props.step > 0 ? 'enabled' : '') },
                '1'
            ),
            _react2.default.createElement(
                'div',
                { className: 'second ' + (props.step > 1 ? 'enabled' : '') },
                '2'
            ),
            _react2.default.createElement(
                'div',
                { className: 'third ' + (props.step > 2 ? 'enabled' : '') },
                '3'
            )
        );
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC93aXphcmQvc3VtbWFyeS5qcyJdLCJuYW1lcyI6WyJzdW1tYXJ5IiwicHJvcHMiLCJzdGVwIl0sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O3NCQUl3QkEsTzs7Ozs7Ozs7OztBQUFULGFBQVNBLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCO0FBQ25DLGVBQ0k7QUFBQTtBQUFBLGNBQUssV0FBVSxTQUFmO0FBQ0k7QUFBQTtBQUFBLGtCQUFLLFdBQVcsWUFBYUEsTUFBTUMsSUFBTixHQUFhLENBQWQsR0FBbUIsU0FBbkIsR0FBK0IsRUFBM0MsQ0FBaEI7QUFBQTtBQUFBLGFBREo7QUFJSTtBQUFBO0FBQUEsa0JBQUssV0FBVyxhQUFjRCxNQUFNQyxJQUFOLEdBQWEsQ0FBZCxHQUFtQixTQUFuQixHQUErQixFQUE1QyxDQUFoQjtBQUFBO0FBQUEsYUFKSjtBQU9JO0FBQUE7QUFBQSxrQkFBSyxXQUFXLFlBQWFELE1BQU1DLElBQU4sR0FBYSxDQUFkLEdBQW1CLFNBQW5CLEdBQStCLEVBQTNDLENBQWhCO0FBQUE7QUFBQTtBQVBKLFNBREo7QUFhSCIsImZpbGUiOiJzdW1tYXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdW1tYXJ5KHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdW1tYXJ5XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2ZpcnN0ICcgKyAoKHByb3BzLnN0ZXAgPiAwKSA/ICdlbmFibGVkJyA6ICcnKX0+XG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3NlY29uZCAnICsgKChwcm9wcy5zdGVwID4gMSkgPyAnZW5hYmxlZCcgOiAnJyl9PlxuICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyd0aGlyZCAnICsgKChwcm9wcy5zdGVwID4gMikgPyAnZW5hYmxlZCcgOiAnJyl9PlxuICAgICAgICAgICAgICAgIDNcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl19