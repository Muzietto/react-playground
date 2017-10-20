define(['exports', 'react', './summary'], function (exports, _react, _summary) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = body;

    var _react2 = _interopRequireDefault(_react);

    var _summary2 = _interopRequireDefault(_summary);

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

    function body(props) {
        let _props$core = props.core,
            { corefun } = _props$core,
            coreprops = _objectWithoutProperties(_props$core, ['corefun']);
        return _react2.default.createElement(
            'div',
            { className: 'body' },
            _react2.default.createElement(_summary2.default, props.summary),
            corefun(coreprops)
        );
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9ib2R5LmpzIl0sIm5hbWVzIjpbImJvZHkiLCJwcm9wcyIsImNvcmUiLCJjb3JlZnVuIiwiY29yZXByb3BzIiwic3VtbWFyeSJdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztzQkFNd0JBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFULGFBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUNoQywwQkFBOEJBLE1BQU1DLElBQXBDO0FBQUEsWUFBSSxFQUFDQyxPQUFELEVBQUo7QUFBQSxZQUFpQkMsU0FBakI7QUFDQSxlQUNJO0FBQUE7QUFBQSxjQUFLLFdBQVUsTUFBZjtBQUNJLDZEQUFhSCxNQUFNSSxPQUFuQixDQURKO0FBRUtGLG9CQUFRQyxTQUFSO0FBRkwsU0FESjtBQU1IIiwiZmlsZSI6ImJvZHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBTdW1tYXJ5IGZyb20gJy4vc3VtbWFyeSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJvZHkocHJvcHMpIHtcbiAgICBsZXQge2NvcmVmdW4sIC4uLmNvcmVwcm9wc30gPSBwcm9wcy5jb3JlO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuICAgICAgICAgICAgPFN1bW1hcnkgey4uLnByb3BzLnN1bW1hcnl9Lz5cbiAgICAgICAgICAgIHtjb3JlZnVuKGNvcmVwcm9wcyl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXX0=