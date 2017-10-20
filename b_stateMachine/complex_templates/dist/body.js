define(['exports', 'react', './summary', './core'], function (exports, _react, _summary, _core) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = body;

    var _react2 = _interopRequireDefault(_react);

    var _summary2 = _interopRequireDefault(_summary);

    var _core2 = _interopRequireDefault(_core);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function body(props) {
        return _react2.default.createElement(
            'div',
            { className: 'body' },
            _react2.default.createElement(_summary2.default, props.summary),
            _react2.default.createElement(_core2.default, props.core)
        );
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9ib2R5LmpzIl0sIm5hbWVzIjpbImJvZHkiLCJwcm9wcyIsInN1bW1hcnkiLCJjb3JlIl0sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O3NCQU93QkEsSTs7Ozs7Ozs7Ozs7Ozs7QUFBVCxhQUFTQSxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFDaEMsZUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLE1BQWY7QUFDSSw2REFBYUEsTUFBTUMsT0FBbkIsQ0FESjtBQUVJLDBEQUFVRCxNQUFNRSxJQUFoQjtBQUZKLFNBREo7QUFNSCIsImZpbGUiOiJib2R5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgU3VtbWFyeSBmcm9tICcuL3N1bW1hcnknO1xuaW1wb3J0IENvcmUgZnJvbSAnLi9jb3JlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYm9keShwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuICAgICAgICAgICAgPFN1bW1hcnkgey4uLnByb3BzLnN1bW1hcnl9Lz5cbiAgICAgICAgICAgIDxDb3JlIHsuLi5wcm9wcy5jb3JlfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXX0=