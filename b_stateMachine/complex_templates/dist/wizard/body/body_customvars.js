define(['exports', 'react', '../core/core_customvars'], function (exports, _react, _core_customvars) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = body_customvars;

    var _react2 = _interopRequireDefault(_react);

    var _core_customvars2 = _interopRequireDefault(_core_customvars);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _objectWithoutProperties(obj, keys) {
        var target = {};

        for (var i in obj) {
            if (keys.indexOf(i) >= 0) continue;
            if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
            target[i] = obj[i];
        }

        return target;
    }

    function body_customvars(props) {
        let _props$core = props.core,
            { core_renderer } = _props$core,
            coreprops = _objectWithoutProperties(_props$core, ['core_renderer']);
        return _react2.default.createElement(
            'div',
            { className: 'body' },
            (0, _core_customvars2.default)(coreprops)
        );
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2pzeC93aXphcmQvYm9keS9ib2R5X2N1c3RvbXZhcnMuanMiXSwibmFtZXMiOlsiYm9keV9jdXN0b212YXJzIiwicHJvcHMiLCJjb3JlIiwiY29yZV9yZW5kZXJlciIsImNvcmVwcm9wcyJdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztzQkFNd0JBLGU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFULGFBQVNBLGVBQVQsQ0FBeUJDLEtBQXpCLEVBQWdDO0FBQzNDLDBCQUFvQ0EsTUFBTUMsSUFBMUM7QUFBQSxZQUFJLEVBQUNDLGFBQUQsRUFBSjtBQUFBLFlBQXVCQyxTQUF2QjtBQUNBLGVBQ0k7QUFBQTtBQUFBLGNBQUssV0FBVSxNQUFmO0FBQ0ssMkNBQWdCQSxTQUFoQjtBQURMLFNBREo7QUFLSCIsImZpbGUiOiJib2R5X2N1c3RvbXZhcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBjb3JlX2N1c3RvbXZhcnMgZnJvbSAnLi4vY29yZS9jb3JlX2N1c3RvbXZhcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBib2R5X2N1c3RvbXZhcnMocHJvcHMpIHtcbiAgICBsZXQge2NvcmVfcmVuZGVyZXIsIC4uLmNvcmVwcm9wc30gPSBwcm9wcy5jb3JlO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuICAgICAgICAgICAge2NvcmVfY3VzdG9tdmFycyhjb3JlcHJvcHMpfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl19