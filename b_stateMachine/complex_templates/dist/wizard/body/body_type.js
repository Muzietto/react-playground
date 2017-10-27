define(['exports', 'react', '../summary'], function (exports, _react, _summary) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = body_type;

    var _react2 = _interopRequireDefault(_react);

    var _summary2 = _interopRequireDefault(_summary);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function body_type(props) {

        return _react2.default.createElement(
            'div',
            { className: 'body' },
            _react2.default.createElement(_summary2.default, props.summary),
            props.core.core_renderer(props)
        );
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2pzeC93aXphcmQvYm9keS9ib2R5X3R5cGUuanMiXSwibmFtZXMiOlsiYm9keV90eXBlIiwicHJvcHMiLCJzdW1tYXJ5IiwiY29yZSIsImNvcmVfcmVuZGVyZXIiXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7c0JBTXdCQSxTOzs7Ozs7Ozs7Ozs7QUFBVCxhQUFTQSxTQUFULENBQW1CQyxLQUFuQixFQUEwQjs7QUFFckMsZUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLE1BQWY7QUFDSSw2REFBYUEsTUFBTUMsT0FBbkIsQ0FESjtBQUVLRCxrQkFBTUUsSUFBTixDQUFXQyxhQUFYLENBQXlCSCxLQUF6QjtBQUZMLFNBREo7QUFNSCIsImZpbGUiOiJib2R5X3R5cGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBTdW1tYXJ5IGZyb20gJy4uL3N1bW1hcnknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBib2R5X3R5cGUocHJvcHMpIHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuICAgICAgICAgICAgPFN1bW1hcnkgey4uLnByb3BzLnN1bW1hcnl9Lz5cbiAgICAgICAgICAgIHtwcm9wcy5jb3JlLmNvcmVfcmVuZGVyZXIocHJvcHMpfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl19