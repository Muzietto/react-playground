define(['exports', 'react', './summary'], function (exports, _react, _summary) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = body_datasets;

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

    function body_datasets(props) {
        let _props$core = props.core,
            { core_renderer } = _props$core,
            coreprops = _objectWithoutProperties(_props$core, ['core_renderer']);
        return _react2.default.createElement(
            'div',
            { className: 'body' },
            _react2.default.createElement(_summary2.default, props.summary),
            core_renderer(coreprops)
        );
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC93aXphcmQvYm9keV9kYXRhc2V0cy5qcyJdLCJuYW1lcyI6WyJib2R5X2RhdGFzZXRzIiwicHJvcHMiLCJjb3JlIiwiY29yZV9yZW5kZXJlciIsImNvcmVwcm9wcyIsInN1bW1hcnkiXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7c0JBTXdCQSxhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBVCxhQUFTQSxhQUFULENBQXVCQyxLQUF2QixFQUE4QjtBQUN6QywwQkFBb0NBLE1BQU1DLElBQTFDO0FBQUEsWUFBSSxFQUFDQyxhQUFELEVBQUo7QUFBQSxZQUF1QkMsU0FBdkI7QUFDQSxlQUNJO0FBQUE7QUFBQSxjQUFLLFdBQVUsTUFBZjtBQUNJLDZEQUFhSCxNQUFNSSxPQUFuQixDQURKO0FBRUtGLDBCQUFjQyxTQUFkO0FBRkwsU0FESjtBQU1IIiwiZmlsZSI6ImJvZHlfZGF0YXNldHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBTdW1tYXJ5IGZyb20gJy4vc3VtbWFyeSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJvZHlfZGF0YXNldHMocHJvcHMpIHtcbiAgICBsZXQge2NvcmVfcmVuZGVyZXIsIC4uLmNvcmVwcm9wc30gPSBwcm9wcy5jb3JlO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuICAgICAgICAgICAgPFN1bW1hcnkgey4uLnByb3BzLnN1bW1hcnl9Lz5cbiAgICAgICAgICAgIHtjb3JlX3JlbmRlcmVyKGNvcmVwcm9wcyl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXX0=