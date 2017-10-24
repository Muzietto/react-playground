define(['exports', 'react', '../summary'], function (exports, _react, _summary) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = body_dataset;

    var _react2 = _interopRequireDefault(_react);

    var _summary2 = _interopRequireDefault(_summary);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function body_dataset(props) {

        props.summary = { step: 1 };

        return _react2.default.createElement(
            'div',
            { className: 'body' },
            _react2.default.createElement(_summary2.default, props.summary),
            props.core.core_renderer(props)
        );
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2pzeC93aXphcmQvYm9keS9ib2R5X2RhdGFzZXRfc2ltcGxlLmpzIl0sIm5hbWVzIjpbImJvZHlfZGF0YXNldCIsInByb3BzIiwic3VtbWFyeSIsInN0ZXAiLCJjb3JlIiwiY29yZV9yZW5kZXJlciJdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztzQkFNd0JBLFk7Ozs7Ozs7Ozs7OztBQUFULGFBQVNBLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCOztBQUV4Q0EsY0FBTUMsT0FBTixHQUFnQixFQUFDQyxNQUFNLENBQVAsRUFBaEI7O0FBRUEsZUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLE1BQWY7QUFDSSw2REFBYUYsTUFBTUMsT0FBbkIsQ0FESjtBQUVLRCxrQkFBTUcsSUFBTixDQUFXQyxhQUFYLENBQXlCSixLQUF6QjtBQUZMLFNBREo7QUFNSCIsImZpbGUiOiJib2R5X2RhdGFzZXRfc2ltcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgU3VtbWFyeSBmcm9tICcuLi9zdW1tYXJ5JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYm9keV9kYXRhc2V0KHByb3BzKSB7XG5cbiAgICBwcm9wcy5zdW1tYXJ5ID0ge3N0ZXA6IDEsfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuICAgICAgICAgICAgPFN1bW1hcnkgey4uLnByb3BzLnN1bW1hcnl9Lz5cbiAgICAgICAgICAgIHtwcm9wcy5jb3JlLmNvcmVfcmVuZGVyZXIocHJvcHMpfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl19