define(['exports', 'react', '../summary'], function (exports, _react, _summary) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = body_index_selection;

    var _react2 = _interopRequireDefault(_react);

    var _summary2 = _interopRequireDefault(_summary);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function body_index_selection(props) {

        return _react2.default.createElement(
            'div',
            { className: 'body' },
            _react2.default.createElement(_summary2.default, props.summary),
            props.core.core_renderer(props)
        );
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2pzeC93aXphcmQvYm9keS9ib2R5X2luZGV4X3NlbGVjdGlvbi5qcyJdLCJuYW1lcyI6WyJib2R5X2luZGV4X3NlbGVjdGlvbiIsInByb3BzIiwic3VtbWFyeSIsImNvcmUiLCJjb3JlX3JlbmRlcmVyIl0sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O3NCQU13QkEsb0I7Ozs7Ozs7Ozs7OztBQUFULGFBQVNBLG9CQUFULENBQThCQyxLQUE5QixFQUFxQzs7QUFFaEQsZUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLE1BQWY7QUFDSSw2REFBYUEsTUFBTUMsT0FBbkIsQ0FESjtBQUVLRCxrQkFBTUUsSUFBTixDQUFXQyxhQUFYLENBQXlCSCxLQUF6QjtBQUZMLFNBREo7QUFNSCIsImZpbGUiOiJib2R5X2luZGV4X3NlbGVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFN1bW1hcnkgZnJvbSAnLi4vc3VtbWFyeSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJvZHlfaW5kZXhfc2VsZWN0aW9uKHByb3BzKSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgICAgICAgIDxTdW1tYXJ5IHsuLi5wcm9wcy5zdW1tYXJ5fS8+XG4gICAgICAgICAgICB7cHJvcHMuY29yZS5jb3JlX3JlbmRlcmVyKHByb3BzKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdfQ==